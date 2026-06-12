'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import {
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
} from '@/components/ui';

export const Experience = (args: {
  id: string,
  section: 'educations' | 'works',
  step: number,
}) => {
  const tCommon = useTranslations('experiences.common');
  const t = useTranslations(`experiences.${args.section}.${args.id}`);
  const router = useRouter();

  return (
    <TimelineItem step={args.step}>
      <TimelineHeader>
        <TimelineDate className='text-xs md:text-sm'>
          {t('period')}
        </TimelineDate>
      </TimelineHeader>
      <TimelineIndicator />
      <TimelineSeparator />
      <TimelineContent>
        <button
          type='button'
          className='group w-full flex flex-col text-left md:flex-row md:items-end md:justify-between hover:underline cursor-pointer'
          onClick={() => router.push(`/experience/${args.id}`)}
        >
          <div className='text-foreground'>
            <div className='text-base md:text-xl font-medium'>
              {t('name')}
            </div>
            <div className='text-xs md:text-sm'>
              {t('detail')}
            </div>
          </div>
          <div className='flex justify-end gap-2 text-[10px] font-light text-muted-foreground group-hover:text-foreground md:text-xs'>
            <span>
              {tCommon('detail-label')}
            </span>
            <span className='transition-transform origin-left scale-x-75 group-hover:translate-x-0.2 group-hover:scale-x-105'>
              →
            </span>
          </div>
        </button>
      </TimelineContent>
    </TimelineItem>
  );
};
