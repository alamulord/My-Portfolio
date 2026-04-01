import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 639; // px — matches Tailwind's `sm` (640px)

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth <= MOBILE_BREAKPOINT,
  );

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);

    const handleChange = (e) => setIsMobile(e.matches);

    // Modern browsers
    mql.addEventListener('change', handleChange);

    // Sync initial value (in case SSR or mismatch)
    setIsMobile(mql.matches);

    return () => mql.removeEventListener('change', handleChange);
  }, []);

  return isMobile;
};

export default useIsMobile;
