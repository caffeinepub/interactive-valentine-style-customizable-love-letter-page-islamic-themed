import { create } from 'zustand';
import { useEffect } from 'react';

interface ReducedMotionState {
  isReducedMotion: boolean;
  setReducedMotion: (value: boolean) => void;
}

export const useReducedMotionStore = create<ReducedMotionState>((set) => ({
  isReducedMotion: false,
  setReducedMotion: (value) => set({ isReducedMotion: value }),
}));

export function useReducedMotion() {
  const { isReducedMotion, setReducedMotion } = useReducedMotionStore();

  useEffect(() => {
    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [setReducedMotion]);

  return { isReducedMotion, setReducedMotion };
}
