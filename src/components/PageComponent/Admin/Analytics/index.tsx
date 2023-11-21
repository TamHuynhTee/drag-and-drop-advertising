import { useAdminContext } from '@/contexts/AdminContext';
import { useContentContext } from '@/contexts/ContentContext';

type Props = {};

const Analytics = (props: Props) => {
  const { dragComponent } = useAdminContext();
  const { content, selectedComponent } = useContentContext();
  return (
    <div className={'analytics'}>
      <p>Dragging: {dragComponent?.name}</p>
      <p>Instance(s): {content.length}</p>
      <p>
        Config: {selectedComponent ? JSON.stringify(selectedComponent) : null}
      </p>
    </div>
  );
};

export default Analytics;
