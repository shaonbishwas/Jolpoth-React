import {Navigation, Autoplay, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="">
      <div className="">
        <Swiper
          style={{
            "--swiper-navigation-color": "#ffffff",
            "--swiper-pagination-color": "#ffffff",
          }}
          modules={[Navigation, Autoplay, A11y, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="w-full">
              <img src="/src/assets/homebanner1.jpg" className="slider-image  h-[320px] md:h-[400px] lg:h-[600px]" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full">
              <img src="/src/assets/homebanner2.jpg" className="slider-image  h-[320px] md:h-[400px] lg:h-[600px]" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full">
              <img src="/src/assets/homebanner3.jpg" className="slider-image  h-[320px] md:h-[400px] lg:h-[600px]" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full">
              <img src="/src/assets/homebanner4.jpg" className="slider-image  h-[320px] md:h-[400px] lg:h-[600px]" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
