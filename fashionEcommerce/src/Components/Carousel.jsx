import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Highlander from "../assets/carousalImages/Highlander.webp"
import Hoop from "../assets/carousalImages/Hoop.webp"
import ketch from "../assets/carousalImages/ketch.webp"
import tokiyotalkies from "../assets/carousalImages/TokyoTalkies.webp"
import vishudh from "../assets/carousalImages/Vishudh.webp"


const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  return (
    <div className="embla mt-15" ref={emblaRef}>
      <div className="embla__container flex">
        <div className="embla__slide flex-none w-full min-w-0"><img src={Highlander} alt="" /></div>
        <div className="embla__slide flex-none w-full min-w-0"><img src={Hoop} alt="" /></div>
        <div className="embla__slide flex-none w-full min-w-0"><img src={ketch} alt="" /></div>
        <div className="embla__slide flex-none w-full min-w-0"><img src={tokiyotalkies} alt="" /></div>
        <div className="embla__slide flex-none w-full min-w-0"><img src={vishudh} alt="" /></div>
      </div>
    </div>
  );
};

export default Carousel;
