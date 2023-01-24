import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-wrap justify-between items-center h-[970px]">
      <div className="relative">
        <div className="md:w-[670px] md:h-[670px] w-[400px] h-[410px]">
          <img
            src="/images/herobg.svg"
            alt="hero bg"
            className="w-full h-full"
          />
        </div>
        <div className="md:w-[635px] md:h-[635px] w-[378px] h-[390px] bg-[#161616] rounded-[10px] flex flex-col items-center top-[16px] left-2 md:left-[17px] absolute p-4 md:p-5">
          <div className="md:w-[600px] md:h-[500px] w-[344px] h-[286px] rounded-full">
            <img
              src="/images/heroimage.svg"
              alt="mask"
              className="w-full h-full"
            />
          </div>
          <div className="w-full items-start md:my-5 mt-4">
            <h1 className="font-primary font-semibold text-base md:text-2xl text-white ">
              Alfa Romeo’s C43 (2023)
            </h1>
            <div className="flex items-center justify-between mt-2">
              <div className="flex gap-[10px] items-center">
                <div className="md:w-[35px] w-5 relative">
                  <div className="md:w-[30px] md:h-[30px] w-4 h-4">
                    <img
                      src="/images/profilemask.svg"
                      alt="profile mask"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="md:w-3 md:h-3 w-[7px] h-[7px] absolute right-1 -bottom-[2px]">
                    <img
                      src="/images/tickmark.svg"
                      alt="tick mark"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <h5 className="font-primary font-medium text-xs md:text-[15px] md:leading-[20px] text-white">
                  @F1nfts
                </h5>
              </div>

              <div className="">
                <img
                  src="/images/dots.svg"
                  alt="dots"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:m-0 md:my-10">
        <h1 className="font-primary font-semibold md:text-[55px] md:leading-[64px]  text-4xl text-white md:w-[660px] mb-5">
          Alfa Romeo 2023, Buy NFT now
        </h1>
        <p className="font-primary font-semibold text-[19px] leading-[28px] text-[#969696] md:w-[660px]">
          Digital marketplace for non-fungible tokens. Buy, sell, and discover
          exclusive digital assets.
        </p>
        <div className="flex gap-5 mt-10">
          <button className="bg-[linear-gradient(98.49deg,#fcb808_-11.31%,#f9075e_76.26%)] rounded-[10px] w-[130px] font-primary font-medium text-[15px] leading-[20px] py-[15px] px-[35px]">
            Explore
          </button>
          <button className="border border-[#424242] rounded-[10px] w-[130px] font-primary font-medium text-[15px] leading-[20px]">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
