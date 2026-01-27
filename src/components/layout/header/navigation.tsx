import { Link } from '@/i18n/navigation';

export const Nav = (args: {
  sectionName: string,
  hash: string
}) => {
  return (
    <div className='group p-2 hover:bg-[var(--shadow)] rounded-full'>
      <Link href={{ pathname: '/', hash: args.hash }}>
        <div className='text-sm text-[var(--muted)] group-hover:text-[var(--text)]'>
          {args.sectionName}
        </div>
      </Link>
    </div>
  );
};
