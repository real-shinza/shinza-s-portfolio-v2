import { Section } from '@/components/layout';

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
            <div key={tag} className='px-1 py-0.5 border border-border bg-shadow rounded-full'>
              <div className='text-muted text-[10px] md:text-[12px]'>
                {tag}
              </div>
            </div>
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
