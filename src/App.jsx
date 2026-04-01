import gsap from 'gsap';
import { Draggable } from 'gsap/all';

import { Navbar, Welcome, Dock, Home, Background, MobileShell } from '#components';
import {
  Safari,
  Terminal,
  Resume,
  Gallery,
  Contact,
  Finder,
  Text,
  Image,
} from '#windows';
import useIsMobile from '#hooks/useIsMobile';

gsap.registerPlugin(Draggable);

const App = () => {
  const isMobile = useIsMobile();

  return (
    <main>
      <Background />

      {isMobile ? (
        /* ── Mobile: iOS-style single-page navigation ── */
        <MobileShell />
      ) : (
        /* ── Desktop: macOS windowed experience (unchanged) ── */
        <>
          <Navbar />
          <Welcome />
          <Dock />
          <Terminal />
          <Safari />
          <Resume />
          <Finder />
          <Text />
          <Image />
          <Contact />
          <Home />
          <Gallery />
        </>
      )}
    </main>
  );
};

export default App;
