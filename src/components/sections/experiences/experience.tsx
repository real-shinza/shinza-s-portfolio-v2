import { useTranslations } from 'next-intl';
import {
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from '@/components/ui';

export const Experience = (args: {
  id: string,
  section: 'educations' | 'works',
  step: number,
}) => {
  const t = useTranslations(`experiences.${args.section}.${args.id}`);

  return (
    <TimelineItem step={args.step}>
      <TimelineHeader>
        <TimelineDate className='text-xs md:text-sm'>
          {t('period')}
        </TimelineDate>
      </TimelineHeader>
      <TimelineIndicator />
      <TimelineSeparator />
      <TimelineTitle className='text-base md:text-xl'>
        {t('name')}
      </TimelineTitle>
      <TimelineContent className='text-xs font-normal text-foreground md:text-sm'>
        {t('detail')}
      </TimelineContent>
    </TimelineItem>
  );
};
