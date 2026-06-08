import { ReactNode } from 'react';
import Image from 'next/image';

export const Section = (args: {
  id: string,
  image?: string,
  title?: string,
  children: ReactNode,
}) => {
  return (
    <section id={args.id} className='py-8 md:py-18'>
      {args.image && (
        <div className='relative h-12 w-12 md:h-18 md:w-18'>
          <Image
            className='rounded-xl md:rounded-2xl'
            src={args.image}
            alt='Work image'
            fill
          />
        </div>
      )}
      {args.title && (
        <h2 className='text-2xl md:text-3xl font-bold mb-2'>
          {args.title}
        </h2>
      )}
      {args.children}
    </section>
  );
};

export const SubSection = (args: {
  id: string,
  subTitle: string,
  children: ReactNode,
}) => {
  return (
    <div id={args.id} className='py-2'>
      <h3 className='text-muted-foreground text-xs md:text-sm font-medium mb-1'>
        {args.subTitle}
      </h3>
      <div className='py-3'>
        {args.children}
      </div>
    </div>
  );
};
