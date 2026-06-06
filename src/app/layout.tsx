'use client';

import { ThemeProvider } from 'next-themes';
import { GoogleTagManager } from '@next/third-parties/google';

export default ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html suppressHydrationWarning>
      <GoogleTagManager gtmId='GTM-WZ9DPNCW' />
      <body>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};
