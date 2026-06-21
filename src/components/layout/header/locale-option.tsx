import Image from 'next/image';
import { cn } from '@/lib/utils';

export const LocaleOption = (args: {
  className?: string,
  localeName: string,
  src: string,
}) => {
  return (
    <div className='flex items-center gap-1.5'>
      <div className='relative h-4 w-4 md:h-5 md:w-5'>
        <Image
          className='rounded-full border border-border'
          src={args.src}
          alt='Country flag'
          fill
          sizes='(max-width: 768px) 128px, 192px'
        />
      </div>
      <span
        className={cn(
          'text-left text-sm font-normal md:text-base',
          args.className,
        )}
      >
        {args.localeName}
      </span>
    </div>
  );
};
