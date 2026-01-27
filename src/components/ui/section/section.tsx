import { ReactNode } from 'react';

export const Section = (args: {
  id: string,
  title?: string
  children: ReactNode,
}) => {
  return (
    <section id={args.id} className='py-8 md:py-18'>
      {args.title && (
        <h2 className='text-[var(--text)] text-2xl md:text-3xl font-semibold mb-2'>
          {args.title}
        </h2>
      )}
      {args.children}
    </section>
  );
};
