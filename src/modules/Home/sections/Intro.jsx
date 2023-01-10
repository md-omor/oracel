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
    </div>
  );
};

export default Intro;
