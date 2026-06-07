'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { Locale } from '@/i18n/routing';
import { localeData } from '@/data';
import { localeFonts } from '@/lib/fonts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { LocaleOption } from './locale-option';

export const LocaleSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as Locale;

  // 言語選択処理
  const onSelect = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale, scroll: false });
  };

  return (
    <Select
      value={locale}
      onValueChange={value => onSelect(value as Locale)}
    >
      <SelectTrigger
        size='sm'
        aria-label='Select locale'
        className='cursor-pointer gap-2 pl-2 pr-2.5'
      >
        <SelectValue>
          {value => {
            const currentLocale = (value as Locale | null) ?? locale;
            const current = localeData[currentLocale];

            return (
              <LocaleOption
                className={localeFonts[currentLocale].className}
                localeName={current.name}
                src={current.src}
              />
            );
          }}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {Object.entries(localeData).map(([key, data]) => (
          <SelectItem key={key} value={key}>
            <LocaleOption
              className={localeFonts[key as Locale].className}
              localeName={data.name}
              src={data.src}
            />
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
