import { siteUrl } from '@/lib/constants';
import { DefaultSeoProps } from 'next-seo';

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: 'Tal Ohana | %s',
  defaultTitle: 'Tal Ohana',
  description: 'Tal Ohana - Software Engineer',
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Tal Ohana',
    images: [{ url: `${siteUrl}/assets/banner.jpg` }],
    site_name: 'talohana.com',
    defaultImageWidth: 1200,
    defaultImageHeight: 628,
  },
  twitter: {
    handle: '@talohanax',
    cardType: 'summary_large_image',
  },
};
