import React from 'react';
import style from './style.module.css';
import { useAdminContext } from '@/contexts/AdminContext';
import { ComponentType } from '@/contexts/ContentContext';

type Props = {
  name: string;
  tag: ComponentType;
};

const ComponentItem = ({ name, tag }: Props) => {
  const { setIsDragging, setDragComponent } = useAdminContext();

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragComponent({ name, tag });
  };

  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDragging(false);
    setDragComponent(null);
  };

  return (
    <div
      className={style.component_item}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <div className={style.thumbnail}></div>
      <p className={style.name}>{name}</p>
    </div>
  );
};

export default ComponentItem;
