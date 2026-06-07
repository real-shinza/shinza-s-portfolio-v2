import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Locale } from '@/i18n/routing';
import { Overview, SkillStacks } from '@/components/sections';
import { experiences } from '@/data/experiences';

export default async ({
  params,
}: {
  params: Promise<{ locale: Locale, experienceId: string, projectId: string }>,
}) => {
  const { locale, experienceId, projectId } = await params;
  const t = await getTranslations({ locale, namespace: `experiences.experiences.${experienceId}.projects.${projectId}` });
  const project = experiences?.[experienceId]?.projects?.[projectId];

  if (!project)
    notFound();

  return (
    <>
      <Overview title={t('name')} period={t('period')} description={t('description')} />
      <SkillStacks skills={project.skills} />
    </>
  );
};
