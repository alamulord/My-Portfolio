import MobilePageHeader from '#components/MobilePageHeader';
import MobileBottomBar from '#components/MobileBottomBar';
import { blogPosts } from '#constants';
import {
  ChevronLeft,
  ChevronRight,
  Share2,
  BookOpen,
  Copy,
  Search,
  Mic,
} from 'lucide-react';
import { MoveRight } from 'lucide-react';

const bottomTabs = [
  { id: 'back', label: '', icon: <ChevronLeft size={22} /> },
  { id: 'forward', label: '', icon: <ChevronRight size={22} /> },
  { id: 'share', label: '', icon: <Share2 size={20} /> },
  { id: 'bookmark', label: '', icon: <BookOpen size={20} /> },
  { id: 'tabs', label: '', icon: <Copy size={20} /> },
];

const MobileSafari = () => {
  return (
    <div className="mobile-safari">
      <MobilePageHeader title="Safari" />

      <div className="mobile-safari-content">
        <h2 className="mobile-safari-blog-title">My Developer Blog</h2>

        <div className="mobile-safari-posts">
          {blogPosts.map(({ id, title, date, link, image }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-safari-post"
            >
              <img src={image} alt={title} className="mobile-safari-post-img" />
              <div className="mobile-safari-post-info">
                <span className="mobile-safari-post-date">{date}</span>
                <h3 className="mobile-safari-post-title">{title}</h3>
                <span className="mobile-safari-post-link">
                  Check out the full post{' '}
                  <MoveRight size={14} className="inline" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* URL bar */}
      <div className="mobile-safari-url-bar">
        <Search size={16} />
        <span>Search or enter website name</span>
        <Mic size={16} />
      </div>

      <MobileBottomBar items={bottomTabs} activeId={null} onSelect={() => {}} />
    </div>
  );
};

export default MobileSafari;
