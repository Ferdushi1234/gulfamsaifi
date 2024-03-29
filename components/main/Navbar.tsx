import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="#about-me"
          className=" h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/boy.png"
            alt="logo"
            width={90}
            height={90}
            className="cursor-pointer hover:animate-slowspin "
          />

          <span  className=" font-bold  text-gray-300">
            GSCoder
          </span>
        </Link>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="gap-6 flex  items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="#about-me" className=" cursor-pointer">
              About 
            </Link>
            <Link href="#skills" className="cursor-pointer">
              Skills
            </Link>
            <Link href="#projects" className="cursor-pointer">
              Projects
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          
            <Link href={'https://www.linkedin.com/in/gulfam-saifi-b86a29166/'}>
              <Image
              src='/linkedin.svg'
              alt="social"
              width={24}
              height={24}
              />
            </Link>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
