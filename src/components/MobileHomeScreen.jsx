import { useState, useRef, useEffect } from 'react';
import useMobileStore from '#store/mobile';
import { dockApps } from '#constants';
import { Search, X, ChevronRight } from 'lucide-react';

// Map dock app IDs to their corresponding mobile page IDs
const mobileApps = [
  ...dockApps.filter((app) => app.canOpen && app.id !== 'trash'),
  {
    id: 'resume',
    name: 'Resume',
    icon: 'pdf.png',
    canOpen: true,
  },
];

const MobileHomeScreen = ({ onSearchOpen }) => {
  const { openPage } = useMobileStore();

  return (
    <div className="mobile-home-screen">
      {/* App icon grid */}
      <div className="mobile-home-grid">
        {mobileApps.map((app) => (
          <button
            key={app.id}
            className="mobile-app-icon"
            onClick={() => openPage(app.id)}
          >
            <div className="mobile-app-icon-img">
              <img src={`/images/${app.icon}`} alt={app.name} />
            </div>
            <span className="mobile-app-icon-label">{app.name}</span>
          </button>
        ))}
      </div>

      {/* Welcome text */}
      <div className="mobile-welcome">
        <p className="mobile-welcome-subtitle">
          Hey, I'm Abdulsamad Aliyu Ayomide
        </p>
        <h1 className="mobile-welcome-title">Welcome to my portfolio</h1>
      </div>

      {/* Search trigger — no longer has dropdown, just opens the overlay */}
      <button
        className="mobile-search-bar"
        onClick={onSearchOpen}
        aria-label="Open search"
      >
        <Search size={15} />
        <span className="mobile-search-placeholder">Search&hellip;</span>
      </button>
    </div>
  );
};

export default MobileHomeScreen;
