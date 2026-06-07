import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui';
import { ProfileSlider } from './profile-slider';
import { SocialMedia } from './social-media';
import { socialMedias } from '@/data';

export const Profile = () => {
  const t = useTranslations('profile');
  const nameVariants = t.raw('nameVariants') as string[];

  return (
    <Section id='profile'>
      <div className='flex lg:items-center justify-start flex-col lg:flex-row gap-0 lg:gap-20'>
        {/* Profile images */}
        <ProfileSlider />
        <div>
          {/* Name */}
          <div className='mb-3'>
            <h2 className='text-4xl md:text-5xl font-semibold mb-1 md:mb-2'>
              {t('name')}
            </h2>
            <div className='flex items-center justify-start gap-4'>
              {nameVariants.map((name, index) => (
                <h3 key={index} className='text-muted-foreground text-xs md:text-sm font-medium'>
                  {name}
                </h3>
              ))}
            </div>
          </div>
          {/* Description */}
          <p className='text-sm md:text-base whitespace-pre-line'>
            {t('description')}
          </p>
          {/* Social media */}
          <div className='flex flex-wrap items-center justify-start gap-2 md:gap-3 pt-3'>
            {socialMedias.map(entry => (
              <SocialMedia key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
