import { useState } from 'react';
import MobilePageHeader from '#components/MobilePageHeader';
import MobileBottomBar from '#components/MobileBottomBar';
import useMobileStore from '#store/mobile';
import useFavoritesStore from '#store/favorites';
import { gallery } from '#constants';
import { Image as ImageIcon, FolderOpen, Search, Heart } from 'lucide-react';
import clsx from 'clsx';

const bottomTabs = [
  { id: 'all', label: 'All Photos', icon: <ImageIcon size={20} /> },
  { id: 'albums', label: 'Albums', icon: <FolderOpen size={20} /> },
  { id: 'search', label: 'Search', icon: <Search size={20} /> },
];

const MobileGallery = () => {
  const { openPage } = useMobileStore();
  const [activeTab, setActiveTab] = useState('all');
  const { favorites, toggleFavorite, isFavorite } = useFavoritesStore();

  let displayedGallery = gallery;
  if (activeTab === 'albums') {
    displayedGallery = favorites;
  }

  const openImage = (item) => {
    openPage('imgfile', {
      name: `Photo ${item.id}.png`,
      imageUrl: item.img,
      fileType: 'img',
    });
  };

  const handleToggleFav = (e, item) => {
    e.stopPropagation();
    toggleFavorite(item);
  };

  return (
    <div className="mobile-gallery">
      <MobilePageHeader title="All Photos" />

      <div className="mobile-gallery-grid">
        {displayedGallery.length === 0 ? (
          <div className="mobile-gallery-empty">
            <ImageIcon size={48} className="text-gray-300" />
            <p>No photos here yet.</p>
            <p className="text-sm text-gray-400">
              Tap the heart on a photo to add it.
            </p>
          </div>
        ) : (
          displayedGallery.map((item) => {
            const isFav = isFavorite(item.id);
            return (
              <div
                key={item.id}
                className="mobile-gallery-item"
                onClick={() => openImage(item)}
              >
                <img src={item.img} alt={`Gallery ${item.id}`} loading="lazy" />
                <button
                  className={clsx(
                    'mobile-gallery-fav',
                    isFav && 'active',
                  )}
                  onClick={(e) => handleToggleFav(e, item)}
                >
                  <Heart
                    size={16}
                    className={clsx(isFav ? 'fill-red-500 text-red-500' : 'text-white')}
                  />
                </button>
              </div>
            );
          })
        )}
      </div>

      <MobileBottomBar
        items={bottomTabs}
        activeId={activeTab}
        onSelect={setActiveTab}
      />
    </div>
  );
};

export default MobileGallery;
