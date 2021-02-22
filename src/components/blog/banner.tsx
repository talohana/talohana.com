import { Maybe, MdxFields } from '@models';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import tw from 'twin.macro';

type Props = Pick<MdxFields, 'banner' | 'bannerCredit' | 'bannerCreditUrl'> & {
  bannerAlt?: Maybe<string>;
};

const StyledGatsbyImage = tw(GatsbyImage)`relative`;

const Credit = tw.span`block text-center my-1`;

export const Banner: React.FC<Props> = ({
  banner,
  bannerAlt,
  bannerCredit,
  bannerCreditUrl,
}) => {
  if (!banner?.childImageSharp?.gatsbyImageData) {
    return null;
  }

  return (
    <div>
      <StyledGatsbyImage
        // TODO: Remove IGatsbyImageData when API is stable
        image={banner.childImageSharp.gatsbyImageData as IGatsbyImageData}
        loading="eager"
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
