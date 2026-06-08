import { useTranslations } from 'next-intl';
import { Section, SubSection, Timeline } from '@/components/ui';
import { experiences } from '@/data';
import { Experience } from './experience';

export const Experiences = () => {
  const t = useTranslations('experiences');
  const educationEntries = Object.entries(experiences.educations);
  const workEntries = Object.entries(experiences.works);

  return (
    <Section id='experiences' title={t('title')}>
      <SubSection id='educations' subTitle={t('subtitle.educations')}>
        <Timeline defaultValue={educationEntries.length}>
          {educationEntries.map(([id], index) => (
            <Experience
              key={id}
              id={id}
              section='educations'
              step={index + 1}
            />
          ))}
        </Timeline>
      </SubSection>
      <SubSection id='works' subTitle={t('subtitle.work')}>
        <Timeline defaultValue={workEntries.length}>
          {workEntries.map(([id], index) => (
            <Experience
              key={id}
              id={id}
              section='works'
              step={index + 1}
            />
          ))}
        </Timeline>
      </SubSection>
    </Section>
  );
};
