import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useMobileStore = create(
  immer((set) => ({
    // Which page/app is currently open. null = home screen
    activePage: null,

    // Optional data payload for the active page (e.g., which txt file to show)
    pageData: null,

    // Navigation history stack for nested navigation (e.g., Finder → subfolder)
    history: [],

    openPage: (pageId, data = null) =>
      set((state) => {
        // Push current state to history before navigating
        if (state.activePage) {
          state.history.push({
            page: state.activePage,
            data: state.pageData,
          });
        }
        state.activePage = pageId;
        state.pageData = data;
      }),

    closePage: () =>
      set((state) => {
        // Pop from history if there is nested navigation
        if (state.history.length > 0) {
          const prev = state.history.pop();
          state.activePage = prev.page;
          state.pageData = prev.data;
        } else {
          state.activePage = null;
          state.pageData = null;
        }
      }),

    goHome: () =>
      set((state) => {
        state.activePage = null;
        state.pageData = null;
        state.history = [];
      }),
  })),
);

export default useMobileStore;
