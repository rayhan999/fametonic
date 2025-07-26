import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  const heroSectionDetails = {
    title: "Want to Turn Social Media Into a Profitable Career? ",
    subtitle: "Discover your way to success with Fametonic:",
    features: [
      "Start growing your influence right away—no waiting required!",
      "Create viral TikToks and Reels step by step with easy-to-follow lessons",
      "Use a Personal AI Worker to boost your content ",
      "Learn from expert-led courses designed for aspiring influencers",
    ],
    button: "GET STARTED",
    buttonLink: "#",
    buttonSubtitle: "1-minute quiz for personalized Insights",
    buttonInfo: 'By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms',
    image: "/images/hero_mobile.jpg",
    footer: "Fametonic 2025 @All Rights Reserved"
  }
  return (
    <div className="container flex flex-col-reverse lg:flex-row items-center justify-between  max-w-7xl mx-auto">
      <div className='flex-1 w-full lg:max-w-[530]   static z-20 -mt-8 lg:mt-0 lg:ml-[100]'>
        <h1 className='font-extrabold lg:font-bold text-[25px] lg:text-[35px] text-white font-urbanist text-center lg:text-left px-4 lg:px-0'>
          {heroSectionDetails.title}
        </h1>
        <h2 className='font-extrabold lg:font-bold text-[25px] lg:text-[35px] font-urbanist text-[#00E7F9] text-shadow-custom text-center lg:text-left'>
          {heroSectionDetails.subtitle}
        </h2>
        <ul className='pt-[22px] lg:pt-4 flex flex-col gap-[13px] lg:w-[70%]'>
          {heroSectionDetails.features?.map(feat => (
            <li className='flex items-center gap-2.5 px-1 lg:px-0' key={feat}>

              <Image
                src="/images/star.png"
                alt="Star"
                width={22}
                height={22}
                className="mt-1 flex-shrink-0"
              />
              <span className="text-[#ffffff] text-base font-medium lg:font-semibold leading-6 font-figtree">{feat}</span>
            </li>))}
        </ul>
        <div className='pt-[22px] pb-[32px] lg:hidden text-center'>
          <p className='text-muted-foreground font-medium text-xs font-figtree'>
            {heroSectionDetails.buttonInfo}
          </p>
          <p className='pt-[12px] text-[10px] text-muted-foreground font-medium font-figtree'>
            {heroSectionDetails.footer}
          </p>
        </div>
        <div className='flex flex-col lg:w-[313px] text-center'>
          <button className='w-full lg:w-[313px] lg:mt-[30px] h-10 rounded-[8px] bg-[rgba(252,0,78,1)] flex items-center justify-center uppercase button-shadow text-white text-xl font-bold gap-2 font-figtree'>
            {heroSectionDetails.button}
            <ChevronRight width={18} strokeWidth={5} />
          </button>
          <p className='pt-[10px] text-xs font-figtree '>
            {heroSectionDetails.buttonSubtitle}
          </p>
        </div>
        <div className='hidden lg:block pt-[30px]'>
          <p className='text-muted-foreground font-medium font-figtree text-xs'>
            {heroSectionDetails.buttonInfo}
          </p>
          <p className='pt-[12px] text-[10px] text-muted-foreground font-medium font-figtree'>
            {heroSectionDetails.footer}
          </p>
        </div>
      </div>

      <div className='lg:hidden static -z-10 mt-8'>

        <Image
          src="/images/hero_mobile.jpg"
          alt="Mobile App Interface"
          width={389}
          height={426}
          className="rounded-lg p-5"
        />
      </div>

      <div className="flex-1  justify-center items-center relative -ml-[100px] hidden lg:flex">
        <div className="relative " >
          <Image
            src="/images/hero_mobile.jpg"
            alt="Hero image"
            width={666}
            height={679}
            priority
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
