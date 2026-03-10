import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';
import { locations } from '#constants';

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(
  persist(
    immer((set) => ({
      activeLocation: DEFAULT_LOCATION,
      setActiveLocation: (location) =>
        set((state) => {
          if(location === undefined) return;
          state.activeLocation = location;
        }),

      resetActiveLocation: () =>
        set((state) => {
          state.activeLocation = DEFAULT_LOCATION;
        }),
    })),
    {
      name: 'finder-location-state',
    },
  ),
);

export default useLocationStore;
