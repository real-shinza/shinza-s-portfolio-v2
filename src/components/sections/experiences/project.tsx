import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ProjectEntry } from '@/types';

export const Project = (args: {
  experienceId: string,
  projectId: string,
  project: ProjectEntry,
}) => {
  const tCommon = useTranslations('experiences.common');
  const t = useTranslations(`experiences.experiences.${args.experienceId}.projects.${args.projectId}`);

  return (
    <article className='group my-2'>
      <Link id={args.projectId} href={`/experiences/${args.experienceId}/${args.projectId}`}>
        {/* Project period */}
        <div className='text-[10px] md:text-[12px] text-muted'>
          {t('period')}
        </div>
        <div className='relative'>
          {/* Main dot */}
          <span className='absolute left-[-12px] top-2 h-2 w-2 rounded-full bg-muted' />
          <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
            {/* Project name */}
            <div className='text-sm md:text-base font-medium group-hover:underline'>
              {t('name')}
            </div>
            {/* Project detail */}
            <div className='flex justify-end gap-2 text-[10px] md:text-[12px] text-muted group-hover:text-text font-light'>
              <span>
                {tCommon('detail-label')}
              </span>
              <span className='origin-left scale-x-75 group-hover:scale-x-105'>
                →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
