import BackgroundImage, {
  IBackgroundImageProps,
} from 'gatsby-background-image';
import React from 'react';
import styled from 'styled-components';

export const BackgroundSection: React.FC<IBackgroundImageProps> = props => {
  return <StyledBackgroundImage Tag="section" {...props} />;
};

const StyledBackgroundImage = styled(BackgroundImage)<IBackgroundImageProps>`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;
