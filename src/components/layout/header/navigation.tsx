import { Link } from '@/i18n/navigation';

export const Nav = (args: {
  sectionName: string,
  hash: string
}) => {
  return (
    <Link
      className='group p-2 hover:bg-shadow rounded-full'
      href={{ pathname: '/', hash: args.hash }}
    >
      <div className='text-sm text-muted group-hover:text-text'>
        {args.sectionName}
      </div>
    </Link>
  );
};
