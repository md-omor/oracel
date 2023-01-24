import React from "react";
import IntroInfo from "../partials/IntroInfo";

const Intro = () => {
  return (
    <div className="pt-[110px]">
      <h1 className="font-primary font-semibold text-[200px] leading-[90%] introHeader mb-10 uppercase text-center overflow-hidden text-clip whitespace-nowrap	">
        Create & sell your NFTs
      </h1>
      <div className="container mx-auto mb-5">
        <IntroInfo />
      </div>
      <div className="mt-[130px] introBg w-full h-[1000px] overflow-hidden">
        <div className="container mx-auto pt-[110px] mb-5">
          <h1 className="font-primary font-semibold text-[38px] leading-[48px] mb-[30px] text-white">
            Meet Oracle NFTs ⚡
          </h1>
          <div className="relative">
            <div className="w-full h-[600px]">
              <img
                src="/images/introLinear.svg"
                alt="video"
                className="w-full h-full"
              />
            </div>
            <div className="w-[110px] h-[110px]">
              <img
                src="/images/play.svg"
                alt="play"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
