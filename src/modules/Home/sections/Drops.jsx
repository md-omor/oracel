import { Swiper, SwiperSlide } from "swiper/react";
import { dropsInfo } from "../config/constants";
import DropsCard from "../partials/DropsCard";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

const Drops = () => {
  return (
    <div className="container mx-auto pt-[110px] relative">
      <h1 className="font-primary font-semibold text-[38px] leading-[48px] mb-[30px] text-white">
        Notable drops
      </h1>
      <div className="flex gap-10 justify-between items-center overflow-auto relative">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1140: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation, Pagination]}
        >
          {dropsInfo?.map((data, index) => (
            <SwiperSlide key={index}>
              <DropsCard {...data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Drops;
