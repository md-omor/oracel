import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto flex justify-between items-center h-[970px]">
      <div className="relative">
        <div className="w-[670px] h-[670px]">
          <img
            src="/images/herobg.svg"
            alt="hero bg"
            className="w-full h-full"
          />
        </div>
        <div className="w-[635px] h-[635px] bg-[#161616] rounded-[10px] flex flex-col items-center top-[16px] left-[17px] absolute p-5">
          <div className="w-[600px] h-[500px]">
            <img
              src="/images/heromask.svg"
              alt="mask"
              className="w-full h-full"
            />
          </div>
          <div className="w-full items-start my-[20px]">
            <h1 className="font-primary font-semibold text-2xl text-white ">
              Alfa Romeo’s C43 (2023)
            </h1>
            <div className="flex items-center justify-between ">
              <div className="flex gap-[10px] items-center">
                <div className="w-[35px] relative">
                  <div className="w-[30px] h-[30px]">
                    <img
                      src="/images/profilemask.svg"
                      alt="profile mask"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-3 h-3 absolute right-1 -bottom-[2px]">
                    <img
                      src="/images/tickmark.svg"
                      alt="tick mark"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <h5 className="font-primary font-medium text-[15px] leading-[20px] text-white">
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
      <div className="">
        <h1 className="font-primary font-semibold text-[55px] leading-[64px] text-white md:w-[660px] mb-5">
          Alfa Romeo 2023, Buy Nft now
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
