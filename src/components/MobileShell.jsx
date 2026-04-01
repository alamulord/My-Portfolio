import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useMobileStore from '#store/mobile';
import MobileHomeScreen from './MobileHomeScreen';
import MobileSpotlight from './MobileSpotlight';
import { dockApps } from '#constants';
import {
  MobileFinder,
  MobileSafari,
  MobileGallery,
  MobileContact,
  MobileTerminal,
  MobileResume,
  MobileText,
  MobileImage,
} from '#mobile';

const pageComponents = {
  finder: MobileFinder,
  safari: MobileSafari,
  photos: MobileGallery,
  contact: MobileContact,
  terminal: MobileTerminal,
  resume: MobileResume,
  txtfile: MobileText,
  imgfile: MobileImage,
};

const pageVariants = {
  initial: { x: '100%', opacity: 0.8 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '100%', opacity: 0.8 },
};

// Only show the first 4 dock apps (no trash on mobile dock)
const mobileDockApps = dockApps.filter((a) => a.id !== 'trash').slice(0, 4);

const MobileShell = () => {
  const { activePage, pageData, openPage } = useMobileStore();
  const [spotlightOpen, setSpotlightOpen] = useState(false);

  const ActiveComponent = activePage ? pageComponents[activePage] : null;

  return (
    <div className="mobile-shell">
      {/* Status bar — decorative iOS-style */}
      <div className="mobile-status-bar">
        <span className="mobile-status-time">
          {new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })}
        </span>
        <div className="mobile-status-icons">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
            <rect x="0" y="8" width="3" height="4" rx="0.5" />
            <rect x="4.5" y="5" width="3" height="7" rx="0.5" />
            <rect x="9" y="2" width="3" height="10" rx="0.5" />
            <rect x="13.5" y="0" width="2.5" height="12" rx="0.5" />
          </svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
            <path d="M8 3.5C9.7 3.5 11.2 4.2 12.3 5.3L13.7 3.9C12.2 2.4 10.2 1.5 8 1.5C5.8 1.5 3.8 2.4 2.3 3.9L3.7 5.3C4.8 4.2 6.3 3.5 8 3.5Z" />
            <path d="M8 7C9 7 9.9 7.4 10.6 8L12 6.6C10.9 5.6 9.5 5 8 5C6.5 5 5.1 5.6 4 6.6L5.4 8C6.1 7.4 7 7 8 7Z" />
            <circle cx="8" cy="10.5" r="1.5" />
          </svg>
          <svg
            width="25"
            height="12"
            viewBox="0 0 25 12"
            fill="none"
            stroke="currentColor"
          >
            <rect x="0.5" y="0.5" width="21" height="11" rx="2" strokeWidth="1" />
            <rect x="22.5" y="3.5" width="2" height="5" rx="1" fill="currentColor" stroke="none" />
            <rect x="2" y="2" width="15" height="8" rx="1" fill="currentColor" stroke="none" />
          </svg>
        </div>
      </div>

      {/* Home screen */}
      <div
        className="mobile-home-container"
        style={{ display: activePage ? 'none' : 'flex' }}
      >
        <MobileHomeScreen onSearchOpen={() => setSpotlightOpen(true)} />
      </div>

      {/* Active page with slide transition */}
      <AnimatePresence mode="wait">
        {ActiveComponent && (
          <motion.div
            key={activePage}
            className="mobile-page"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: 'tween', duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <ActiveComponent data={pageData} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Fixed bottom dock — always visible on home screen ── */}
      {!activePage && (
        <div className="mobile-fixed-dock">
          {mobileDockApps.map((app) => (
            <button
              key={app.id}
              className="mobile-fixed-dock-icon"
              onClick={() => openPage(app.id)}
              aria-label={app.name}
            >
              <img src={`/images/${app.icon}`} alt={app.name} />
              <span className="mobile-fixed-dock-label">{app.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Spotlight search overlay */}
      <MobileSpotlight
        open={spotlightOpen}
        onClose={() => setSpotlightOpen(false)}
      />

      {/* iOS home indicator */}
      <div className="mobile-home-indicator" />
    </div>
  );
};

export default MobileShell;
