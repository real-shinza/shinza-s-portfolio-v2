import { ReactNode } from 'react';

export const SkillGroup = (args: {
  categoryName: string,
  children: ReactNode,
}) => {
  return (
    <div className='py-3'>
      <h3 className='text-[var(--muted)] text-xs md:text-sm font-medium mb-2'>
        {args.categoryName}
      </h3>
      <div className='divide-y divide-dashed divide-[var(--border)]'>
        {args.children}
      </div>
    </div>
  );
};
