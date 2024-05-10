import { Navigation, Autoplay, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="max-w-[1400px] mx-auto font-sans">
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
            <div className="w-full relative">
              <img
                src="/src/assets/homebanner1.jpg"
                className="slider-image  h-[320px] md:h-[400px] lg:h-[600px]"
                alt=""
              />
              <div className="absolute text-center lg:top-52 w-full px-5 top-[20%] md:top-[30%] lg:px-44 text-white space-y-4 hidden md:block">
                <h1 className="lg:text-6xl font-bold text-2xl">
                  Sail Away Adventures: Navigating Dreams!
                </h1>
                <p className="lg:text-lg">
                  Embark on unforgettable journeys with Sail Away Adventures!
                  Our boat travel agency specializes in curated cruises, island
                  hopping, and coastal escapades. Whether you’re seeking serene
                  sunsets, thrilling water sports, or tranquil fishing trips,
                  we’ve got you covered. Set sail with us and let the waves
                  carry you to blissful destinations.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full relative">
              <img
                src="/src/assets/homebanner2.jpg"
                className="slider-image  h-[320px] md:h-[400px] lg:h-[600px]"
                alt=""
              />
              <div className="absolute text-center lg:top-52 w-full px-5 top-[20%] md:top-[30%] lg:px-44 text-white space-y-4 hidden md:block">
                <h1 className="lg:text-6xl font-bold text-2xl">
                  Embrace the Chaos of Dhaka
                </h1>
                <p className="lg:text-lg">
                  Dhaka, the frenetic capital of Bangladesh, offers a unique
                  blend of chaos, culture, and cuisine. Dive into its bustling
                  markets, explore fascinating neighborhoods, and share lunch
                  tables with locals.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full relative">
              <img
                src="/src/assets/homebanner3.jpg"
                className="slider-image  h-[320px] md:h-[400px] lg:h-[600px]"
                alt=""
              />
              <div className="absolute text-center lg:top-52 w-full px-5 top-[20%] md:top-[30%] lg:px-44 text-white space-y-4 hidden md:block">
                <h1 className="lg:text-6xl font-bold text-2xl">
                  Ride the Mighty Padma River
                </h1>
                <p className="lg:text-lg">
                  No trip to Bangladesh is complete without a journey on the
                  expansive Padma River (also known as Meghna or Brahmaputra).
                  This massive river, more than 10km wide at its widest point,
                  provides an incredible experience for river enthusiasts.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full relative">
              <img
                src="/src/assets/homebanner4.jpg"
                className="slider-image  h-[320px] md:h-[400px] lg:h-[600px]"
                alt=""
              />
              <div className="absolute text-center lg:top-52 w-full px-5 top-[20%] md:top-[30%] lg:px-44 text-white space-y-4 hidden md:block">
                <h1 className="lg:text-6xl font-bold text-2xl">
                  Sip Tea in Srimangal’s Rolling Hills
                </h1>
                <p className="lg:text-lg">
                  Nestled in the northeast, Srimangal’s rolling hills are home
                  to several tea estates. Here, you can taste the famous
                  seven-layer tea while surrounded by lush greenery. Srimangal’s
                  bucolic charm invites travelers to explore its serene
                  landscapes and savor the bold and aromatic regional tea.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
