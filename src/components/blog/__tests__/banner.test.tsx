import { render, screen } from '@testing-library/react';
import { FluidObject } from 'gatsby-image';
import React from 'react';
import { Banner } from '../banner';

describe('Banner', () => {
  it('should not render when image is null', () => {
    const { container } = render(<Banner image={null} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('should display credit and creditUrl', () => {
    const credit = 'Banner Credit';
    const creditUrl = 'https://credit.com';

    render(
      <Banner image={getFluidObject()} credit={credit} creditUrl={creditUrl} />
    );

    const creditElement = screen.getByText(credit);

    expect(creditElement).toBeVisible();
    expect(creditElement).toHaveAttribute('href', creditUrl);
    expect(creditElement).toHaveAttribute('target', '_blank');
  });

  it('should display image alt', () => {
    const imageAlt = 'Banner Image';

    render(<Banner image={getFluidObject()} imageAlt={imageAlt} />);

    expect(screen.getByAltText(imageAlt)).toBeInTheDocument();
  });
});

const getFluidObject = (): FluidObject => {
  return {
    src: 'my-awesome-picture.png',
    aspectRatio: 1,
    sizes: '1920x1080',
    srcSet: '',
  };
};
