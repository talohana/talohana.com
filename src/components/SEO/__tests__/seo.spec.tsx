/* eslint-disable jest/expect-expect */

import { Maybe, Site, SiteSiteMetadata } from '@models';
import { getByName } from '@test-utils/custom-queries';
import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { PureSEO } from '../seo';

const createSite = (siteMetadata?: Partial<SiteSiteMetadata>): Site =>
  ({
    siteMetadata: {
      defaultTitle: 'Tal Ohana',
      titleTemplate: '%s | Tal Ohana',
      description: 'Tal Ohana Personal Site',
      siteUrl: 'talohana.test',
      twitter: 'twitter.com/talohanax',
      image: '/talohana.png',
      lang: 'en',
      ...siteMetadata,
    },
  } as Site);

const waitForMeta = async (
  name: string,
  content?: Maybe<string>
): Promise<void> =>
  waitFor(() =>
    expect(getByName(document.head, name)).toHaveAttribute('content', content)
  );

describe('SEO', () => {
  it('should set default title', async () => {
    const site = createSite();
    render(<PureSEO site={site} />);

    await waitFor(() =>
      expect(document.title).toBe(site.siteMetadata.defaultTitle)
    );
  });

  it('should set title with template', async () => {
    const site = createSite();
    const title = 'Custom Title';
    render(<PureSEO title={title} site={site} />);

    await waitFor(() => expect(document.title).toBe(`${title} | Tal Ohana`));
  });

  it('should set default description', async () => {
    const site = createSite();
    render(<PureSEO site={site} />);

    await waitForMeta('description', site.siteMetadata.description);
  });

  it('should set custom description', async () => {
    const site = createSite();
    const description = 'My Custom Description';
    render(<PureSEO description={description} site={site} />);

    await waitForMeta('description', description);
  });

  it('should set default image', async () => {
    const site = createSite();
    render(<PureSEO site={site} />);

    await waitForMeta(
      'image',
      `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`
    );
  });

  it('should set custom default image', async () => {
    const site = createSite();
    const image = '/my-custom-image.webp';

    render(<PureSEO image={image} site={site} />);

    await waitForMeta('image', `${site.siteMetadata.siteUrl}${image}`);
  });
});
