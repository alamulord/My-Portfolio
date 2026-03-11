import gsap from 'gsap';
import { Draggable } from 'gsap/all';

import { Navbar, Welcome, Dock, Home } from '#components';
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

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
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

      <Home/>

      <Gallery />
    </main>
  );
};

export default App;
