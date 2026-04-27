import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';

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
        <h2 className='text-[#dae2fd]'>{name}</h2>
      </div>

      <div className='p-6 bg-[#0b1326]/40 window-content backdrop-blur-xl'>
        {image && (
          <img
            src={image}
            alt={name || 'Text icon'}
            className='w-full max-h-64 object-contain mb-4 rounded-xl border border-white/10 shadow-lg'
          />
        )}

        {subtitle && (
          <h3 className='text-lg font-bold text-[#dae2fd] mb-4'>{subtitle}</h3>
        )}

        {description && Array.isArray(description) ? (
          <div className='space-y-3 text-sm text-[#bcc8d1] leading-relaxed'>
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <p className='text-sm text-[#bcc8d1] leading-relaxed'>
            {description}
          </p>
        )}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, 'txtfile');
export default TextWindow;
