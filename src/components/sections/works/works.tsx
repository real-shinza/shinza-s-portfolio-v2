import { useTranslations } from 'next-intl';
import { Section } from '@/components/layout';
import { Work } from './work';
import { works } from '@/data';

export const Works = () => {
  const t = useTranslations('works');

  return (
    <Section id='works' title={t('title')}>
      <div className='grid gap-2 md:gap-5 grid-cols-2 md:grid-cols-3 py-3'>
        {Object.entries(works).map(([id, work]) => (
          <Work key={id} id={id} work={work} />
        ))}
      </div>
    </Section>
  );
};
