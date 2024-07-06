import create from "zustand";

interface NewsStore {
  newsState: any;
  setNewsState: () => void;
}

const useNewsStore = create<NewsStore>((set) => ({
  newsState: {},
  setNewsState: () => set((value) => ({ newsState: value })),
}));

export default useNewsStore;
