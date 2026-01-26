import { ReactNode } from 'react';

export const Section = (args: {
  id: string,
  children: ReactNode,
}) => {
  return (
    <section id={args.id} className='py-6 md:py-10'>
      {args.children}
    </section>
  );
};
