import { Layout } from '@/components/layout/layout';
import '@/styles/globals.css';
import '@/styles/prism.css';
import { defaultSEO } from '@/utils/next-seo.config';
import { GoogleAnalytics } from '@next/third-parties/google';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
          <GoogleAnalytics
            gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ''}
          />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
