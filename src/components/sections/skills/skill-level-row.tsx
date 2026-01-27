import { SkillLevel } from '@/types';

export const SkillLevelRow = (args: {
  skill: SkillLevel,
}) => {
  return (
    <div className='flex md:items-center md:justify-between flex-col md:flex-row md:gap-10 py-1 md:py-2'>
      <div className='flex items-center justify-between md:justify-start'>
        {/* Name */}
        <div className='text-sm md:text-base font-medium text-[var(--text)] md:w-3xs'>
          {args.skill.name}
        </div>
        {/* Level (SP) */}
        <div className='text-xs text-[var(--muted)] md:hidden'>
          Lv. {args.skill.level.toFixed(1)}
        </div>
      </div>
      {/* Bar */}
      <div className='flex-1 py-1'>
        <div className='h-2 rounded-full bg-[var(--border)] overflow-hidden'>
          <div
            className='h-full bg-[var(--muted)] animate-slide-fade-in-left'
            style={{ width: `${(args.skill.level / 5) * 100}%` }}
          />
        </div>
      </div>
      {/* Level (PC) */}
      <div className='text-sm text-[var(--muted)] hidden md:block'>
        Lv. {args.skill.level.toFixed(1)}
      </div>
    </div>
  );
};
