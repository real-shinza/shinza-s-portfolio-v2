import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMessages, getTranslations } from 'next-intl/server';
import { Locale } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale, experienceId: string, projectId: string }>,
}): Promise<Metadata> {
  const { locale, experienceId, projectId } = await params;

  const messages = await getMessages({ locale });
  if (!messages?.experiences?.experiences?.[experienceId]?.projects?.[projectId])
    notFound();

  const tm = await getTranslations({ locale, namespace: 'metadata' });
  const tp = await getTranslations({ locale, namespace: `experiences.experiences.${experienceId}.projects.${projectId}` });

  return {
    title: `${tp('name')} | ${tm('title')}`,
    description: tm('description'),
    icons: [{ rel: 'icon', url: '/icons/favicon.ico' }],
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      type: 'article',
      title: `${tp('name')} | ${tm('title')}`,
      description: tm('description'),
      url: `https://shinza-s-portfolio-v2.vercel.app/${locale}/experiences/${experienceId}/${projectId}`,
      locale: tm('locale'),
    },
  };
}

export default ({
  children,
}: {
  children: React.ReactNode,
}) => {
  return (
    <>
      {children}
    </>
  );
};
