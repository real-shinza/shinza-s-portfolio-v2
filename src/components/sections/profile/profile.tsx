import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui';
import { ProfileImage } from './profile-image';

export const Profile = () => {
  const t = useTranslations('profile');
  const nameVariants = t.raw('nameVariants') as string[];

  return (
    <Section id='profile'>
      <div className='flex items-center justify-start flex-wrap gap-0 lg:gap-20'>
        <ProfileImage />
        <div className='w-full max-w-3xl'>

          {/* Name */}
          <div className='font-semibold mb-3'>
            <h2 className='text-[var(--text)] text-4xl md:text-5xl mb-2'>
              {t('name')}
            </h2>
            <div className='flex items-center justify-start gap-4'>
              {nameVariants.map((name, index) => (
                <h3 key={index} className='text-[var(--muted)] text-xs md:text-sm'>
                  {name}
                </h3>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className='text-base md:text-lg whitespace-pre-line'>
            {t('description')}
          </div>

        </div>
      </div>
    </Section>
  );
};
