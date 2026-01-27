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
      <Image
        className='rounded-full border-1 border-[var(--border)]'
        src={args.src}
        alt='Country flag'
        width={20}
        height={20}
      />
      <span className='text-base text-[var(--text)] font-normal text-left w-16'>
        <div className={args.className}>
          {args.localeName}
        </div>
      </span>
    </button>
  );
};
