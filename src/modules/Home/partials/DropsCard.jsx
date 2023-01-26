import React from "react";

const DropsCard = ({ image, name, description, userName }) => {
  return (
    <div className="hover:border hover:border-[#FCB808] cursor-pointer transition-all duration-300 ease-in-out rounded-[20px] w-[470px] h-[600px] flex justify-center items-center relative">
      {/* <div className=" w-[430px] h-[560px] flex flex-col justify-end relative"> */}
      <div className="w-[420px] h-[565px]">
        <img src={image} alt={name} className="w-full h-full" />
      </div>
      <div className="bg-[linear-gradient(98.49deg,#fcb808_-11.31%,#f9075e_76.26%)] w-[60px] font-secondary font-medium text-[15px] leading-[20px] px-4 py-2 rounded-[10px] absolute right-7 top-10">
        Live
      </div>
      <div className="absolute bg-[linear-gradient(0deg,#161616_69.35%,rgba(22,22,22,0)_134.95%)] w-[420px] bottom-4 rounded-[20px] p-5">
        <h1 className="font-primary font-semibold text-[21px] leading-[29px] mb-1 text-white">
          {name}
        </h1>
        <p className="font-secondary font-normal text-[17px] leading-[24px] text-[#BBBBBB]">
          {description}
        </p>

        <div className="bg-[#161616] flex items-center justify-center gap-[10px] w-[150px] rounded-full p-[10px] mt-5">
          <div className="min-w-[30px] min-h-[30px]">
            <img
              src="/images/profilemask.svg"
              alt="profile mask"
              className="w-full h-full"
            />
          </div>
          <h5 className="font-secondary font-normal text-[17px] leading-[24px] text-[#969696]">
            {userName}
          </h5>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default DropsCard;
