import { ReactNode } from 'react';

export const Container = (args: {
  children: ReactNode;
}) => {
  return (
    <div className='mx-auto w-full max-w-6xl px-9 md:px-4'>
      {args.children}
    </div>
  );
};
