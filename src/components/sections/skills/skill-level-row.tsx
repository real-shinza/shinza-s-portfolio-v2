import { Progress } from '@/components/ui';
import { SkillLevel } from '@/types';

export const SkillLevelRow = (args: {
  skill: SkillLevel,
}) => {
  return (
    <div className='flex flex-col py-1 md:flex-row md:items-center md:justify-between md:gap-10 md:py-1.5'>
      <div className='flex items-center justify-between md:justify-start'>
        {/* Name */}
        <div className='text-sm font-medium text-foreground md:w-3xs md:text-base'>
          {args.skill.name}
        </div>
        {/* Level (SP) */}
        <div className='text-xs text-muted-foreground md:hidden'>
          Lv. {args.skill.level.toFixed(1)}
        </div>
      </div>
      <Progress value={(args.skill.level / 5) * 100} className='flex-1 py-0.5' />
      {/* Level (PC) */}
      <div className='hidden text-sm text-muted-foreground md:block'>
        Lv. {args.skill.level.toFixed(1)}
      </div>
    </div>
  );
};
