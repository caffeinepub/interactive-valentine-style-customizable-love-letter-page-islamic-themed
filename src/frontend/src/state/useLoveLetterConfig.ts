import { create } from 'zustand';

export type Section = 'intro' | 'reveal' | 'letter' | 'gallery' | 'details' | 'customize';

interface LoveLetterConfig {
  fromName: string;
  toName: string;
  headline: string;
  date: string;
  place: string;
  note: string;
  letterText: string;
  selectedTemplate: number;
  currentSection: Section;
  setFromName: (name: string) => void;
  setToName: (name: string) => void;
  setHeadline: (headline: string) => void;
  setDate: (date: string) => void;
  setPlace: (place: string) => void;
  setNote: (note: string) => void;
  setLetterText: (text: string) => void;
  setSelectedTemplate: (index: number) => void;
  loadTemplate: (templateText: string) => void;
  setCurrentSection: (section: Section) => void;
  reset: () => void;
}

const defaultState = {
  fromName: '',
  toName: '',
  headline: 'A Message of Love',
  date: '',
  place: '',
  note: '',
  letterText: '',
  selectedTemplate: -1,
  currentSection: 'intro' as Section,
};

export const useLoveLetterConfig = create<LoveLetterConfig>((set) => ({
  ...defaultState,
  setFromName: (name) => set({ fromName: name }),
  setToName: (name) => set({ toName: name }),
  setHeadline: (headline) => set({ headline }),
  setDate: (date) => set({ date }),
  setPlace: (place) => set({ place }),
  setNote: (note) => set({ note }),
  setLetterText: (text) => set({ letterText: text }),
  setSelectedTemplate: (index) => set({ selectedTemplate: index }),
  loadTemplate: (templateText) => set({ letterText: templateText }),
  setCurrentSection: (section) => set({ currentSection: section }),
  reset: () => set(defaultState),
}));
