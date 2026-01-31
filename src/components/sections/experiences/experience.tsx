import { useTranslations } from 'next-intl';
import { ExperienceEntry } from '@/types';
import { Project } from './project';

export const Experience = (args: {
  id: string,
  experience: ExperienceEntry,
}) => {
  const tCommon = useTranslations('experiences.common');
  const t = useTranslations(`experiences.experiences.${args.id}`);

  return (
    <div className='py-3'>
      {/* Experience type and period */}
      <div className='text-xs md:text-sm text-muted'>
        {tCommon(`type.${args.experience.type}`)} / {t('period')}
      </div>
      <div className='relative'>
        {/* Main dot */}
        <span className='absolute left-[-18px] md:left-[-19px] top-2 h-2.5 md:h-3 w-2.5 md:w-3 rounded-full bg-muted' />
        {/* Experience name */}
        <div className='text-base md:text-xl font-medium'>
          {t('name')}
        </div>
      </div>
      {/* Experience detail */}
      <div className='text-xs md:text-sm font-normal mt-1'>
        {t('detail')}
      </div>
      {/* Projects */}
      <div className='relative'>
        <div className='ml-4'>
          {/* Vertical line */}
          <span className='absolute left-[7px] top-0 h-full w-0.5 bg-border' />
          {Object.entries(args.experience.projects).map(([id, project]) => (
            <Project key={id} experienceId={args.id} projectId={id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
