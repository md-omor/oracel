import React from "react";

const DropsCard = () => {
  return (
    <div className="border borderColor w-[460px] h-[600px] p-5">
      <div className="cardbg w-[420px] h-[560px] flex flex-col justify-end relative">
        <div className="">
          <img src="/images/cardOverlay.svg" alt="" />
        </div>
        <h1 className="font-primary font-semibold text-[21px] leading-[29px] mb-1 text-white">
          NFT Event Tickets
        </h1>
        <p className="font-secondary font-normal text-[17px] leading-[24px] text-[#BBBBBB]">
          Buy Tickets for F1 events all over the world or in the F1 Metaverse
        </p>
        <div className="bg-[#161616] flex items-center justify-center gap-[10px] w-[150px] rounded-full p-[10px] mt-5">
          <div className="">
            <img src="/images/profilemask.svg" alt="profile mask" />
          </div>
          <h5 className="font-secondary font-normal text-[17px] leading-[24px] text-[#969696]">
            @robix2x2x
          </h5>
        </div>
      </div>
    </div>
  );
};

export default DropsCard;
