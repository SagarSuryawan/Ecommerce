
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';


function Carousel({ images }) {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);
  
    return (
      <div className="embla mt-10 cursor-pointe overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((img, index) => (
            <div key={index} className="embla__slide flex-none w-full min-w-0">
              <img src={img.src} alt={img.alt || `slide-${index}`} className="w-[90%] m-auto rounded-md" />
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Carousel;
