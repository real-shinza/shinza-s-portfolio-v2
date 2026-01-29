import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { WorkEntry } from '@/types';

export const Work = (args: {
  id: string,
  work: WorkEntry,
}) => {
  const t = useTranslations(`works.works.${args.id}`);

  return (
    <article className='overflow-hidden border border-border rounded-xl md:rounded-2xl hover:border-muted transition-all hover:-translate-y-0.5'>
      <Link id={args.id} href={`/works/${args.id}`} className='divide-y divide-border'>
        <div className='relative aspect-square'>
          <Image
            className='w-full h-auto'
            src={args.work.image}
            alt={t('title')}
            fill
          />
        </div>
        <div className='px-2 md:px-3 py-3'>
          <h3 className='text-text text-sm md:text-base font-medium'>
            {t('title')}
          </h3>
          <div className='flex flex-wrap gap-1 mt-2'>
            {args.work.tags.map(tag => (
              <span key={tag} className='px-1 py-0.5 border border-border bg-shadow rounded-full'>
                <div className='text-muted text-[10px] md:text-[12px]'>
                  {tag}
                </div>
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
};
