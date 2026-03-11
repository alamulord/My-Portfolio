
import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import { locations } from '#constants';
import useWindowStore from '#store/window';
import { Trash2 } from 'lucide-react';

const Trash = () => {
  const { openWindow } = useWindowStore();
  const trashItems = locations.trash.children;

  const openItem = (item) => {
    if (item.fileType === 'img') return openWindow('imgfile', item);
  };

  return (
    <>
      <div id='window-header'>
        <WindowControls target='trash' />
        <Trash2 className='icon' />
      </div>
      <div className='flex h-full bg-white w-full'>
        <ul className='content w-full'>
          {trashItems.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const TrashWindow = WindowWrapper(Trash, 'trash');
export default TrashWindow;