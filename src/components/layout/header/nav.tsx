'use client';

import { useRouter } from '@/i18n/navigation';
import { Button } from '@/components/ui';

export const Nav = (args: {
  sectionName: string,
  hash: string
}) => {
  const router = useRouter();

  return (
    <Button
      variant='ghost'
      size='sm'
      className='cursor-pointer text-muted-foreground hover:text-foreground'
      onClick={() => router.push(`/#${args.hash}`)}
    >
      {args.sectionName}
    </Button>
  );
};
