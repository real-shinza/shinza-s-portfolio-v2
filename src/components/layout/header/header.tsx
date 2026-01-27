import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Nav } from './navigation';
import { LocaleSelector } from './locale-selector';

export const Header = () => {
  const t = useTranslations('header');

  return (
    <header
      className='
        sticky top-0 z-10
        border-b-2 border-[var(--border)]
        bg-[var(--bg)]/75 backdrop-blur-md backdrop-saturate-150
      '
    >
      <nav className='flex items-center justify-between px-5 md:px-8 py-2 md:py-3'>

        {/* Site title */}
        <div>
          <Link className='' href='/'>
            <h1 className='text-sm md:text-xl text-[var(--text)] font-bold'>
              {t('site.title')}
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <div className='hidden md:block'>
          <div className='flex items-center justify-center gap-5'>
            <Nav sectionName={t('navigations.works')} hash='works' />
            <Nav sectionName={t('navigations.career')} hash='career' />
            <Nav sectionName={t('navigations.skills')} hash='skills' />
            <Nav sectionName={t('navigations.certs')} hash='certs' />
          </div>
        </div>

        {/* Options */}
        <div>
          <LocaleSelector />
        </div>

      </nav>
    </header>
  );
};
