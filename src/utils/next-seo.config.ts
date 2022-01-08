import { DefaultSeoProps } from 'next-seo';

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: 'Tal Ohana | %s',
  description: 'Tal Ohana - Software Engineer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://talohana.com',
    title: 'Tal Ohana',
    images: [{ url: 'https://talohana.com/assets/banner.jps' }],
    site_name: 'talohana.com',
  },
  twitter: {
    handle: '@talohanax',
    cardType: 'summary_large_image',
  },
};
