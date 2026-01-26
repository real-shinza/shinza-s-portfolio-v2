import {
  Noto_Sans,
  Noto_Sans_JP,
  Noto_Sans_SC,
  Noto_Sans_TC,
  Noto_Sans_KR,
} from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font/dist/types';
import { Locale } from '../i18n/routing';

const noteSans = Noto_Sans({ subsets: ['latin'], display: 'swap' });
const noteSansJp = Noto_Sans_JP({ subsets: ['latin'], display: 'swap' });
const noteSansSc = Noto_Sans_SC({ subsets: ['latin'], display: 'swap' });
const noteSansTc = Noto_Sans_TC({ subsets: ['latin'], display: 'swap' });
const noteSansKr = Noto_Sans_KR({ subsets: ['latin'], display: 'swap' });

export const notoSans: Record<Locale, NextFont> = {
  'en': noteSans,
  'ja': noteSansJp,
  'zh-CN': noteSansSc,
  'zh-TW': noteSansTc,
  'ko': noteSansKr,
};
