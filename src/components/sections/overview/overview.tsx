import { Section } from '@/components/ui';

export const Overview = (args: {
  image?: string,
  title: string,
  tags: string[],
  description: string,
}) => {
  return (
    <Section id='overview' image={args.image} title={args.title}>
      <div className='flex flex-wrap gap-1 mb-4'>
        {args.tags.map(tag => (
          <div key={tag} className='px-1 py-0.5 border border-border bg-shadow rounded-full'>
            <div className='text-muted text-[10px] md:text-[12px]'>
              {tag}
            </div>
          </div>
        ))}
      </div>
      <div className='text-text text-sm md:text-base whitespace-pre-line'>
        {args.description}
      </div>
    </Section>
  );
};
