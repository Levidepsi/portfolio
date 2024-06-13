"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const SlideShow = ({ slider_items, positions }: {slider_items: any, positions: string}) => {
  return (
    <div className=" sliderContainer">
      <Swiper
         spaceBetween={30}
					effect={"fade"}
					navigation={false}
					
					pagination={{
						clickable: true,
					}}
          slidesPerView={1}
					modules={[Autoplay, EffectFade, Navigation, Pagination]}
					className='mySwiper  SlideShow'
      >
        {slider_items && slider_items.map((slide: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <h1 className="slideshow_title">
                  {!slide.title ? "SlideShow": slide.title}
                </h1>
                <Image src={slide.image} alt={!slide.title ? "SlideShow": slide.title} width={1000} height={1000} className="slideshow_image" priority />
              </SwiperSlide>
            )
          })}
     </Swiper>
    </div>
  )
};

export default SlideShow;
