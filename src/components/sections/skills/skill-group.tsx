import { ReactNode } from 'react';

export const SkillGroup = (args: {
  categoryName: string,
  children: ReactNode,
}) => {
  return (
    <div className='py-2'>
      <h3 className='text-muted text-xs md:text-sm font-medium mb-1'>
        {args.categoryName}
      </h3>
      {args.children}
    </div>
  );
};
