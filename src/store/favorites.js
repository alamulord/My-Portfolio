import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (item) => {
        const { favorites } = get();
        const isFavorite = favorites.some((fav) => fav.id === item.id);
        
        if (isFavorite) {
          set({ favorites: favorites.filter((fav) => fav.id !== item.id) });
        } else {
          set({ favorites: [...favorites, item] });
        }
      },
      isFavorite: (id) => {
        return get().favorites.some((fav) => fav.id === id);
      }
    }),
    {
      name: 'macos-gallery-favorites', // unique name for localStorage key
    }
  )
);

export default useFavoritesStore;
