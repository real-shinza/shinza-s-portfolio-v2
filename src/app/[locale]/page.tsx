import { Container } from '@/components/ui';
import {
  Certifications,
  Profile,
  SkillLevels,
} from '@/components/sections';

export default () => {
  return (
    <Container>
      <Profile />
      <SkillLevels />
      <Certifications />
    </Container>
  );
};
