import BackgroundImage, {
  IBackgroundImageProps,
} from 'gatsby-background-image';
import React from 'react';
import tw from 'twin.macro';

export const BackgroundSection: React.FC<IBackgroundImageProps> = props => {
  return <StyledBackgroundImage Tag="section" {...props} />;
};

const StyledBackgroundImage = tw(
  BackgroundImage
)`w-full bg-center bg-repeat-y bg-cover`;
