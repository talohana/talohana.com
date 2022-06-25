import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<Props> = ({ children, className }) => {
  const classes = clsx(
    'uppercase px-2 py-1 bg-primary-700 text-white inline-block rounded-lg flex justify-center items-center',
    className
  );

  return <div className={classes}>{children}</div>;
};
