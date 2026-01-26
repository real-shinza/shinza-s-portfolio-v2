import { Link } from '@/i18n/navigation';

export const Nav = (args: {
  sectionName: string,
  hash: string
}) => {
  return (
    <div className='p-2 hover:bg-black/6 rounded-full'>
      <Link href={{ pathname: '/', hash: args.hash }}>
        <div className='text-base text-[var(--muted)] hover:text-[var(--text)]'>
          {args.sectionName}
        </div>
      </Link>
    </div>
  );
};
