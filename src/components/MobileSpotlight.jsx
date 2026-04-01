import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, X, ChevronRight } from 'lucide-react';
import useMobileStore from '#store/mobile';

const searchShortcuts = [
  {
    id: 'finder',
    label: 'Projects',
    description: 'View all my work & projects',
    icon: '📁',
    category: 'Portfolio',
  },
  {
    id: 'safari',
    label: 'Articles',
    description: 'Read my developer blog',
    icon: '🧭',
    category: 'Portfolio',
  },
  {
    id: 'photos',
    label: 'Gallery',
    description: 'Photo gallery & memories',
    icon: '🖼️',
    category: 'Portfolio',
  },
  {
    id: 'contact',
    label: 'Contact',
    description: 'Get in touch with me',
    icon: '✉️',
    category: 'Connect',
  },
  {
    id: 'terminal',
    label: 'Tech Stack',
    description: 'View my skills & technologies',
    icon: '⚙️',
    category: 'About',
  },
  {
    id: 'resume',
    label: 'Resume',
    description: 'Download or view my resume',
    icon: '📄',
    category: 'About',
  },
];

const MobileSpotlight = ({ open, onClose }) => {
  const { openPage } = useMobileStore();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  // Auto-focus input when overlay opens
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => inputRef.current?.focus(), 200);
      return () => clearTimeout(timer);
    } else {
      setQuery('');
    }
  }, [open]);

  const filtered = query.trim()
    ? searchShortcuts.filter(
        (s) =>
          s.label.toLowerCase().includes(query.toLowerCase()) ||
          s.description.toLowerCase().includes(query.toLowerCase()) ||
          s.category.toLowerCase().includes(query.toLowerCase()),
      )
    : searchShortcuts;

  // Group by category
  const grouped = filtered.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const handleSelect = (id) => {
    onClose();
    openPage(id);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="spotlight-backdrop"
            className="mobile-spotlight-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onPointerDown={onClose}
          />

          {/* Panel — slides up from bottom */}
          <motion.div
            key="spotlight-panel"
            className="mobile-spotlight-panel"
            initial={{ y: '100%', opacity: 0.6 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 380, damping: 38 }}
          >
            {/* Drag indicator */}
            <div className="mobile-spotlight-handle" />

            {/* Search input row */}
            <div className="mobile-spotlight-search-row">
              <div className="mobile-spotlight-search-box">
                <Search size={18} className="mobile-spotlight-search-icon" />
                <input
                  ref={inputRef}
                  type="text"
                  className="mobile-spotlight-input"
                  placeholder="Search anything…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                {query && (
                  <button
                    className="mobile-spotlight-clear"
                    onPointerDown={() => setQuery('')}
                    aria-label="Clear search"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
              <button className="mobile-spotlight-cancel" onClick={onClose}>
                Cancel
              </button>
            </div>

            {/* Results */}
            <div className="mobile-spotlight-results">
              {Object.keys(grouped).length === 0 ? (
                <div className="mobile-spotlight-empty">
                  <span className="mobile-spotlight-empty-icon">🔍</span>
                  <p>No results for &quot;{query}&quot;</p>
                </div>
              ) : (
                Object.entries(grouped).map(([category, items], gi) => (
                  <motion.div
                    key={category}
                    className="mobile-spotlight-group"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: gi * 0.05 }}
                  >
                    <p className="mobile-spotlight-group-label">{category}</p>
                    <div className="mobile-spotlight-group-items">
                      {items.map((item, i) => (
                        <motion.button
                          key={item.id}
                          className="mobile-spotlight-item"
                          onClick={() => handleSelect(item.id)}
                          whileTap={{ scale: 0.97 }}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: gi * 0.05 + i * 0.03 }}
                        >
                          <span className="mobile-spotlight-item-icon">
                            {item.icon}
                          </span>
                          <div className="mobile-spotlight-item-info">
                            <span className="mobile-spotlight-item-label">
                              {item.label}
                            </span>
                            <span className="mobile-spotlight-item-desc">
                              {item.description}
                            </span>
                          </div>
                          <ChevronRight
                            size={14}
                            className="mobile-spotlight-item-arrow"
                          />
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSpotlight;
