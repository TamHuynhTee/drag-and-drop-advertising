import { useContentContext } from '@/contexts/ContentContext';
import React from 'react';

type Props = {};

const Consumer = (props: Props) => {
  const { content } = useContentContext();

  const RenderElement = ({ element }: { element: any }) => {
    switch (element?.type) {
      case 'p':
        return <p>{element?.text}</p>;
      case 'button':
        return (
          <button onClick={() => alert(element?.alertMessage)}>
            {element?.text}
          </button>
        );

      default:
        return <></>;
    }
  };
  return (
    <div className="show_content">
      {content.map((element, index) => (
        <RenderElement key={index} element={element} />
      ))}
    </div>
  );
};

export default Consumer;
