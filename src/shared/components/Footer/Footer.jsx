import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [year, setyear] = useState();

  useEffect(() => {
    const fullYear = new Date().getFullYear();
    setyear(fullYear);
  }, []);

  return (
    <>
      <div className="-z-50 border-t border-[#424242]">
        <div className=" container mx-auto py-[110px]  -z-50">
          <div className="flex flex-wrap justify-between gap-[80px] items-center">
            <div className="w-full md:w-fit">
              <h1 className="font-primary font-semibold text-2xl mb-5">
                Stay in the loop
              </h1>

              <div className="flex flex-col w-full md:mb-[30px] m-0 relative">
                <div className="relative">
                  <input
                    type="email"
                    className="block px-5 py-4 text-base bg-[#1B1B1B] rounded-[10px] w-full md:w-[670px] font-book font-[450] outline-none "
                    placeholder="Email here..."
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-5 ">
                    <img src="/images/arrow-right.svg" alt="arrow-right icon" />
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <h1 className="font-primary font-semibold text-2xl mb-5">
                Join the community
              </h1>

              <div className="flex gap-3 md:gap-[15px]">
                <div className="bg-[#1B1B1B] rounded-[10px] md:w-[50px] md:h-[50px] w-10 h-10 flex items-center justify-center ">
                  <img src="/images/twitter.svg" alt="twitter" />
                </div>

                <div className="bg-[#FCB808] rounded-[10px] md:w-[50px] md:h-[50px] w-10 h-10 flex items-center justify-center ">
                  <img src="/images/facebook.svg" alt="facebook" />
                </div>

                <div className="bg-[#1B1B1B] rounded-[10px] md:w-[50px] md:h-[50px] w-10 h-10 flex items-center justify-center ">
                  <img src="/images/instagram.svg" alt="instagram" />
                </div>

                <div className="bg-[#1B1B1B] rounded-[10px] md:w-[50px] md:h-[50px] w-10 h-10 flex items-center justify-center ">
                  <img src="/images/youtube.svg" alt="youtube" />
                </div>

                <div className="bg-[#1B1B1B] rounded-[10px] md:w-[50px] md:h-[50px] w-10 h-10 flex items-center justify-center ">
                  <img src="/images/talegram.svg" alt="talegram" />
                </div>

                <div className="bg-[#1B1B1B] rounded-[10px] md:w-[50px] md:h-[50px] w-10 h-10 flex items-center justify-center ">
                  <img src="/images/discord.svg" alt="discord" />
                </div>
                <div className="bg-[#1B1B1B] rounded-[10px] md:w-[50px] md:h-[50px] w-10 h-10 flex items-center justify-center ">
                  <img src="/images/Linkedin.svg" alt="Linkedin" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex pt-[75px] flex-wrap justify-between items-start h-full">
            <div>
              <div className="w-[140px] h-[18px]">
                <Link to="/">
                  <img
                    src="/images/logo.svg"
                    alt="logo"
                    className="w-full h-full"
                  />
                </Link>
              </div>
              <p className="font-secondary font-medium text-[17px] leading-[24px] text-[#969696] mt-9 md:w-[500px] w-full">
                Oracle NFT Marketplace gives you the power to sell and collect
                exclusive non-fungible tokens from notable creators.
              </p>
            </div>

            <div className="flex md:gap-[100px] flex-wrap mt-[90px] lg:m-0">
              <div className="flex flex-col mr-[70px]">
                <h2 className="font-semibold font-primary text-[19px] leading-[28px] text-white mb-6">
                  My account
                </h2>

                <span className="font-medium font-secondary text-[15px] leading-[30px] text-white py-2">
                  <Link to="/">Profile</Link>
                </span>
                <span className="font-medium font-secondary text-[15px] leading-[30px] text-white py-2">
                  <Link to="/">My Collections</Link>
                </span>
                <span className="font-medium font-secondary text-[15px] leading-[30px] text-white py-2">
                  <Link to="/">Create item</Link>
                </span>
                <span className="font-medium font-secondary text-[15px] leading-[30px] text-white py-2">
                  <a href="#faq"> Settings</a>
                </span>
              </div>
              <div className="flex flex-col mr-[70px]">
                <h2 className="font-semibold font-primary text-[19px] leading-[28px] text-white mb-6">
                  Resources
                </h2>

                <span className="font-medium font-secondary text-[15px] leading-[30px] text-white py-2">
                  <Link>Help center</Link>
                </span>

                <span className="font-medium font-secondary text-[15px] leading-[30px] text-white py-2">
                  <Link to="/">Partners</Link>
                </span>
                <span className="font-medium font-secondary text-[15px] leading-[30px] text-white py-2">
                  <Link to="/">Activity</Link>
                </span>
                <span className="font-medium font-secondary text-[15px] leading-[30px] text-white py-2">
                  <Link to="/">Rankings</Link>
                </span>
              </div>
              <div className=" flex-col lg:mt-0 xl:mt-0  mt-10 flex">
                <h2 className="font-semibold font-primary text-[19px] leading-[28px] text-white mb-6">
                  Company
                </h2>

                <span className="font-medium font-secondary text-[15px] leading-[30px] text-white py-2">
                  <Link to="/">About </Link>{" "}
                </span>
                <span className="font-medium font-secondary text-[15px] leading-[30px] text-white py-2">
                  <Link to="/">Careers</Link>
                </span>
                <span className="font-medium font-secondary text-[15px] leading-[30px] text-white py-2">
                  <Link to="/">Blog</Link>
                </span>
                <span className="font-medium font-secondary text-[15px] leading-[30px] text-white py-2">
                  <Link to="/">Contact us</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full py-6 border-t border-[#424242]">
          <div className="container mx-auto flex justify-between items-center">
            <h2 className="text-right font-secondary font-normal text-[17px] leading-[24px] text-[#969696]">
              © {year} Oracle | All Rights Reserved
            </h2>
            <p className="text-right font-secondary font-normal text-[17px] leading-[24px] hidden md:flex text-[#969696]">
              Privacy policy | Terms of service
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
