import React from "react";
import { sellerCardInfo } from "../config/constants";
import SellerCard from "../partials/SellerCard";

const BestSeller = () => {
  return (
    <div className="container mx-auto pt-[110px]">
      <h1 className="font-primary font-semibold text-[38px] leading-[48px] mb-[30px] text-white">
        Best sellers 💥
      </h1>
      <div className="flex flex-wrap gap-5">
        {sellerCardInfo?.map((data, index) => (
          <SellerCard {...data} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
