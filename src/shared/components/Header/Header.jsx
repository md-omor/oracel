import React from "react";

const Header = () => {
  return (
    <div className="border-b border-[#424242]">
      <div className="flex  ">
        <div className="border-r border-[#424242] ">
          <img
            src="/images/logo.svg"
            alt="logo"
            className="w-full h-full py-[45px] px-[75px]"
          />
        </div>

        <div className="border-r border-[#424242] flex items-center justify-center px-10">
          <div className="flex flex-col w-full relative">
            <div className="relative">
              <input
                type="text"
                className="block px-5 py-4 text-base bg-[#1B1B1B] rounded-[10px] w-full xl:w-[417px] 2xl:w-[617px] font-secondary font-normal text-[#969696] text-[15px] leading-[20px] outline-none "
                placeholder="Search items, collection or user"
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-5 ">
                <img src="/images/search.svg" alt="search icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end ml-20 gap-6">
          <div class="group inline-block relative">
            <button class=" group-hover:text-[#FCB808] text-[#969696] font-semibold font-primary py-2  rounded inline-flex items-center">
              <span class="mr-1">Home</span>
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul class="absolute hidden text-gray-700 pt-1 group-hover:block">
              <li class="">
                <a
                  class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  One
                </a>
              </li>
              <li class="">
                <a
                  class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Two
                </a>
              </li>
            </ul>
          </div>

          <div class="group inline-block relative">
            <button class=" group-hover:text-[#FCB808] text-[#969696] font-semibold font-primary py-2  rounded inline-flex items-center">
              <span class="mr-1">Explore</span>
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul class="absolute hidden text-gray-700 pt-1 group-hover:block">
              <li class="">
                <a
                  class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  One
                </a>
              </li>
              <li class="">
                <a
                  class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Two
                </a>
              </li>
            </ul>
          </div>

          <div class="group inline-block relative">
            <button class=" group-hover:text-[#FCB808] text-[#969696] font-semibold font-primary py-2  rounded inline-flex items-center">
              <span class="mr-1">Pages</span>
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul class="absolute hidden text-gray-700 pt-1 group-hover:block">
              <li class="">
                <a
                  class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  One
                </a>
              </li>
              <li class="">
                <a
                  class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Two
                </a>
              </li>
            </ul>
          </div>

          <div class="group inline-block relative">
            <button class=" group-hover:text-[#FCB808] text-[#969696] font-semibold font-primary py-2  rounded inline-flex items-center">
              <span class="mr-1">Community</span>
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul class="absolute hidden text-gray-700 pt-1 group-hover:block">
              <li class="">
                <a
                  class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  One
                </a>
              </li>
              <li class="">
                <a
                  class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Two
                </a>
              </li>
            </ul>
          </div>

          <h2 className="font-primary font-semibold text-[15px] leading-[20px] text-[#969696]">
            Contacts
          </h2>

          <button className="bg-[linear-gradient(98.49deg,#fcb808_-11.31%,#f9075e_76.26%)] rounded-[10px] w-[190px] ml-5 font-primary font-medium text-[15px] leading-[20px] py-[15px] px-[35px]">
            Connect wallet
          </button>
          <div className="">
            <img
              src="/images/registration.svg"
              alt="registration"
              className="w-full h-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
