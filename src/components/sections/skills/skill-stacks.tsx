import { useTranslations } from 'next-intl';
import { Section, SubSection } from '@/components/layout';
import { SkillsByCategory } from '@/types';
import { SkillStack } from './skill-stack';

export const SkillStacks = (args: { skills: SkillsByCategory }) => {
  const t = useTranslations('skills');

  return (
    <Section id='skills' title={t('title')}>
      {Object.entries(args.skills).map(([id, skills]) => (
        <SubSection key={id} id={id} subTitle={t(`categories.${id}`)}>
          <div className='flex flex-wrap gap-2'>
            {skills.map(skill => (
              <SkillStack key={skill} name={skill} />
            ))}
          </div>
        </SubSection>
      ))}
    </Section>
  );
};
