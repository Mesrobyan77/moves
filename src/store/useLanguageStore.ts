import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Language = "en" | "am" | "ru";

interface LanguageState {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      lang: "en",
      setLang: (newLang: Language) => set({ lang: newLang }),
    }),
    {
      name: "hotflix-language",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
