import notFound from '@/public/assets/404.svg';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Custom404: React.FC = () => {
  return <>
    <NextSeo title="404" />
    <div className="h-full flex flex-col justify-center items-center space-y-10">
      <div className="relative w-2/3 aspect-[4/3]">
        <Image src={notFound} fill alt="Page not found" />
      </div>
      <div className="text-center space-y-8">
        <div className="text-3xl uppercase">Oh S#!t!</div>
        <div className="text-lg space-y-2">
          <div>
            The page you are looking for was moved, removed or might never
            existed!
          </div>
          <Link href="/" className="block text-primary underline">
            Let&apos;s go back home{' '}
          </Link>
        </div>
      </div>
    </div>
  </>;
};

export default Custom404;
