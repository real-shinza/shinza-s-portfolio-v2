import { SkillLevel } from '@/types';

export const SkillLevelRow = (args: {
  skill: SkillLevel,
}) => {
  return (
    <div className='flex md:items-center md:justify-between flex-col md:flex-row md:gap-10 py-1 md:py-2'>
      <div className='flex items-center justify-between md:justify-start'>
        {/* 名前 */}
        <div className='text-base md:text-lg font-medium text-[var(--text)] md:w-3xs'>
          {args.skill.name}
        </div>
        {/* レベル (SP用) */}
        <div className='text-sm text-[var(--muted)] md:hidden'>
          Lv. {args.skill.level.toFixed(1)}
        </div>
      </div>
      {/* バー */}
      <div className='flex-1 py-1'>
        <div className='h-2 rounded-full bg-[var(--border)] overflow-hidden'>
          <div
            className='h-full bg-[var(--muted)]'
            style={{ width: `${(args.skill.level / 5) * 100}%` }}
          />
        </div>
      </div>
      {/* レベル (PC用) */}
      <div className='text-base text-[var(--muted)] hidden md:block'>
        Lv. {args.skill.level.toFixed(1)}
      </div>
    </div>
  );
};
