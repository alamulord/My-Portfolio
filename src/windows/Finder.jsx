import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import useLocationStore from '#store/location';
import { locations } from '#constants';
import { Search } from 'lucide-react';
import clsx from 'clsx';
import useWindowStore from '#store/window';

const MAX_VISIBLE_WORK_ITEMS = 4;

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const workItems = locations.work.children;
  const favItems = Object.values(locations);
  const workNeedsScroll = workItems.length > MAX_VISIBLE_WORK_ITEMS;

  const finderList = (name, items, needsScroll = false) => (
    <div className={clsx('flex flex-col', needsScroll && 'min-h-0 shink')}>
      <h3>{name}</h3>
      <ul
        className={clsx(
          'space-y-1',
          needsScroll && ['overflow-y-auto', 'scrollbar-ghost', 'pr-1'],
        )}
        style={
          needsScroll
            ? { maxHeight: `${MAX_VISIBLE_WORK_ITEMS * 40}px` }
            : undefined
        }
      >
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              item.id === activeLocation.id ? 'active' : 'not-active',
            )}
          >
            <img src={item.icon} alt={item.name} className='w-4 shrink-0' />
            <p className='font-bold truncate text-sm'>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  const openItem = (item) => {
    if (item.fileType === 'pdf') return openWindow('resume', item);
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
      <div className='flex window-content bg-[#0b1326]/40 overflow-hidden!'>
        <div className='sidebar flex flex-col overflow-hidden'>
          {finderList('Favorites', favItems)}
          {finderList('Work', workItems, workNeedsScroll)}
        </div>
        {/* content inside the tabs */}
        <ul className='content'>
          {activeLocation?.children?.map((item) => (
            <li
              key={item.id}
              className='group cursor-pointer'
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
