import { WindowControls } from '#components';
import { socials } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';

const Contact = () => {
  return (
    <>
      <div id='window-header'>
        <WindowControls target='contact' />
        Contact Me
      </div>

      <div className='p-5 space-y-5 window-content bg-[#0b1326]/40 backdrop-blur-xl text-[#dae2fd]'>
        {/* Profile Section */}
        <div className='flex flex-col items-center text-center space-y-3'>
          <div className='relative'>
            <img
              src='/images/abdulsamad.png'
              alt='abdulsamad'
              className='w-30 h-40 rounded-full border-2 border-white/20 shadow-lg'
            />
            <div className='absolute bottom-0 right-0 w-4 h-4 bg-[#00c2ff] rounded-full border-2 border-[#0b1326]'></div>
          </div>
          <div>
            <h3 className='text-xl font-bold text-[#dae2fd]'>Let's Connect</h3>
            <p className='text-sm text-[#bcc8d1] mt-1'>
              Got an idea? A bug to squash? Or just wanna talk tech? I'm in
            </p>
          </div>
          <a
            href='mailto:abdulsamadaayomide00@gmail.com'
            className='text-xs text-[#92d9ff] hover:text-[#d0bcff] transition-colors flex items-center gap-1'
          >
            abdulsamadaayomide00@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className='grid grid-cols-2 gap-3'>
          {socials.map(({ id, link, icon, bg, text }) => (
            <a
              key={id}
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='group relative overflow-hidden rounded-xl border border-white/10 bg-[#171f33]/40 backdrop-blur-sm p-4 hover:border-[#00c2ff]/40 hover:bg-[#171f33]/60 transition-all duration-300 hover:scale-[1.02]'
            >
              <div className='flex items-center gap-3'>
                <div
                  className='w-10 h-10 rounded-lg flex items-center justify-center'
                  style={{ backgroundColor: bg }}
                >
                  <img src={icon} alt={id} className='w-6 h-6' />
                </div>
                <p className='text-sm font-semibold text-[#dae2fd] group-hover:text-[#92d9ff] transition-colors'>
                  {text}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, 'contact');

export default ContactWindow;
