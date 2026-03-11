import { useState } from 'react';
import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import { photosLinks, gallery } from '#constants';
import useWindowStore from '#store/window';
import useFavoritesStore from '#store/favorites';
import { Mail, Search, Heart, ImageOff } from 'lucide-react';
import clsx from 'clsx';

const Gallery = () => {
  const { openWindow } = useWindowStore();
  const [activeTab, setActiveTab] = useState('Library');
  
  // Persisted state using the new store
  const { favorites, toggleFavorite, isFavorite } = useFavoritesStore();

  const openImage = (item) => {
    openWindow('imgfile', {
      name: `Photo ${item.id}.png`,
      imageUrl: item.img,
      fileType: 'img',
    });
  };

  const handleToggleFav = (e, item) => {
    e.stopPropagation();
    toggleFavorite(item);
  };

  // Logic to simulate different image layouts based on the active tab, or favorites array
  let displayedGallery = gallery;
  if (activeTab === 'Favorites') {
    displayedGallery = favorites;
  } else if (activeTab === 'Memories') {
    displayedGallery = gallery.slice(0, 2);
  } else if (activeTab === 'Places') {
    displayedGallery = gallery.slice(1, 3);
  } else if (activeTab === 'People') {
    displayedGallery = gallery.slice(2, 4);
  }

  return (
    <>
      <div id='window-header'>
        <WindowControls target='photos' />
        <div className="flex items-center gap-4">
          <Mail className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-800" />
          <Search className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-800" />
        </div>
      </div>
      
      <div className='flex bg-white w-full' style={{ height: 'calc(100% - 46px)' }}>
        <div className='sidebar'>
          <h2>Photos</h2>
          <ul>
            {photosLinks.map((link) => (
              <li 
                key={link.id}
                onClick={() => setActiveTab(link.title)}
                className={clsx(activeTab === link.title ? 'active' : 'not-active')}
              >
                <img src={link.icon} alt={link.title} />
                <p>{link.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='gallery flex-1 overflow-y-auto'>
          {displayedGallery.length === 0 ? (
            <div className="flex flex-col w-full h-full items-center justify-center text-gray-400 gap-3">
              <ImageOff className="w-12 h-12 text-gray-300" />
              <p className="font-medium">No photos here yet.</p>
              <p className="text-sm">Hover over an image and click the heart to add it.</p>
            </div>
          ) : (
            <ul className="h-fit w-full">
              {displayedGallery.map((item) => {
                const isFav = isFavorite(item.id);
                return (
                  <li 
                    key={item.id} 
                    onClick={() => openImage(item)} 
                    className="relative cursor-pointer group"
                  >
                    <img src={item.img} alt={`Gallery ${item.id}`} />
                    <button 
                      className={clsx(
                        "absolute bottom-2 right-2 p-1.5 rounded-full transition-all duration-200 z-10",
                        isFav ? "opacity-100 bg-black/60" : "opacity-0 group-hover:opacity-100 bg-black/40 hover:bg-black/60"
                      )}
                      onClick={(e) => handleToggleFav(e, item)}
                    >
                      <Heart className={clsx("w-4 h-4", isFav ? "fill-red-500 text-red-500" : "text-white")} />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

const GalleryWindow = WindowWrapper(Gallery, 'photos');
export default GalleryWindow;