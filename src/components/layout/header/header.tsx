import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Nav } from './navigation';

export const Header = () => {
  const t = useTranslations('header');

  return (
    <header
      className='
        sticky top-0 z-10
        border-b border-[var(--border)]
        bg-white/80 backdrop-blur-md backdrop-saturate-150
      '
    >
      <nav className='flex items-center justify-between px-8 py-4'>
        <div>
          <Link className='' href='/'>
            <div className='text-[var(--text)] text-xl font-bold'>
              {t('site.title')}
            </div>
          </Link>
        </div>
        <div>
          <div className='flex items-center justify-center gap-5'>
            <Nav sectionName={t('navigations.works')} hash='works' />
            <Nav sectionName={t('navigations.career')} hash='career' />
            <Nav sectionName={t('navigations.skills')} hash='skills' />
            <Nav sectionName={t('navigations.certs')} hash='certs' />
          </div>
        </div>
        <div>
          <div>
            言語設定（ダミー）
          </div>
        </div>
      </nav>
    </header>
  );
};
