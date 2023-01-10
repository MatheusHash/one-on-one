import create from "zustand";
import { persist } from "zustand/middleware";
type Store = {
  user: unknown;
};
type Actions = { 
    setUserGlobal: (user: any) => void;
    removeUserGlobal: () => void;
};

export const useStore = create<Store & Actions>()(
  persist(
    (set) => ({
    user: '',
    setUserGlobal: (user) => set((state) => ({ user: user })),
    removeUserGlobal: () => set({ user: {} }),
  }), 
  {name: "global", getStorage: ()=> localStorage}
  )
);
