import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
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
      url: `https://shinza-s-portfolio.vercel.app/${locale}`,
      locale: t('locale'),
    },
  };
};

export default async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{ locale: Locale }>,
}>) => {
  const { locale } = await params;

  return (
    <html lang={locale} className={localeFonts[locale].className}>
      <GoogleTagManager gtmId='GTM-THB3JD7F' />
      <body className='min-h-screen flex flex-col'>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};
