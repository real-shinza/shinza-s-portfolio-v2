import Image from 'next/image';

export const ProfileImage = (args: { image: string }) => {
  return (
    <div className='h-32 w-32 md:h-48 md:w-48'>
      <Image
        className='rounded-full'
        src={args.image}
        alt='Profile image'
        fill
      />
    </div>
  );
};
