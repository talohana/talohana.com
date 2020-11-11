import { render, screen } from '@testing-library/react';
import React from 'react';
import { File } from '../../../types';
import { Banner } from '../banner';

describe('Banner', () => {
  it('should not render when image is null', () => {
    const { container } = render(<Banner banner={null} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('should display credit and creditUrl', () => {
    const credit = 'Banner Credit';
    const creditUrl = 'https://credit.com';

    render(
      <Banner
        banner={getBannerFile()}
        bannerCredit={credit}
        bannerCreditUrl={creditUrl}
      />
    );

    const creditElement = screen.getByText(credit);

    expect(creditElement).toBeVisible();
    expect(creditElement).toHaveAttribute('href', creditUrl);
    expect(creditElement).toHaveAttribute('target', '_blank');
  });

  it('should display image alt', () => {
    const imageAlt = 'Banner Image';

    render(<Banner banner={getBannerFile()} bannerAlt={imageAlt} />);

    expect(screen.getByAltText(imageAlt)).toBeInTheDocument();
  });
});

const getBannerFile = (): File => {
  return {
    childImageSharp: {
      fluid: {
        src: 'my-awesome-picture.png',
        aspectRatio: 1,
        sizes: '1920x1080',
        srcSet: '',
      },
    },
  } as File;
};
