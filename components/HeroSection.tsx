import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface HeroSectionData {
  title: string;
  subtitle: string;
  features: string[];
  button: string;
  buttonLink: string;
  buttonSubtitle: string;
  buttonInfo: string;
  image: string;
  footer: string;
}

const HeroSection: React.FC = () => {
  const heroSectionDetails: HeroSectionData = {
    title: "Want to Turn Social Media Into a Profitable Career?",
    subtitle: "Discover your way to success with Fametonic:",
    features: [
      "Start growing your influence right away—no waiting required!",
      "Create viral TikToks and Reels step by step with easy-to-follow lessons",
      "Use a Personal AI Worker to boost your content",
      "Learn from expert-led courses designed for aspiring influencers",
    ],
    button: "GET STARTED",
    buttonLink: "#",
    buttonSubtitle: "1-minute quiz for personalized Insights",
    buttonInfo: 'By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms',
    image: "/images/hero_mobile.jpg",
    footer: "Fametonic 2025 @All Rights Reserved"
  };

  return (
    <div className="container flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto">
      {/* Content Section */}
      <div className="flex-1 w-full lg:max-w-[530px] static z-20 -mt-8 lg:mt-0 lg:ml-[100px]">
        {/* Main Heading */}
        <h1 className="font-extrabold lg:font-bold text-[25px] lg:text-[35px] text-white font-urbanist text-center lg:text-left px-4 lg:px-0">
          {heroSectionDetails.title}
        </h1>

        {/* Subtitle */}
        <h2 className="font-extrabold lg:font-bold text-[25px] lg:text-[35px] font-urbanist text-secondary text-shadow-lg text-shadow-primary text-center lg:text-left">
          {heroSectionDetails.subtitle}
        </h2>

        {/* Features List */}
        <ul className="pt-[22px] lg:pt-4 flex flex-col gap-[13px] lg:w-[70%]">
          {heroSectionDetails.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2.5 px-1 lg:px-0"
            >
              <Image
                src="/images/star.png"
                alt="Star icon"
                width={22}
                height={22}
                className="mt-1 flex-shrink-0"
              />
              <span className="text-white text-base font-medium lg:font-semibold leading-6 font-figtree">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Mobile Footer */}
        <div className="pt-[22px] pb-[32px] lg:hidden text-center">
          <p className="text-muted font-medium text-xs font-figtree px-2">
            {heroSectionDetails.buttonInfo}
          </p>
          <p className="pt-[12px] text-[10px] text-muted  font-medium font-figtree">
            {heroSectionDetails.footer}
          </p>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex flex-col lg:w-[313px] text-center">
          <button className="w-full lg:w-[313px] lg:mt-[30px] h-10 rounded-[8px] bg-primary flex items-center justify-center uppercase text-white text-xl font-bold gap-1 font-figtree shadow-[2px_2px_10px_0px_var(--secondary)] ">
            {heroSectionDetails.button}
            <ChevronRight width={18} strokeWidth={5} />
          </button>

          <p className="pt-[10px] text-xs font-figtree text-white mb-8 lg:mb-0">
            {heroSectionDetails.buttonSubtitle}
          </p>
        </div>

        {/* Desktop Footer */}
        <div className="hidden lg:block pt-[30px]">
          <p className="text-muted font-medium font-figtree text-xs pr-3">
            {heroSectionDetails.buttonInfo}
          </p>
          <p className="pt-[12px] text-[10px] text-muted font-medium font-figtree">
            {heroSectionDetails.footer}
          </p>
        </div>
      </div>

      {/* Mobile Image */}
      <div className="lg:hidden static -z-10 mt-8">
        <Image
          src={heroSectionDetails.image}
          alt="Mobile App Interface"
          width={389}
          height={426}
          className="rounded-lg p-5"
          priority
        />
      </div>

      {/* Desktop Image */}
      <div className="flex-1 justify-center items-center relative -ml-[100px] hidden lg:flex">
        <div className="relative">
          <Image
            src={heroSectionDetails.image}
            alt="Hero image showcasing mobile app interface"
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