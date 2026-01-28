import { ReactNode } from 'react';

export const SkillGroup = (args: {
  categoryName: string,
  children: ReactNode,
}) => {
  return (
    <div className='py-3'>
      <h3 className='text-muted text-xs md:text-sm font-medium mb-2'>
        {args.categoryName}
      </h3>
      <div className='divide-y divide-dashed divide-border'>
        {args.children}
      </div>
    </div>
  );
};
