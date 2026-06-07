'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { WorkEntry } from '@/types';
import { Badge, Card, CardContent, CardTitle } from '@/components/ui';

export const Work = (args: {
  id: string,
  work: WorkEntry,
}) => {
  const t = useTranslations(`works.works.${args.id}`);
  const router = useRouter();

  return (
    <Card
      size='sm'
      className='rounded-2xl py-0 ring-1 ring-border/80 transition-all hover:-translate-y-0.5 hover:ring-foreground/20'
    >
      <button
        type='button'
        className='w-full cursor-pointer'
        onClick={() => router.push(`/works/${args.id}`)}
      >
        <div className='relative aspect-3/2'>
          <Image
            className='object-cover'
            src={args.work.image}
            alt={t('title')}
            fill
          />
        </div>
        <CardContent className='border-t border-border px-2 py-3 md:px-3'>
          <CardTitle className='text-sm md:text-base text-left'>
            {t('title')}
          </CardTitle>
          <div className='flex flex-wrap gap-1 mt-2'>
            {args.work.tags.map(tag => (
              <Badge
                key={tag}
                variant='outline'
                className='h-auto bg-muted px-1 py-0.5 text-[10px] font-normal text-muted-foreground md:text-xs'
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </button>
    </Card>
  );
};
