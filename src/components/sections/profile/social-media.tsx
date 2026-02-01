import Link from 'next/link';
import Image from 'next/image';
import { SocialMediaEntry } from '@/types';

export const SocialMedia = (args: { entry: SocialMediaEntry }) => {
  return (
    <div className='group hover:bg-shadow rounded-full border border-border hover:border-muted'>
      <Link id={args.entry.id} className='social-media' href={args.entry.href} target='_blank'>
        <div className='flex items-center justify-center gap-1.5 px-3 py-1.5'>
          <div className='relative h-4 w-4 md:h-5 md:w-5'>
            {/* Light Mode */}
            <Image
              className='block dark:hidden'
              src={args.entry.images.light}
              alt={args.entry.name}
              fill
            />
            {/* Drak Mode */}
            <Image
              className='hidden dark:block'
              src={args.entry.images.dark}
              alt={args.entry.name}
              fill
            />
          </div>
          {/* Name */}
          <span className='text-muted group-hover:text-text text-xs md:text-sm'>
            {args.entry.name}
          </span>
        </div>
      </Link>
    </div>
  );
};
