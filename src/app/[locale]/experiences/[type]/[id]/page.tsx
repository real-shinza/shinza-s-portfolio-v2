import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Locale } from '@/i18n/routing';
import { Overview, SkillStacks } from '@/components/sections';
import { experiences } from '@/data/experiences';

export default async ({
  params,
}: {
  params: Promise<{
    locale: Locale,
    type: 'educations' | 'works',
    id: string,
  }>,
}) => {
  const { locale, type, id } = await params;
  const t = await getTranslations({ locale, namespace: `experiences.${type}.${id}` });
  const project = experiences?.[type]?.[id];

  if (!project)
    notFound();

  return (
    <>
      <Overview title={t('name')} period={t('period')} description={t('detail')} />
      <SkillStacks skills={project.skills} />
    </>
  );
};
