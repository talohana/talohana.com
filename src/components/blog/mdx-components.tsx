import Image, { ImageProps } from 'next/image';

const CustomImage: React.VFC<ImageProps> = props => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <Image {...props} className="rounded-lg" />
);

export const components = {
  Image: CustomImage,
};
