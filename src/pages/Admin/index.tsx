import ActionButtons from '@/components/PageComponent/Admin/ActionButtons';
import ComponentMenu from '@/components/PageComponent/Admin/ComponentMenu';
import Preview from '@/components/PageComponent/Admin/Preview';
import { AdminContext } from '@/contexts/AdminContext';
import { useState } from 'react';

type Props = {};

const Admin = (props: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragComponent, setDragComponent] = useState<any>(null);

  return (
    <AdminContext.Provider
      value={{ isDragging, dragComponent, setIsDragging, setDragComponent }}
    >
      <div className={'admin_layout'}>
        {/* Header */}
        <div className={'header'}>
          <div className={'header_content'}>
            <ActionButtons />
          </div>
        </div>

        {/* Content */}
        <div className={'content'}>
          <ComponentMenu />
          <Preview />
        </div>
      </div>
    </AdminContext.Provider>
  );
};

export default Admin;
