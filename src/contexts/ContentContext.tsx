import { createContext, useContext, useEffect, useState } from 'react';

export type ComponentType = 'button' | 'p';

export type Component = {
  type: ComponentType;
};

type ContentContextType = {
  content: Component[];
  setContent: (content: Component[]) => void;
  selectedComponent: any;
  setSelectedComponent: (content: any) => void;
  addComponent: (content: Component) => void;
  editComponent: (id: number, field: string, value: any) => void;
  removeComponent: (id: number) => void;
  save: () => void;
  view: (cb: any) => void;
};

export const ContentContext = createContext({} as ContentContextType);

export const ContentContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [content, setContent] = useState<any[]>([]);
  const [selectedComponent, setSelectedComponent] = useState<any>(null);

  useEffect(() => {
    const storedContent = localStorage.getItem('content');
    if (storedContent) {
      setContent(JSON.parse(storedContent));
    }
  }, []);

  const addComponent = (component: Component) => {
    const componentObj: Record<string, any> = { ...component };
    if (component.type === 'button') {
      componentObj['alertMessage'] = 'Click on button';
      componentObj['text'] = 'Button';
      componentObj['id'] = Date.now();
    }
    if (component.type === 'p') {
      componentObj['text'] = 'Paragraph';
      componentObj['id'] = Date.now();
    }
    setContent((_con) => [..._con, componentObj]);
  };

  const editComponent = (id: number, field: string, value: any) => {
    const index = content.findIndex((component) => component.id === id);
    if (index !== -1) {
      const newContent = [...content];
      newContent[index][field] = value;
      setContent(newContent);
    }
  };

  const removeComponent = (id: number) => {
    const index = content.findIndex((component) => component.id === id);
    if (index !== -1) {
      const newContent = [...content];
      newContent.splice(index, 1);
      setContent(newContent);
    }
  };

  const save = () => {
    if (content.length === 0) {
      return alert('No content to save');
    }
    localStorage.setItem('content', JSON.stringify(content));
  };

  const view = (callBack: () => void) => {
    const storedContent = localStorage.getItem('content');
    const saved = storedContent === JSON.stringify(content);
    if (!saved) return alert('Please save your result before view');
    callBack();
  };

  return (
    <ContentContext.Provider
      value={{
        content,
        setContent,
        setSelectedComponent,
        selectedComponent,
        addComponent,
        editComponent,
        save,
        removeComponent,
        view,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContentContext = () => {
  return useContext(ContentContext);
};
