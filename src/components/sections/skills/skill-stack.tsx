export const SkillStack = (args: { name: string }) => {
  return (
    <div className='px-1.5 py-0.5 border border-border bg-shadow rounded-full'>
      <div className='text-sm md:text-base'>
        {args.name}
      </div>
    </div>
  );
};
