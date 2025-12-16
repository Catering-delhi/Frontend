// src/hooks/useLocale.ts
"use client";

import { useEffect, useMemo, useState } from "react";
import type { i18n as I18nType } from "i18next";
import { safeGet, safeSet } from "@/lib/storage";

export type Locale = "en" | "hi";

const LOCALE_KEY = "restaurant_locale";

export function initLocale(i18n: I18nType) {
  const saved = safeGet(LOCALE_KEY) as Locale | null;
  const locale: Locale = saved ?? "en";
  if (i18n.language !== locale) i18n.changeLanguage(locale);
}

export function useLocale(i18n: I18nType) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = safeGet(LOCALE_KEY) as Locale | null;
    const initial: Locale = saved ?? "en";
    setLocaleState(initial);
    if (i18n.language !== initial) i18n.changeLanguage(initial);
  }, [i18n]);

  const setLocale = useMemo(
    () => (next: Locale) => {
      safeSet(LOCALE_KEY, next);
      setLocaleState(next);
      i18n.changeLanguage(next);
    },
    [i18n]
  );

  return { locale, setLocale };
}
