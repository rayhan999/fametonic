import React from "react";
import Image from "next/image";
import { AlignJustify } from "lucide-react";

type NavItem = {
  href: string;
  label: string;
};

const Navbar: React.FC = () => {
  const navItems: NavItem[] = [
    { href: '#about', label: 'About us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="w-full h-[46px] sm:h-[74px] flex flex-row sm:justify-between items-start lg:mb-[57px] mx-auto px-5 lg:pl-[215px] lg:pr-[211px] z-50 max-w-[1440px] absolute sm:static my-3 sm:mt-0">
      {/* Logo Section */}
      <div className="pl-[1.6px] pb-[0.7px] flex-1 sm:flex-none flex justify-start items-center">
        <Image
          src="/images/logo.png"
          alt="Fametonic"
          width={169.3}
          height={72.3}
          className="object-contain mx-auto sm:mx-0 w-[105px] h-[45px] sm:w-[169.3px] sm:h-[72.3px]"
          priority
        />
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden sm:flex w-[192px] h-[22px] flex-grow-0 flex-row justify-center items-end gap-10">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="w-[76px] h-[22px] flex-grow-0 font-figtree text-lg font-semibold text-center text-muted"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Hamburger Menu */}
      <div className="flex items-center justify-center sm:hidden h-full">
        <button
          className="p-1 text-white"
          aria-label="Open mobile menu"
        >
          <AlignJustify size={25} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;