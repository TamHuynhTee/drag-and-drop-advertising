import { createContext, useContext } from 'react';

type AdminContextType = {
  isDragging: boolean;
  dragComponent: any;
  setIsDragging: (state: boolean) => void;
  setDragComponent: (state: any) => void;
};

export const AdminContext = createContext({} as AdminContextType);

export const useAdminContext = () => {
  return useContext(AdminContext);
};
