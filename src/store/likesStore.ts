import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Like {
  likeIds: number[];
  setLike: (likeIds: number) => void;
  removeLike: (likeId: number) => void;
}

export const useLikesStorage = create<Like>()(
  persist(
    (set) => ({
      likeIds: [],
      setLike: (likeId: number) =>
        set((state) => ({
          likeIds: [...state.likeIds, likeId],
        })),
      removeLike: (likeId: number) =>
        set((state) => ({
          likeIds: state.likeIds.filter((id) => id !== likeId),
        })),
    }),
    {
      name: "like-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        likeIds: state.likeIds,
      }),
    }
  )
);
