import { Layout } from '@/components/layout/layout';
import '@/styles/globals.css';
import '@/styles/prism.css';
import { defaultSEO } from '@/utils/next-seo.config';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
