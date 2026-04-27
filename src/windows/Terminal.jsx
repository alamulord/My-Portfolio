import { techStack } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import { Check, Flag } from 'lucide-react';
import { WindowControls } from '#components';

const Terminal = () => {
  return (
    <>
      <div id='window-header'>
        <WindowControls target='terminal' />
        <h2 className='text-[#dae2fd]'>Terminal</h2>
      </div>
      <div className='techstack window-content bg-[#0b1326]/40 p-4 overflow-auto'>
        {/* Terminal Header */}
        <div className='mb-4 font-mono text-sm'>
          <p className='text-[#92d9ff]'>
            <span className='text-[#00c2ff] font-bold'>@abdulsamad</span>
            <span className='text-[#bcc8d1]'> % </span>
            <span className='text-[#dae2fd]'>show tech stack...</span>
          </p>
        </div>

        {/* Tech Stack List */}
        <div className='space-y-3 font-mono text-sm'>
          {techStack.map(({ category, items }, index) => (
            <div
              key={category}
              className='flex items-start gap-3 p-3 rounded-lg bg-[#171f33]/30 border border-white/5 hover:border-[#00c2ff]/20 transition-colors'
            >
              <Check className='w-5 h-5 text-[#00c2ff] flex-shrink-0 mt-0.5' />
              <div className='flex-1 min-w-0'>
                <h3 className='text-[#d0bcff] font-semibold mb-1'>
                  {category}
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {items.map((item, i) => (
                    <span
                      key={i}
                      className='px-2 py-1 text-xs bg-[#0b1326]/50 border border-white/10 rounded text-[#bcc8d1] hover:border-[#92d9ff]/50 hover:text-[#92d9ff] transition-colors'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className='mt-4 pt-4 border-t border-white/10 font-mono text-xs space-y-2'>
          <p className='text-[#00c2ff] flex items-center gap-2'>
            <Check className='w-4 h-4' />
            <span>
              {techStack.length} of {techStack.length} stacks loaded
              successfully (100%)
            </span>
          </p>
          <p className='text-[#bcc8d1] flex items-center gap-2'>
            <Flag className='w-3 h-3 text-[#d0bcff]' />
            <span>Render Time: 6ms</span>
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, 'terminal');

export default TerminalWindow;
