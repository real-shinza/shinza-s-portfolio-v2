'use client';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { Locale } from '@/i18n/routing';
import { languageData } from '@/data';

export const LocaleSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value as Locale;
    router.replace(pathname, { locale: nextLocale, scroll: false });
  };

  return (
    <div className='rounded-full border-2 border-[var(--border)]'>
      <select value={locale} onChange={onChange} className='p-2'>
        {Object.entries(languageData).map((data, index) => (
          <option key={index} value={data[0]}>
            {data[1].name}
          </option>
        ))}
      </select>
    </div>
  );
};
