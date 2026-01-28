'use client';

import { useState, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { Locale } from '@/i18n/routing';
import { LocaleOption } from './locale-option';
import { localeData } from '@/data';
import { localeFonts } from '@/lib/fonts';

export const LocaleSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const current = localeData[locale as Locale];
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // 言語選択処理
  const onSelect = (nextLocale: Locale) => {
    router.replace(pathname, { locale: nextLocale, scroll: false });
    setIsOpen(false);
  };

  // ドロップダウンの外側がクリックされたかを判定
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      // ドロップダウンが開いている間だけ全体にクリック監視を追加
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // 閉じたら監視を解除
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      // isOpen が変わるタイミングで監視を解除
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className='relative' ref={dropdownRef}>
      {/* Current locale */}
      <div className='rounded-full border border-border p-1'>
        <LocaleOption
          localeName={current.name}
          src={current.src}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {/* Dropdown */}
      {isOpen && (
        <div className='absolute top-full left-1/2 -translate-x-1/2 z-20 mt-1 p-2 border border-border bg-bg'>
          {Object.entries(localeData).map(([key, data]) => (
            <LocaleOption
              key={key}
              className={localeFonts[key as Locale].className}
              localeName={data.name}
              src={data.src}
              onClick={() => onSelect(key as Locale)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
