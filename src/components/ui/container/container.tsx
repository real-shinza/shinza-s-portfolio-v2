import { ReactNode } from 'react';

export const Container = (args: {
  children: ReactNode,
}) => {
  return (
    <main className='mx-auto w-full max-w-6xl px-9 lg:px-4'>
      {args.children}
    </main>
  );
};
