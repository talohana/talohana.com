import { siteUrl } from '@/lib/constants';
import { DefaultSeoProps } from 'next-seo';

export const SEO: DefaultSeoProps = {
  titleTemplate: 'Tal Ohana | %s',
  description: 'Tal Ohana - Software Engineer',
  openGraph: {
    site_name: 'Tal Ohana',
    images: [{ url: `${siteUrl}/assets/banner.jpg` }],
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@talohanax',
  },
};
