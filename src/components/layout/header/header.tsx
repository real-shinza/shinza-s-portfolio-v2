import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Nav } from './nav';
import { LocaleSelector } from './locale-selector';
import { AnimatedThemeToggler } from '@/components/ui';

export const Header = () => {
  const t = useTranslations('header');

  return (
    <header className='sticky top-0 z-10 border-b-2 border-border bg-background/75 backdrop-blur-md backdrop-saturate-150'>
      <nav className='flex items-center justify-between px-5 md:px-8 py-2 md:py-3'>
        {/* Site title */}
        <Link href='/'>
          <h1 className='text-sm md:text-xl font-bold'>
            {t('site.title')}
          </h1>
        </Link>
        {/* Navigation */}
        <div className='hidden md:block'>
          <div className='flex items-center justify-center gap-5'>
            <Nav sectionName={t('navigations.works')} hash='works' />
            <Nav sectionName={t('navigations.experiences')} hash='experiences' />
            <Nav sectionName={t('navigations.skills')} hash='skills' />
            <Nav sectionName={t('navigations.certs')} hash='certs' />
          </div>
        </div>
        {/* Options */}
        <div className='flex items-center justify-between gap-2'>
          <LocaleSelector />
          <AnimatedThemeToggler className='cursor-pointer' />
        </div>
      </nav>
    </header>
  );
};
