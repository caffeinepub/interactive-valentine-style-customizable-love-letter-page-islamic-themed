import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface PhotoItem {
  id: string;
  url: string;
  filename: string;
  caption?: string;
}

interface PhotoGalleryState {
  photos: PhotoItem[];
  activePhotoIndex: number | null;
  addPhoto: (photo: PhotoItem) => void;
  removePhoto: (id: string) => void;
  updateCaption: (id: string, caption: string) => void;
  setActivePhotoIndex: (index: number | null) => void;
  clearPhotos: () => void;
}

export const usePhotoGallery = create<PhotoGalleryState>()(
  persist(
    (set) => ({
      photos: [],
      activePhotoIndex: null,
      addPhoto: (photo) => set((state) => ({ photos: [...state.photos, photo] })),
      removePhoto: (id) => set((state) => ({ photos: state.photos.filter((p) => p.id !== id) })),
      updateCaption: (id, caption) =>
        set((state) => ({
          photos: state.photos.map((p) => (p.id === id ? { ...p, caption } : p)),
        })),
      setActivePhotoIndex: (index) => set({ activePhotoIndex: index }),
      clearPhotos: () => set({ photos: [], activePhotoIndex: null }),
    }),
    {
      name: 'photo-gallery-storage',
      partialize: (state) => ({ photos: state.photos }),
    }
  )
);
