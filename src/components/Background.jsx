import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import wallpaper1 from '../assets/images/wallpaper.png';
import wallpaper2 from '../assets/images/wallpaper2.png';
import wallpaper3 from '../assets/images/wallpaper3.png';

const wallpapers = [wallpaper1, wallpaper2, wallpaper3];

const Background = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % wallpapers.length);
    }, 60000); // 1 minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${wallpapers[index]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="absolute inset-0"
        />
      </AnimatePresence>
    </div>
  );
};

export default Background;
