import React, { useState } from "react";

import { Burger } from "@mantine/core";
const Header = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  return (
    <div className="border-b block border-[#424242]">
      <div className="flex md:justify-center relative md:p-0 px-6 py-8 ">
        <div className="flex w-full md:w-fit">
          <div className="md:border-r border-[#424242] ">
            <img
              src="/images/logo.svg"
              alt="logo"
              className="w-full h-full md:py-[45px] md:px-[75px]"
            />
          </div>
          <div className="flex justify-center items-center gap-5 md:hidden absolute top-6 right-6">
            <div className="w-[18px] h-[18px] md:hidden">
              <img
                src="/images/magnifying-glass.svg"
                alt="magnifying glass"
                className="w-full h-full"
              />
            </div>

            <div className="block lg:hidden ">
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                title={title}
                color="#fff"
              />
            </div>
          </div>
        </div>

        <div className="text-gray-500 order-2 w-full lg:w-auto lg:order-1 md:hidden">
          <div
            className={
              opened
                ? "menu w-full lg:block flex-grow lg:items-center lg:w-auto lg:px-3 px-6 lg:relative absolute lg:top-0 lg:left-0 top-[80px] -left-[0] z-50 bg-black pb-5 transition duration-[0.4s] ease-in-out"
                : " menu w-full lg:block flex-grow lg:items-center lg:w-auto lg:px-3 px-6 lg:relative absolute lg:top-0 lg:left-0 top-[80px] -left-[110%] transition duration-[0.4s] ease-in-out"
            }
          >
            <ul class="flex font-semibold justify-start items-center lg:flex-row flex-col">
              <li className="text-[#1E1E1E] lg:px-[36px] font-semibold  text-lg active:opacity-100 hover:opacity-100  active lg:p-0 py-2 cursor-pointer">
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
                  <ul class="absolute hidden text-gray-700 pt-1 group-hover:block z-50">
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
              </li>
              <li className="text-[#1E1E1E] lg:px-[36px] font-semibold  text-lg active:opacity-100 hover:opacity-100  active lg:p-0 py-2 cursor-pointer">
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
                  <ul class="absolute hidden text-gray-700 pt-1 group-hover:block z-50">
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
              </li>
              <li className="text-[#1E1E1E] lg:px-[36px] font-semibold  text-lg active:opacity-100 hover:opacity-100  active lg:p-0 py-2 cursor-pointer">
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
                  <ul class="absolute hidden text-gray-700 pt-1 group-hover:block z-50">
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
              </li>
              <li>
                <button className="bg-[linear-gradient(98.49deg,#fcb808_-11.31%,#f9075e_76.26%)] rounded-[10px] w-[190px] ml-5 font-primary font-medium text-[15px] leading-[20px] py-[15px] px-[35px] text-white">
                  Connect wallet
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-r border-[#424242] hidden md:flex items-center justify-center px-10">
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

        <div className="md:flex items-center justify-end hidden ml-20 gap-6">
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
