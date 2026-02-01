import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui';
import { SkillGroup } from './skill-group';
import { SkillLevelRow } from './skill-level-row';
import { skillAll } from '@/data';

export const SkillLevels = () => {
  const t = useTranslations('skills');

  return (
    <Section id='skills' title={t('title')}>
      {skillAll.map(skillGroup => (
        <SkillGroup key={skillGroup.id} categoryName={t(`categories.${skillGroup.id}`)}>
          <div className='divide-y divide-dashed divide-border'>
            {skillGroup.skills.map(skill => (
              <SkillLevelRow key={skill.name} skill={skill} />
            ))}
          </div>
        </SkillGroup>
      ))}
    </Section>
  );
};
