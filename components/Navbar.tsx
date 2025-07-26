import React from "react";
import Image from "next/image";
import { AlignJustify, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full h-[46px] sm:h-[74px] flex flex-row sm:justify-between items-start lg:mb-[57px] mx-auto px-5 lg:pl-[215px] lg:pr-[211px] z-50 max-w-[1440] absolute sm:static my-3 sm:mt-0">
      {/* Left side - Logo */}
      <div className="pl-[1.6px] pb-[0.7px] flex-1 sm:flex-none flex justify-start items-center">
        <Image
          src="/images/logo.png"
          alt="Fametonic"
          width={169.3}
          height={72.3}
          className="object-contain mx-auto sm:mx-0 w-[105px] h-[45px] sm:w-[169.3px] sm:h-[72.3px]"
        />
      </div>

      {/* Desktop Navigation Links - Hidden on mobile (below 400px) */}
      <div className="hidden sm:flex w-[192px] h-[22px] flex-grow-0 flex-row justify-center items-end gap-10">
        <a
          href="#about"
          className="w-[76px] h-[22px] flex-grow-0 font-figtree text-lg font-semibold text-center text-[#a9a9a9] hover:text-gray-600 transition-colors"
        >
          About us
        </a>
        <a
          href="#contact"
          className="w-[76px] h-[22px] flex-grow-0 font-figtree text-lg font-semibold text-center text-[#a9a9a9] hover:text-gray-600 transition-colors"
        >
          Contact
        </a>
      </div>

      {/* Mobile Hamburger Menu - Shown only on mobile (below 400px) */}
      <div className="flex items-center  justify-center sm:hidden h-full">
        {/* <div className="h-0.5 w-full bg-white flex-grow-0"></div>
        <div className="h-0.5 w-full bg-white flex-grow-0"></div>
        <div className="h-0.5 w-full bg-white flex-grow-0"></div> */}
        <AlignJustify size={25} />
      </div>
    </div>
  );
};

export default Navbar;
