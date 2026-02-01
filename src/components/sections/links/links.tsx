import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui';
import { LinkEntry } from '@/types';

export const Links = (args: {
  links: LinkEntry,
}) => {
  const t = useTranslations('links');

  if (args.links.length === 0)
    return (<></>);

  return (
    <Section id='links' title={t('title')}>
      <article className='py-2'>
        {args.links.map((link, index) => (
          <Link className='external-link group' href={link.href} target='_blank' key={index}>
            <div className='text-sm md:text-base text-text group-hover:text-muted underline'>
              {link.name}
            </div>
          </Link>
        ))}
      </article>
    </Section>
  );
};
