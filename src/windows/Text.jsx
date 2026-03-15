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
        <h2>{name}</h2>
      </div>

      <div className='p-6 bg-white window-content'>
        {image && (
          <img
            src={image}
            alt={name || 'Text icon'}
            className='w-full max-h-64 object-contain mb-4 rounded-md'
          />
        )}

        {subtitle && (
          <h3 className='text-lg font-bold text-gray-800 mb-4'>{subtitle}</h3>
        )}

        {description && Array.isArray(description) ? (
          <div className='space-y-3 text-sm text-gray-700 leading-relaxed font-roboto'>
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <p className='text-sm text-gray-700 leading-relaxed font-roboto'>
            {description}
          </p>
        )}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, 'txtfile');
export default TextWindow;
