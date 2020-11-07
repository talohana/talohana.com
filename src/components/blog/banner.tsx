import Image, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

type Props = {
  image: FluidObject | null;
  imageAlt?: string | null;
  credit?: string | null;
  creditUrl?: string | null;
};

export const Banner: React.FC<Props> = ({
  image,
  imageAlt,
  credit,
  creditUrl,
}) => {
  if (!image) {
    return null;
  }

  return (
    <div>
      <Image fluid={image} alt={imageAlt ?? ''} />
      {credit && creditUrl && (
        <Credit>
          Photo by{' '}
          <a href={creditUrl} target="_blank">
            {credit}
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
