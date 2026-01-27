import {
  Noto_Sans,
  Noto_Sans_JP,
  Noto_Sans_SC,
  Noto_Sans_TC,
  Noto_Sans_KR,
} from 'next/font/google';
import { Locale } from '@/i18n/routing';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto',
});
const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-jp',
});
const notoSansSc = Noto_Sans_SC({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sc',
});
const notoSansTc = Noto_Sans_TC({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-tc',
});
const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-ko',
});

export const localeFonts = {
  en: notoSans,
  ja: notoSansJp,
  'zh-CN': notoSansSc,
  'zh-TW': notoSansTc,
  ko: notoSansKr,
} satisfies Record<Locale, { variable: string }>;
