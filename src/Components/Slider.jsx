import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

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
    <div className="slide-container px-4 py-6">
      <Slide arrows={true} autoplay={true} duration={3000} transitionDuration={700}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className="h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center flex items-center justify-center rounded-lg shadow-lg"
              style={{ backgroundImage: `url(${slideImage.url})` }}
            >
              <div className="bg-white/70 text-black text-xl font-semibold px-6 py-3 rounded-md shadow-md">
                {slideImage.caption}
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
