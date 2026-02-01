import { getTranslations } from 'next-intl/server';
import { Locale } from '@/i18n/routing';
import { Container } from '@/components/ui';
import { Overview, SkillStacks } from '@/components/sections';
import { works } from '@/data';

export default async ({
  params,
}: {
  params: Promise<{ locale: Locale, id: string }>,
}) => {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: `works.works.${id}` });
  const work = works[id];

  return (
    <Container>
      <Overview image={work.image} title={t('title')} tags={work.tags} description={t('description')} />
      <SkillStacks skills={work.skills}/>
    </Container>
  );
};
