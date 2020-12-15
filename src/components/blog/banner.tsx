import { Maybe, MdxFields } from '@types';
import Image, { FluidObject } from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import tw from 'twin.macro';

type Props = Pick<MdxFields, 'banner' | 'bannerCredit' | 'bannerCreditUrl'> & {
  bannerAlt?: Maybe<string>;
};

export const Banner: React.FC<Props> = ({
  banner,
  bannerAlt,
  bannerCredit,
  bannerCreditUrl,
}) => {
  if (!banner?.childImageSharp?.fluid) {
    return null;
  }

  return (
    <div>
      <Image
        fluid={banner.childImageSharp.fluid as FluidObject}
        alt={bannerAlt ?? ''}
      />
      {bannerCredit && (
        <Credit>
          Photo by{' '}
          <OutboundLink href={bannerCreditUrl ?? '/'} target="_blank">
            {bannerCredit}
          </OutboundLink>
        </Credit>
      )}
    </div>
  );
};

const Credit = tw.span`block text-center my-1`;
