import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui';
import { SkillGroup } from './skill-group';
import { SkillStack } from './skill-stack';

export const SkillStacks = (args: { skills: Record<string, string[]> }) => {
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
