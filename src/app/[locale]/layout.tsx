import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Locale } from '@/i18n/routing';
import { Footer, Header } from '@/components/layout';
import { localeFonts } from '@/lib/fonts';

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
    alternates: {
      canonical: `https://portfolio.real-shinza.com/${locale}`,
      languages: {
        'ja': 'https://portfolio.real-shinza.com/ja',
        'en': 'https://portfolio.real-shinza.com/en',
        'zh-CN': 'https://portfolio.real-shinza.com/zh-CN',
        'zh-TW': 'https://portfolio.real-shinza.com/zh-TW',
        'ko': 'https://portfolio.real-shinza.com/ko',
      },
    },
    openGraph: {
      type: 'website',
      title: t('title'),
      description: t('description'),
      url: `https://portfolio.real-shinza.com/${locale}`,
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
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className={`${localeFonts?.[locale]?.className} min-h-screen flex flex-col`}>
        <Header />
        <main className='flex-1 mx-auto w-full max-w-4xl px-10 lg:px-4 divide-y divide-border'>
          {children}
        </main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
};
