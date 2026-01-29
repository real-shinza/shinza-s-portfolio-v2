import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui';
import { experiences } from '@/data';
import { Experience } from './experience';

export const Experiences = () => {
  const t = useTranslations('experiences');

  return (
    <Section id='experiences' title={t('title')}>
      <div className='relative py-3'>
        <div className='ml-6'>
          {/* Vertical line */}
          <span className='absolute left-[10px] top-0 h-full w-0.5 bg-border' />
          {/* Experiences */}
          {Object.entries(experiences).map(([id, experience]) => (
            <Experience key={id} id={id} experience={experience} />
          ))}
        </div>
      </div>
    </Section>
  );
};
