import React from "react";

const TopBanner = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center gap-2.5 sm:mb-4 lg:mb-[35px] p-5 lg:px-auto lg:py-2.5 top-background">
      <div className="flex-grow-0 text-sm sm:text-base md:text-[22px] font-bold text-center  text-white font-figtree ">
        🚀{" "}
        <span className="font-extrabold text-[#00e7f9] px-2 md:px-0">
          FRESH BEGINNINGS SALE:
        </span>{" "}
        <span className="font-bold">Extra 25% OFF, Limited Spots</span> - start
        your journey today!
      </div>
    </div>
  );
};

export default TopBanner;
