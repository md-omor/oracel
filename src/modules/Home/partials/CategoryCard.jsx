import React from "react";

const CategoryCard = ({ image1, image2, image3, name }) => {
  return (
    <div className="border border-slate-600  w-[330px] flex-col rounded-[10px] h-[340px] flex justify-center items-center gap-[10px] categoryBorder">
      <div className="flex justify-between gap-[10px]">
        <div className="">
          <img src={image1} alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col">
          <div className="mb-[10px]">
            <img src={image2} alt="" className="w-full h-full" />
          </div>
          <div className="">
            <img src={image3} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
      <h1 className="font-primary font-semibold text-[21px] leading-[29px] mt-5">
        {name}
      </h1>
    </div>
  );
};

export default CategoryCard;
