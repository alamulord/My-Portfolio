import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import useLocationStore from '#store/location';
import { locations } from '#constants';
import { Search } from 'lucide-react';
import clsx from 'clsx';
import useWindowStore from '#store/window';

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const finderList = (name, item) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {item.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              item.id === activeLocation.id ? 'active' : 'not-active',
            )}
          >
            <img src={item.icon} alt={item.name} className='w-4' />
            <p className='font-bold truncate text-sm'>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  const openItem = (item) => {
    if (item.fileType === 'pdf') return openWindow('resume');
    if (item.kind === 'folder') return setActiveLocation(item);
    if (['fig', 'url'].includes(item.fileType) && item.href)
      return window.open(item.href, '_blank');
    if (item.fileType === 'txt') return openWindow('txtfile', item);
    if (item.fileType === 'img') return openWindow('imgfile', item);
  };
  return (
    <>
      <div id='window-header'>
        <WindowControls target='finder' />
        <Search className='icon' />
      </div>
      <div className='flex h-full bg-white'>
        <div className='sidebar'>
          {finderList('Favorites', Object.values(locations))}
          {finderList('Work', locations.work.children)}
        </div>
        {/* content inside the tabs */}
        <ul className='content'>
          {activeLocation?.children?.map((item) => (
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

const FinderWindow = WindowWrapper(Finder, 'finder');

export default FinderWindow;
