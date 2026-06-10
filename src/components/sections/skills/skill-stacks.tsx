import { useTranslations } from 'next-intl';
import { Section } from '@/components/layout';
import { SkillsByCategory } from '@/types';
import { SkillGroup } from './skill-group';
import { SkillStack } from './skill-stack';

export const SkillStacks = (args: { skills: SkillsByCategory }) => {
  const t = useTranslations('skills');

  return (
    <Section id='skills' title={t('title')}>
      {Object.entries(args.skills).map(([id, skills]) => (
        <SkillGroup key={id} categoryName={t(`categories.${id}`)}>
          <div className='flex flex-wrap gap-2'>
            {skills.map(skill => (
              <SkillStack key={skill} name={skill} />
            ))}
          </div>
        </SkillGroup>
      ))}
    </Section >
  );
};
