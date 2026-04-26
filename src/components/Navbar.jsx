import { navLinks, navIcons } from '#constants';
import useWindowStore from '#store/window';
import dayjs from 'dayjs';
import { Settings, BatteryFull, Wifi, Search } from 'lucide-react';

const Navbar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav className='fixed top-0 w-full z-50 flex justify-between items-center px-6 h-8 bg-slate-900/30 backdrop-blur-2xl border-b border-white/5 backdrop-saturate-150 shadow-[0_8px_32px_0_rgba(139,92,246,0.1)] font-sans text-sm tracking-tight text-white/80'>
      <div className='flex items-center gap-6'>
        <span className='font-bold text-white tracking-widest text-sm'>
          Aliyu's Portfolio
        </span>
        <div className='flex gap-4'>
          <a
            className='text-cyan-400 border-b-2 border-cyan-400 pb-1 transition-all duration-300 ease-out active:scale-95 cursor-pointer'
            href='#'
          >
            Desktop
          </a>
          {navLinks.map(({ id, name, type }) => (
            <a
              key={id}
              onClick={() => openWindow(type)}
              className='text-white/60 hover:text-white transition-colors hover:bg-white/5 transition-all duration-300 ease-out active:scale-95 px-2 rounded cursor-pointer'
            >
              {name}
            </a>
          ))}
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <Settings className='text-[18px] text-white/80' />
        <BatteryFull className='text-[18px] text-white/80' />
        <Wifi className='text-[18px] text-white/80' />
        <Search className='text-[18px] text-white/80 ml-2' />
        <time>{dayjs().format('ddd MMMM D, h:mm A')}</time>
      </div>
    </nav>
  );
};

export default Navbar;
