import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMessages, getTranslations } from 'next-intl/server';
import { Locale } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    locale: Locale,
    type: 'educations' | 'works',
    id: string,
  }>,
}): Promise<Metadata> {
  const { locale, type, id } = await params;

  const messages = await getMessages({ locale });
  if (!messages?.experiences?.[type]?.[id])
    notFound();

  const tm = await getTranslations({ locale, namespace: 'metadata' });
  const tp = await getTranslations({ locale, namespace: `experiences.${type}.${id}` });

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
      url: `https://shinza-s-portfolio-v2.vercel.app/${locale}/experiences/${type}/${id}`,
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
