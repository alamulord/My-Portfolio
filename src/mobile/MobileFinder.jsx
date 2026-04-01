import { useState } from 'react';
import MobilePageHeader from '#components/MobilePageHeader';
import MobileBottomBar from '#components/MobileBottomBar';
import useMobileStore from '#store/mobile';
import useLocationStore from '#store/location';
import { locations } from '#constants';
import { Search, FolderOpen, User } from 'lucide-react';
import clsx from 'clsx';

const bottomTabs = [
  { id: 'work', label: 'Work', icon: <FolderOpen size={20} /> },
  { id: 'about', label: 'About Me', icon: <User size={20} /> },
];

const MobileFinder = () => {
  const { openPage } = useMobileStore();
  const { activeLocation, setActiveLocation } = useLocationStore();
  const [activeTab, setActiveTab] = useState('work');

  const currentLocation =
    activeTab === 'work' ? locations.work : locations.about;

  // Use sub-location if we navigated into a folder, otherwise the root
  const displayLocation =
    activeLocation?.kind === 'folder' &&
    activeLocation.id !== currentLocation.id
      ? activeLocation
      : currentLocation;

  const title = displayLocation.name || 'Work';

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'work') {
      setActiveLocation(locations.work);
    } else {
      setActiveLocation(locations.about);
    }
  };

  const handleItemClick = (item) => {
    if (item.kind === 'folder') {
      setActiveLocation(item);
      return;
    }
    if (item.fileType === 'pdf') {
      openPage('resume', item);
      return;
    }
    if (['fig', 'url'].includes(item.fileType) && item.href) {
      window.open(item.href, '_blank');
      return;
    }
    if (item.fileType === 'txt') {
      openPage('txtfile', item);
      return;
    }
    if (item.fileType === 'img') {
      openPage('imgfile', item);
      return;
    }
  };

  const handleBack = () => {
    // If we're in a subfolder, go back to root
    if (displayLocation.id !== currentLocation.id) {
      setActiveLocation(currentLocation);
    } else {
      useMobileStore.getState().closePage();
    }
  };

  return (
    <div className="mobile-finder">
      <MobilePageHeader
        title={title}
        onBack={handleBack}
        rightAction={
          <button className="mobile-header-action">Cancel</button>
        }
      />

      {/* Search bar */}
      <div className="mobile-finder-search">
        <Search size={16} className="text-gray-400" />
        <input type="text" placeholder="Search" readOnly />
      </div>

      {/* File grid */}
      <div className="mobile-finder-grid">
        {displayLocation?.children?.map((item) => (
          <button
            key={item.id}
            className="mobile-finder-item"
            onClick={() => handleItemClick(item)}
          >
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </button>
        ))}
      </div>

      {/* Bottom tabs */}
      <MobileBottomBar
        items={bottomTabs}
        activeId={activeTab}
        onSelect={handleTabChange}
      />
    </div>
  );
};

export default MobileFinder;
