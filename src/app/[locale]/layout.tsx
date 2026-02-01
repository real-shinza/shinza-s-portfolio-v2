import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Locale } from '@/i18n/routing';
import { Footer, Header } from '@/components/layout';
import { localeFonts } from '@/lib/fonts';
import '../globals.css';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>,
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    icons: [{ rel: 'icon', url: '/icons/favicon.ico' }],
    openGraph: {
      type: 'website',
      title: t('title'),
      description: t('description'),
      url: `https://shinza-s-portfolio-v2.vercel.app/${locale}`,
      locale: t('locale'),
    },
  };
};

export default async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{ locale: string }>,
}>) => {
  const { locale } = await params as { locale: Locale };

  return (
    <NextIntlClientProvider>
      <div className={`${localeFonts?.[locale]?.className} min-h-screen flex flex-col`}>
        <Header />
        {children}
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
};
