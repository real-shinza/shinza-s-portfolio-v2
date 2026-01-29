import { Container } from '@/components/ui';
import {
  Experiences,
  Certifications,
  Profile,
  SkillLevels,
  Works,
} from '@/components/sections';

export default () => {
  return (
    <Container>
      <Profile />
      <Works />
      <Experiences />
      <SkillLevels />
      <Certifications />
    </Container>
  );
};
