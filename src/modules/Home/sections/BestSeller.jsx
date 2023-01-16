import React from "react";
import { sellerCardInfo } from "../config/constants";
import SellerCard from "../partials/SellerCard";

const BestSeller = () => {
  return (
    <div className="container mx-auto pt-[110px]">
      <div className="flex w-full justify-between">
        <h1 className="font-primary font-semibold text-3xl md:text-[38px] leading-[48px] mb-[30px] text-white">
          Best sellers 💥
        </h1>
        <select
          id="small"
          class="block px-4 py-3 outline-none font-secondary font-normal mb-6 text-base text-[#969696]  rounded-lg bg-[#1B1B1B] focus:ring-blue-500 focus:border-blue-500 "
        >
          <option selected>Default sorting</option>
          <option value="US">Default sorting</option>
          <option value="CA">Default sorting</option>
          <option value="FR">Default sorting</option>
          <option value="DE">Default sorting</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-5">
        {sellerCardInfo?.map((data, index) => (
          <SellerCard {...data} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
