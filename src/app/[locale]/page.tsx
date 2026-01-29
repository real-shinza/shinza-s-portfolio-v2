import { Container } from '@/components/ui';
import {
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
      <SkillLevels />
      <Certifications />
    </Container>
  );
};
