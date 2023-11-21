import React from 'react';
import style from './style.module.css';
import { useNavigate } from 'react-router';
import { useContentContext } from '@/contexts/ContentContext';

type Props = {};

const ActionButtons = (props: Props) => {
  const navigate = useNavigate();
  const { save, view } = useContentContext();

  const handleSave = () => save();
  const handleUndo = () => {};
  const handleRedo = () => {};
  const handleExport = () => {};
  const handleImport = () => {};
  const handleView = () => view(() => navigate('/consumer'));

  return (
    <div className={style.actions}>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
      <button onClick={handleExport}>Export</button>
      <button onClick={handleImport}>Import</button>
      <button onClick={handleView}>View</button>
    </div>
  );
};

export default ActionButtons;
