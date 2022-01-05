import clsx from 'clsx';
import React from 'react';

type HeadingProps = {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
};

const fontSize = {
  h1: 'leading-tight text-4xl md:text-5xl',
  h2: 'leading-tight text-3xl md:text-4xl',
  h3: 'text-2xl font-medium md:text-3xl',
  h4: 'text-xl font-medium md:text-2xl',
  h5: 'text-lg font-medium md:text-xl',
  h6: 'text-lg font-medium',
};

const Heading: React.FC<HeadingProps & { size: keyof typeof fontSize }> = ({
  as,
  size,
  className,
  ...rest
}) => {
  const Tag = as ?? size;

  return <Tag {...rest} className={clsx(fontSize[size], className)} />;
};

export const H1: React.FC<HeadingProps> = props => (
  <Heading size="h1" {...props} />
);

export const H2: React.FC<HeadingProps> = props => (
  <Heading size="h2" {...props} />
);

export const H3: React.FC<HeadingProps> = props => (
  <Heading size="h3" {...props} />
);

export const H4: React.FC<HeadingProps> = props => (
  <Heading size="h4" {...props} />
);

export const H5: React.FC<HeadingProps> = props => (
  <Heading size="h5" {...props} />
);

export const H6: React.FC<HeadingProps> = props => (
  <Heading size="h6" {...props} />
);
