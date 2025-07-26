import React from "react";

const TopBanner: React.FC = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center gap-2.5 sm:mb-4 lg:mb-[35px] p-5 lg:px-auto lg:py-2.5 bg-[linear-gradient(to_right,var(--primary),var(--secondary))]">
      <div className="flex-grow-0 text-sm sm:text-base md:text-[22px] font-bold text-center text-white font-figtree">
        🚀{" "}
        <span className="font-extrabold text-secondary px-2 lg:px-0">
          FRESH BEGINNINGS SALE:
        </span>{" "}
        <span className="font-extrabold">
          Extra 25% OFF, Limited Spots
        </span>{" "}
        - start your journey today!
      </div>
    </div>
  );
};

export default TopBanner;