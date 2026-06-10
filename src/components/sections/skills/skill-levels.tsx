import { useTranslations } from 'next-intl';
import { Section, SubSection } from '@/components/ui';
import { SkillLevelRow } from './skill-level-row';
import { skillAll } from '@/data';

export const SkillLevels = () => {
  const t = useTranslations('skills');

  return (
    <Section id='skills' title={t('title')}>
      {skillAll.map(skillGroup => (
        <SubSection key={skillGroup.id} id={skillGroup.id} subTitle={t(`categories.${skillGroup.id}`)}>
          <div className='divide-y divide-dashed divide-border'>
            {skillGroup.skills.map(skill => (
              <SkillLevelRow key={skill.name} skill={skill} />
            ))}
          </div>
        </SubSection>
      ))}
    </Section>
  );
};
