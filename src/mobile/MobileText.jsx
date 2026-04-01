import MobilePageHeader from '#components/MobilePageHeader';
import MobileBottomBar from '#components/MobileBottomBar';
import { BookOpen, Library, Headphones } from 'lucide-react';

const bottomTabs = [
  { id: 'reading', label: 'Reading Now', icon: <BookOpen size={20} /> },
  { id: 'library', label: 'Library', icon: <Library size={20} /> },
  { id: 'audio', label: 'Audiobooks', icon: <Headphones size={20} /> },
];

const MobileText = ({ data }) => {
  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <div className="mobile-text">
      <MobilePageHeader title={name || 'About Me'} />

      <div className="mobile-text-content">
        {image && (
          <img
            src={image}
            alt={name || 'Avatar'}
            className="mobile-text-avatar"
          />
        )}

        {subtitle && <h2 className="mobile-text-subtitle">{subtitle}</h2>}

        {description && Array.isArray(description) ? (
          <div className="mobile-text-body">
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <p className="mobile-text-body">{description}</p>
        )}
      </div>

      <MobileBottomBar
        items={bottomTabs}
        activeId="reading"
        onSelect={() => {}}
      />
    </div>
  );
};

export default MobileText;
