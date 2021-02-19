import { Maybe, MdxFields } from '@models';
import Img, { FluidObject } from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import tw from 'twin.macro';

type Props = Pick<MdxFields, 'banner' | 'bannerCredit' | 'bannerCreditUrl'> & {
  bannerAlt?: Maybe<string>;
};

const Credit = tw.span`block text-center my-1`;

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
      <Img
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
