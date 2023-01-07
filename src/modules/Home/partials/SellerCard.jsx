import React from "react";

const SellerCard = ({
  serial,
  image,
  verifyTick,
  name,
  balance,
  borderColor,
}) => {
  return (
    <div
      className="sellerCardBorder rounded-[10px] md:w-[260px] w-full flex-wrap  py-5 px-4 flex items-center gap-9 md:gap-4"
      style={{ borderColor: borderColor, borderWidth: 1 }}
    >
      <h6 className="font-secondary font-normal text-[15px] leading-[20px] text-[#969696]">
        {serial}
      </h6>
      <div className="w-[55px] relative">
        <div className="w-[50px] h-[50px] rounded-full">
          <img
            src={image}
            alt="profile mask"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="w-[18px] h-[18px] absolute right-1 -bottom-[2px]">
          <img src={verifyTick} alt="tick mark" className="w-full h-full" />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="font-secondary font-medium text-[15px] leading-[20px] text-white">
          {name}
        </h2>
        <h6 className="font-secondary font-normal text-[13px] leading-[29px] text-[#BBBBBB]">
          {balance}
        </h6>
      </div>
    </div>
  );
};

export default SellerCard;
