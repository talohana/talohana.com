import Image, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

type Props = {
  fluid: FluidObject;
  credit?: string;
  creditUrl?: string;
};

export const Banner: React.FC<Props> = ({ fluid, credit, creditUrl }) => {
  return (
    <div>
      <Image fluid={fluid} />
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
  margin-bottom: 2rem;
`;
