import React from 'react';
import ComponentItem from '../ComponentItem';

type Props = {};

const ComponentMenu = (props: Props) => {
  return (
    <div className={'component_menu'}>
      <ComponentItem name="button" tag="button" />
      <ComponentItem name="paragraph" tag="p" />
    </div>
  );
};

export default ComponentMenu;
