import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui';
import { SkillGroup } from './skill-group';
import { SkillLevelRow } from './skill-level-row';
import { skillAll } from '@/data';

export const SkillLevels = () => {
  const t = useTranslations('skills');

  return (
    <Section id='skills' title={t('title')}>
      {skillAll.map((skillGroup, index) => (
        <SkillGroup key={index} categoryName={t(`categories.${skillGroup.id}`)}>
          {skillGroup.skills.map((skill, index) => (
            <SkillLevelRow key={index} skill={skill} />
          ))}
        </SkillGroup>
      ))}
    </Section>
  );
};
