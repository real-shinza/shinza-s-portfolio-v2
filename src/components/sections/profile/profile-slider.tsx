'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { ProfileImage } from './profile-image';
import 'swiper/css';
import 'swiper/css/pagination';

export const ProfileSlider = () => {
  const profileImages: string[] = [
    '/profiles/profile8.jpg',
    '/profiles/profile7.jpg',
    '/profiles/profile6.jpg',
    '/profiles/profile5.jpg',
    '/profiles/profile4.jpg',
    '/profiles/profile3.jpg',
    '/profiles/profile2.jpg',
    '/profiles/profile1.jpg',
  ];

  return (
    <div className='h-32 w-32 md:h-48 md:w-48 mb-3'>
      <Swiper
        loop={true}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
          bulletClass: 'swiper-pagination-bullet !bg-muted',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        className='mb-1 md:mb-2'
      >
        {profileImages.map((image, index) => (
          <SwiperSlide key={index}>
            <ProfileImage image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='custom-pagination flex justify-center gap-1' />
    </div>
  );
};
