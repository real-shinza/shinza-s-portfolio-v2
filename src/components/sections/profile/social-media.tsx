import Link from 'next/link';
import Image from 'next/image';
import { SocialMediaEntry } from '@/types';
import { Button } from '@/components/ui';

export const SocialMedia = (args: { entry: SocialMediaEntry }) => {
  return (
    <Button
      variant='outline'
      size='sm'
      className='text-muted-foreground hover:text-foreground'
      nativeButton={false}
      render={<Link id={args.entry.id} className='social-media' href={args.entry.href} target='_blank' />}
    >
      <div className='relative h-5 w-5'>
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
      <span className='font-normal text-sm'>
        {args.entry.name}
      </span>
    </Button>
  );
};
