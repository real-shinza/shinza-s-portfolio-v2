import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ja', 'en', 'zh-CN', 'zh-TW', 'ko'],
  defaultLocale: 'ja',
});

export type Locale = typeof routing.locales[number];
