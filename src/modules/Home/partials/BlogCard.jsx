import React from "react";

const BlogCard = ({ image, name, date, expire, comment }) => {
  return (
    <div className=" rounded-[10px]  w-[470px] h-[600px] flex justify-center items-center relative">
      {/* <div className=" w-[430px] h-[560px] flex flex-col justify-end relative"> */}
      <div className="w-[420px] h-[565px]">
        <img src={image} alt={name} className="w-full h-full" />
      </div>
      <div className="absolute bg-[linear-gradient(0deg,#161616_69.35%,rgba(22,22,22,0)_134.95%)] w-[420px] bottom-[18px] rounded-[20px] rounded-bl-[6px] rounded-br-[2px] p-5">
        <div className="flex items-center mb-[10px] gap-3">
          <h4 className="font-secondary font-medium text-[#BBBBBB] text-[13px] leading-[19px] ">
            {date}
          </h4>
          <h2 className=""> • </h2>

          <h4 className="font-secondary font-medium text-[#BBBBBB] text-[13px] leading-[19px]  ">
            {expire}
          </h4>
          <h2 className=""> • </h2>

          <h4 className="font-secondary font-medium text-[#BBBBBB] text-[13px] leading-[19px]  ">
            {comment}
          </h4>
        </div>
        <h1 className="font-primary font-semibold text-[21px] leading-[29px] mb-1 text-white">
          {name}
        </h1>
      </div>
      {/* </div> */}
    </div>
  );
};

export default BlogCard;
