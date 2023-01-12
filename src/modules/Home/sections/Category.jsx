import React from "react";
import { categoryInfo } from "../config/constants";
import CategoryCard from "../partials/CategoryCard";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper";

const Category = () => {
  return (
    <div className="container mx-auto pt-[110px] mb-5">
      <h1 className="font-primary font-semibold text-[38px] leading-[48px] mb-[30px] text-white">
        Browse by category
      </h1>
      <div className="flex flex-wrap justify-between items-center gap-5">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          // navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {categoryInfo?.map((data, index) => (
            <SwiperSlide key={index}>
              <CategoryCard {...data} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
