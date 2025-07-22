import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1',
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2',
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3',
  },
];

const Slider = () => {
  return (
    <div className="px-4 py-6">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true} // 🔁 MUST be true
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // 🔁 Keeps autoplay working after interaction
        }}
        pagination={{ clickable: true }}
        speed={1000}
      >
        {slideImages.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center flex items-center justify-center rounded-lg shadow-lg"
              style={{ backgroundImage: `url(${slide.url})` }}
            >
              <div className="bg-white/70 text-black text-xl font-semibold px-6 py-3 rounded-md shadow-md">
                {slide.caption}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
