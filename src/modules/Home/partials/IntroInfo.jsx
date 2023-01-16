import React from "react";

const IntroInfo = () => {
  return (
    <div className="flex justify-between items-center gap-7 flex-wrap">
      <div className="md:m-0 mb-12">
        <div className="w-[50px] h-[50px]">
          <img
            src="/images/wallet.svg"
            alt="wallet"
            className="w-full h-full"
          />
        </div>
        <h1 className="mt-[30px] font-primary font-semibold text-[21px] leading-[29px]">
          Set up your wallet
        </h1>
        <p className="font-secondary font-normal text-[17px] leading-[24px] text-[#969696] mt-[10px] w-[325px]">
          Use your Email or phone number to set up your wallet with Oracle
          Marketplace
        </p>
      </div>

      <div className="md:m-0 mb-12">
        <div className="w-[50px] h-[50px]">
          <img
            src="/images/folder.svg"
            alt="wallet"
            className="w-full h-full"
          />
        </div>
        <h1 className="mt-[30px] font-primary font-semibold text-[21px] leading-[29px]">
          Create your collection
        </h1>
        <p className="font-secondary font-normal text-[17px] leading-[24px] text-[#969696] mt-[10px] w-[325px]">
          Use the marketplace to create and list your F1 fan collection
        </p>
      </div>

      <div className="md:m-0 mb-12">
        <div className="w-[50px] h-[50px]">
          <img src="/images/cloud.svg" alt="wallet" className="w-full h-full" />
        </div>
        <h1 className="mt-[30px] font-primary font-semibold text-[21px] leading-[29px]">
          Add your NFTs
        </h1>
        <p className="font-secondary font-normal text-[17px] leading-[24px] text-[#969696] mt-[10px] w-[325px]">
          Mint and list your Non-Fungible tokens on the Oracle Marketplace.
        </p>
      </div>
      <div className="md:m-0 mb-12">
        <div className="w-[50px] h-[50px]">
          <img src="/images/tags.svg" alt="wallet" className="w-full h-full" />
        </div>
        <h1 className="mt-[30px] font-primary font-semibold text-[21px] leading-[29px]">
          List them for sale
        </h1>
        <p className="font-secondary font-normal text-[17px] leading-[24px] text-[#969696] mt-[10px] w-[325px]">
          List your NFTs for sale in the Oracle Marketplace.
        </p>
      </div>
    </div>
  );
};

export default IntroInfo;
