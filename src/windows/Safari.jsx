import { WindowControls } from '#components';
import { blogPosts } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plus,
  Share,
  ShieldHalf,
} from 'lucide-react';

const Safari = () => {
  return (
    <>
      <div id='window-header'>
        <WindowControls target='safari' />

        <PanelLeft className='ml-10 icon' />
        <div className='item-center flex ml-5 gap-1'>
          <ChevronLeft className='icon' />
          <ChevronRight className='icon' />
        </div>

        <div className='flex-1 flex-center gap-3'>
          <div className='search'>
            <ShieldHalf className='icon' />

            <input
              type='text'
              placeholder='Search for project...'
              className='flex-1'
            />
          </div>
        </div>
        <div className='flex item-center gap-5'>
          <Share className='icon' />
          <Plus className='icon' />
          <Copy className='icon' />
        </div>
      </div>

      <div className='blog window-content'>
        <h2>My Blog</h2>
        {blogPosts.map(({ id, title, date, link, image }) => (
          <div key={id} className='blog-post'>
            <div className='col-span-2'>
              <img src={image} alt={title} />
            </div>

            <div className="content">
                <p>{date}</p>
                <h3>{title}</h3>
                <a href={link} target='_blank' rel='noopener noreferrer'>Check out our full post <MoveRight className='icon-hover'/></a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, 'safari');
export default SafariWindow;
