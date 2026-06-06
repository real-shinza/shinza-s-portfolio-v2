import Image from 'next/image';

export const LocaleOption = (args: {
  className?: string,
  localeName: string,
  src: string,
  onClick: () => void,
}) => {
  return (
    <button
      type='button'
      onClick={args.onClick}
      className='flex items-center gap-1 cursor-pointer'
    >
      <div className='relative h-4 w-4 md:h-5 md:w-5'>
        <Image
          className='rounded-full border border-border'
          src={args.src}
          alt='Country flag'
          fill
        />
      </div>
      <span className='w-15 text-left text-sm font-normal text-foreground md:w-18 md:text-base'>
        <div className={args.className}>
          {args.localeName}
        </div>
      </span>
    </button>
  );
};
