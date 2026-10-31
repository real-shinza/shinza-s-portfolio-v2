'use client';

import { useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { ProfileImage } from './profile-image';

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

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [autoplay] = useState(() =>
    Autoplay({ delay: 10000, stopOnInteraction: false }),
  );

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on('select', onSelect);
    api.on('reInit', onSelect);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  return (
    <div className='h-32 w-32 md:h-48 md:w-48 mb-3'>
      <Carousel
        opts={{ loop: true }}
        plugins={[autoplay]}
        setApi={setApi}
        className='mb-1 md:mb-2'
      >
        <CarouselContent>
          {profileImages.map((image) => (
            <CarouselItem key={image}>
              <ProfileImage image={image} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className='flex justify-center gap-1'>
        {profileImages.map((image, index) => (
          <button
            key={image}
            type='button'
            aria-label={`Go to slide ${index + 1}`}
            aria-current={current === index ? 'true' : undefined}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 w-2 rounded-full bg-primary ${current === index ? 'opacity-100' : 'opacity-30'} cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
};
