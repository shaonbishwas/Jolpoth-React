import { Navigation, Autoplay, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";

const Review = () => {
  return (
    <div className="mt-24 mb-20 max-w-[1440px] px-3 lg:px-20">
      <div className="text-center space-y-3 mb-4">
        <h1 className="text-4xl font-bold">What Our Client Says</h1>
        <p className="font-mono">
          Explore Authentic Travel Stories: Dive Into Personal Testimonials from
          Our Valued Clients Sharing Their Unforgettable Adventures!
        </p>
      </div>
      <div className="">
        <Swiper
          style={{
            "--swiper-navigation-color": "#f7a582",
            "--swiper-pagination-color": "#f7a582",
          }}
          modules={[Navigation, Autoplay, A11y, Pagination]}
          spaceBetween={0}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 640px

            320: {
              slidesPerView: 1,
            },

            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 1,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <div className=" py-8 px-12 lg:p-12 h-[350px] lg:h-[250px] space-y-3 border shadow rounded-2xl lg:mr-4">
              <div className="flex justify-between ">
                <div className="flex items-center gap-4">
                  <img src="/src/assets/Ellipse 2.png" alt="" />
                  <div>
                    <h3 className="font-bold text-lg">611hildev</h3>
                    <h6>Oostrozebeke, Bélgica</h6>
                  </div>
                </div>
                <h5 className=" ">
                  <FaQuoteLeft className="text-[#f7a582] text-2xl lg:text-6xl hidden lg:block" />
                </h5>
              </div>
              <p className="">
                This was one of the most beautiful experiences in my life!!! so
                beautiful!! the people..so warm! so colourfull! unforgettable!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-8 px-12 lg:p-12 h-[350px] lg:h-[250px]  space-y-3 border shadow rounded-2xl lg:mr-4">
              <div className="flex justify-between ">
                <div className="flex items-center gap-4">
                  <img src="/src/assets/Ellipse 3.png" alt="" />
                  <div>
                    <h3 className="font-bold text-lg">Masseroliviero</h3>
                    <h6>Bergamo, Italia</h6>
                  </div>
                </div>
                <h5 className="">
                  <FaQuoteLeft className="text-[#f7a582] text-2xl lg:text-6xl hidden lg:block" />
                </h5>
              </div>
              <p className="">
                I highly recommend this guide. I have been 22 times to
                Bangladesh and I have been able to discover the truest and most
                exciting Bangladesh. I will be back soon and will be with him.
                Very professional and helpful.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-8 px-12 lg:p-12 h-[350px] lg:h-[250px]  space-y-3 border shadow rounded-2xl ">
              <div className="flex justify-between ">
                <div className="flex items-center gap-4">
                  <img src="/src/assets/Ellipse 3.png" alt="" />
                  <div>
                    <h3 className="font-bold text-lg">Masseroliviero</h3>
                    <h6>Bergamo, Italia</h6>
                  </div>
                </div>
                <h5 className="">
                  <FaQuoteLeft className="text-[#f7a582] text-2xl lg:text-6xl hidden lg:block" />
                </h5>
              </div>
              <p className="">
                I highly recommend this guide. I have been 22 times to
                Bangladesh and I have been able to discover the truest and most
                exciting Bangladesh. I will be back soon and will be with him.
                Very professional and helpful.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
