// src/hooks/useTranslation.ts

import { translations} from "../dictionaries";
import { Language, useLanguageStore } from "../store/useLanguageStore";

export const useTranslation = () => {
  const { lang } = useLanguageStore(); // Վերցնում ենք ընթացիկ լեզուն (en, am, ru)

  const t = (path: string): string => {
    const keys = path.split('.');
    let result: any = translations[lang as Language] || translations.en;

    for (const key of keys) {
      if (result[key]) {
        result = result[key];
      } else {
        return path;
      }
    }

    return result;
  };

  return { t, lang };
};