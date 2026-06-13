import { Section } from '@/components/layout';
import { Badge } from '@/components/ui';

export const Overview = (args: {
  image?: string,
  title: string,
  period?: string,
  tags?: string[],
  description: string,
}) => {
  return (
    <Section id='overview' image={args.image} title={args.title}>
      {/* Period */}
      {args.period && (
        <div className='text-muted text-xs md:text-sm'>
          {args.period}
        </div>
      )}
      {/* Tags */}
      {args.tags && (
        <div className='flex flex-wrap gap-1'>
          {args.tags && args.tags.map(tag => (
            <Badge
              key={tag}
              variant='outline'
              className='h-auto px-1 py-0.5 text-[10px] font-normal text-muted-foreground md:text-xs'
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}
      {/* Description */}
      <div className='text-text text-sm md:text-base whitespace-pre-line mt-4'>
        {args.description}
      </div>
    </Section>
  );
};
