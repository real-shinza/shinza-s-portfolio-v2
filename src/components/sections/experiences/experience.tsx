import { useTranslations } from 'next-intl';
import { ExperienceEntry } from '@/types';

export const Experience = (args: {
  id: string,
  experience: ExperienceEntry,
}) => {
  const t = useTranslations(`experiences.experiences.${args.id}`);

  return (
    <div className='py-2'>
      {/* Experience period */}
      <div className='text-xs md:text-sm text-muted'>
        {t('period')}
      </div>
      <div className='relative'>
        {/* Main dot */}
        <span className='absolute left-[-18px] md:left-[-19px] top-2 h-2.5 md:h-3 w-2.5 md:w-3 rounded-full bg-muted' />
        {/* Experience name */}
        <div className='text-text text-base md:text-lg font-medium'>
          {t('name')}
        </div>
      </div>
    </div>
  );
};
