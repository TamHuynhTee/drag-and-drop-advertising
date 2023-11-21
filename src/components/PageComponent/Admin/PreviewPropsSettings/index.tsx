import { useContentContext } from '@/contexts/ContentContext';
import React, { useEffect } from 'react';

type Props = {};

const PreviewPropsSettings = (props: Props) => {
  const { selectedComponent } = useContentContext();

  const RenderSetting = () => {
    switch (selectedComponent?.type) {
      case 'button':
        return <EditButton />;
      case 'p':
        return <EditParagraph />;
      default:
        return <></>;
    }
  };

  return <div className={'props_settings'}>{RenderSetting()}</div>;
};

const EditParagraph = () => {
  const { selectedComponent, editComponent } = useContentContext();
  const refInput = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (refInput.current) refInput.current.value = selectedComponent?.text;
  }, [selectedComponent.id]);

  function onChangeText(e: React.ChangeEvent<HTMLInputElement>) {
    editComponent(selectedComponent?.id as number, 'text', e.target.value);
  }

  return (
    <div className="form_edit">
      <div className="">
        <label htmlFor="paragraphText">Paragraph text</label>
        <input
          type="text"
          id="paragraphText"
          ref={refInput}
          onChange={onChangeText}
        />
      </div>
    </div>
  );
};

const EditButton = () => {
  const { selectedComponent, editComponent } = useContentContext();
  const refText = React.useRef<HTMLInputElement>(null);
  const refMessage = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (refText.current) refText.current.value = selectedComponent?.text;
    if (refMessage.current)
      refMessage.current.value = selectedComponent?.alertMessage;
  }, [selectedComponent.id]);

  function onChangeText(e: React.ChangeEvent<HTMLInputElement>) {
    editComponent(selectedComponent?.id as number, 'text', e.target.value);
  }
  function onChangeAlertMessage(e: React.ChangeEvent<HTMLInputElement>) {
    editComponent(
      selectedComponent?.id as number,
      'alertMessage',
      e.target.value
    );
  }
  return (
    <div className="form_edit">
      <div className="">
        <label htmlFor="buttonText">Button text</label>
        <input
          ref={refText}
          type="text"
          id="buttonText"
          onChange={onChangeText}
        />
      </div>
      <div className="">
        <label htmlFor="alertMessage">Alert message</label>
        <input
          ref={refMessage}
          type="text"
          id="alertMessage"
          onChange={onChangeAlertMessage}
        />
      </div>
    </div>
  );
};

export default PreviewPropsSettings;
