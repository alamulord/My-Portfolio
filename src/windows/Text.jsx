import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';
import { ArrowRight, Download } from 'lucide-react';

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  // return null if no file is currently opened so it doesn't crash or render blank content inside the wrapper
  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id='window-header'>
        <WindowControls target='txtfile' />
        <span className='ml-4 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-xs'>
          System Info :: About Me
        </span>
      </div>

      <div className='flex-1 p-6 grid grid-cols-12 gap-6 overflow-y-auto window-content bg-[#0b1326]/40'>
        <aside className='col-span-5 h-full rounded-lg overflow-hidden relative border border-white/10 group shadow-lg'>
          {image && (
            <img
              src={image}
              alt={name || 'Profile'}
              className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-luminosity opacity-80'
            />
          )}
          <div className='absolute inset-0 bg-gradient-to-t from-[#060e20]/90 via-transparent to-transparent'></div>
          <div className='absolute bottom-0 left-0 p-4 w-full'>
            <div className='backdrop-blur-md bg-[#0b1326]/30 border border-white/10 rounded px-3 py-2 flex items-center gap-2 w-max'>
              <span className='w-2 h-2 rounded-full bg-[#00c2ff] shadow-[0_0_8px_rgba(0,194,255,0.8)]'></span>
              <span className='font-label-caps text-label-caps text-[#92d9ff] uppercase text-xs'>
                Status: Online
              </span>
            </div>
          </div>
        </aside>
        <div className='col-span-7 flex flex-col gap-4 justify-center py-8 pr-4'>
          <h1 className='text-4xl font-bold text-[#dae2fd] mb-2 leading-tight'>
            Architecting <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#92d9ff] to-[#d0bcff]'>
              Digital Realities
            </span>
          </h1>
          <p className='text-lg text-[#bcc8d1] mb-6 max-w-[400px] leading-relaxed'>
            {Array.isArray(description) ? description.join(' ') : description}
          </p>
          <div className='flex flex-wrap gap-2 mb-8'>
            <span className='font-label-caps text-label-caps text-[#bcc8d1] px-3 py-1 rounded-full border border-white/20 bg-[#222a3d]/50 backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.02)] text-xs'>
              React.js
            </span>
            <span className='font-label-caps text-label-caps text-[#bcc8d1] px-3 py-1 rounded-full border border-white/20 bg-[#222a3d]/50 backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.02)] text-xs'>
              TypeScript
            </span>
            <span className='font-label-caps text-label-caps text-[#bcc8d1] px-3 py-1 rounded-full border border-white/20 bg-[#222a3d]/50 backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.02)] text-xs'>
              WebGL
            </span>
            <span className='font-label-caps text-label-caps text-[#bcc8d1] px-3 py-1 rounded-full border border-white/20 bg-[#222a3d]/50 backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.02)] text-xs'>
              System Design
            </span>
          </div>
          <div className='flex gap-4'>
            <button className='bg-gradient-to-r from-[#00c2ff] to-[#571bc1] text-[#003548] font-label-caps text-label-caps uppercase px-6 py-3 rounded border border-white/20 shadow-[0_4px_15px_rgba(87,27,193,0.4)] hover:brightness-125 hover:scale-[0.98] transition-all duration-300 flex items-center gap-2 text-xs'>
              <span>Init Sequence</span>
              <ArrowRight className='w-4 h-4' />
            </button>
            <button className='bg-[#171f33]/50 border border-white/20 text-[#dae2fd] font-label-caps text-label-caps uppercase px-6 py-3 rounded hover:bg-[#222a3d] transition-all duration-300 hover:scale-[0.98] flex items-center gap-2 text-xs'>
              <Download className='w-4 h-4' />
              <span>Fetch Core</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, 'txtfile');
export default TextWindow;
