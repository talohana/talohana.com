import Image, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { MdxFields } from '../../types';

type Props = Pick<MdxFields, 'banner' | 'bannerCredit' | 'bannerCreditUrl'> & {
  bannerAlt?: string;
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
        alt={bannerAlt}
      />
      {bannerCredit && (
        <Credit>
          Photo by{' '}
          <a href={bannerCreditUrl ?? '/'} target="_blank">
            {bannerCredit}
          </a>
        </Credit>
      )}
    </div>
  );
};

const Credit = styled.span`
  display: block;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  font-size: 0.8rem;
`;
