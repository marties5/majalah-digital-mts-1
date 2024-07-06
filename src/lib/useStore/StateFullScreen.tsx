import create from "zustand";

interface FullscreenState {
  isFullscreen: boolean;
  setIsFullScreen: () => void;
}

const useFullscreenStore = create<FullscreenState>((set) => ({
  isFullscreen: false,
  setIsFullScreen: () => set((state) => ({ isFullscreen: true })),
}));

export default useFullscreenStore;
