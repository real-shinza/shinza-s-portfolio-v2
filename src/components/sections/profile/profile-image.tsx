import Image from 'next/image';

export const ProfileImage = () => {
  return (
    <div className='relative h-32 w-32 md:h-48 md:w-48'>
      <Image
        className='rounded-full'
        src='/profiles/profile7.jpg'
        alt='Profile image'
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};
