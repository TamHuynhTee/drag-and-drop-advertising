import React from 'react';
import cn from 'clsx';
import { useAdminContext } from '@/contexts/AdminContext';
import { useContentContext } from '@/contexts/ContentContext';
import Analytics from '../Analytics';
import PreviewPropsSettings from '../PreviewPropsSettings';

type Props = {};

const Preview = (props: Props) => {
  const { isDragging, dragComponent } = useAdminContext();
  const { addComponent, content, setSelectedComponent, selectedComponent } =
    useContentContext();

  const onDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    addComponent({ type: dragComponent?.tag });
  };

  const RenderElement = ({ element }: { element: any }) => {
    return (
      <div
        onClick={() => setSelectedComponent(element)}
        style={{
          display: 'flex',
          justifyContent: 'center',
          border:
            selectedComponent?.id === element?.id
              ? '1px solid blue'
              : '1px solid transparent',
        }}
      >
        {React.createElement(element.type, {
          children: element?.text,
          style: {},
        })}
      </div>
    );
  };

  return (
    <div className={'preview'}>
      <div className={'preview_content'}>
        <Analytics />
        <div
          className={cn({
            ['droppable_section']: true,
            ['show_content']: true,
            ['dragging']: isDragging,
          })}
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDrop}
        >
          {content.map((element, index) => (
            <RenderElement key={index} element={element} />
          ))}
        </div>
      </div>
      <PreviewPropsSettings />
    </div>
  );
};

export default Preview;
