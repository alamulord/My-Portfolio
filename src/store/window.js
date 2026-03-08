import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '#constants';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const window = state.windows[windowKey];
        if (!window) return;
        window.isOpen = true;
        window.zIndex = state.nextIndex;
        window.data = data ?? window.data;
        state.nextIndex++;
      }),
    closeWindow: (windowKey) =>
      set((state) => {
        const window = state.windows[windowKey];
        if (!window) return;
        window.isOpen = false;
        window.data = null;
        window.zIndex = INITIAL_Z_INDEX;
        window.isMaximized = false; // Reset max state on close
      }),
    toggleMaximize: (windowKey) =>
      set((state) => {
        const window = state.windows[windowKey];
        if (!window) return;
        window.isMaximized = !window.isMaximized;
        if (window.isMaximized) {
          window.zIndex = state.nextIndex;
          state.nextIndex++;
        }
      }),
    focusWindow: (windowKey) =>
      set((state) => {
        const window = state.windows[windowKey];
        if (!window) return;
        window.zIndex = state.nextIndex;
        state.nextIndex++;
      }),
  })),
);

export default useWindowStore;
