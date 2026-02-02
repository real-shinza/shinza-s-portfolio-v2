import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMessages, getTranslations } from 'next-intl/server';
import { Locale } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale, id: string }>,
}): Promise<Metadata> {
  const { locale, id } = await params;

  const messages = await getMessages({ locale });
  if (!messages?.works?.works?.[id])
    notFound();

  const tm = await getTranslations({ locale, namespace: 'metadata' });
  const tw = await getTranslations({ locale, namespace: `works.works.${id}` });

  return {
    title: `${tw('title')} | ${tm('title')}`,
    description: tm('description'),
    icons: [{ rel: 'icon', url: '/icons/favicon.ico' }],
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      type: 'article',
      title: `${tw('title')} | ${tm('title')}`,
      description: tm('description'),
      url: `https://shinza-s-portfolio-v2.vercel.app/${locale}/works/${id}`,
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
