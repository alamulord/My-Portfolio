import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Wallpapers are now in public/images for proper HTTP caching + CDN-friendly URLs.
// This ensures they display even on slow/weak network connections because:
//  1. They get separate cacheable HTTP responses (not bundled into JS)
//  2. The first one is <link rel="preload"> in index.html (high priority fetch)
//  3. A solid dark fallback is shown instantly while images load
const wallpapers = [
  '/images/wallpaper1.webp',
  '/images/wallpaper2.webp',
  '/images/wallpaper3.webp',
];

const Background = () => {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const preloadedRef = useRef(new Set());

  // Preload the first image immediately, then lazily prefetch the rest
  useEffect(() => {
    // Preload current wallpaper
    if (!preloadedRef.current.has(wallpapers[0])) {
      const img = new Image();
      img.src = wallpapers[0];
      img.onload = () => {
        preloadedRef.current.add(wallpapers[0]);
        setLoaded(true);
      };
      img.onerror = () => setLoaded(true); // show fallback on error
    } else {
      setLoaded(true);
    }

    // Lazily prefetch the other wallpapers so they're ready when the timer fires
    const prefetchRest = () => {
      wallpapers.slice(1).forEach((src) => {
        if (!preloadedRef.current.has(src)) {
          const img = new Image();
          img.src = src;
          img.onload = () => preloadedRef.current.add(src);
        }
      });
    };

    // Defer prefetch until after main content loads (2s delay)
    const prefetchTimer = setTimeout(prefetchRest, 2000);
    return () => clearTimeout(prefetchTimer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % wallpapers.length);
    }, 60000); // 1 minute

    return () => clearInterval(interval);
  }, []);

  return (
    // #1a1a2e is a deep navy – shows instantly as a dark themed fallback
    // before any image loads, so the page never looks broken
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{ backgroundColor: '#1a1a2e' }}
    >
      <AnimatePresence mode="wait">
        {loaded && (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{
              backgroundImage: `url(${wallpapers[index]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            className="absolute inset-0"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Background;
