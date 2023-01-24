import React from "react";
import { categoryInfo } from "../config/constants";
import CategoryCard from "../partials/CategoryCard";

const Category = () => {
  return (
    <div className="container mx-auto pt-[110px] mb-5">
      <h1 className="font-primary font-semibold text-[38px] leading-[48px] mb-[30px] text-white">
        Browse by category
      </h1>
      <div className="flex flex-wrap justify-between items-center gap-5">
        {categoryInfo?.map((data, index) => (
          <CategoryCard {...data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Category;
