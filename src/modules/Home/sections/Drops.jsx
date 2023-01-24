import React from "react";
import DropsCard from "../partials/DropsCard";

const Drops = () => {
  return (
    <div className="container mx-auto pt-[110px]">
      <h1 className="font-primary font-semibold text-[38px] leading-[48px] mb-[30px] text-white">
        Notable drops
      </h1>
      <DropsCard />
    </div>
  );
};

export default Drops;
