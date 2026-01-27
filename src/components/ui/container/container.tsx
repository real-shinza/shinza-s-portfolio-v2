import { ReactNode } from 'react';

export const Container = (args: {
  children: ReactNode,
}) => {
  return (
    <main className='flex-1 mx-auto w-full max-w-230 px-10 lg:px-4 divide-y divide-[var(--border)]'>
      {args.children}
    </main>
  );
};
