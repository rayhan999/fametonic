// import { Button } from "@/components/ui/button"
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";
import { Check, ChevronRight, Menu, MenuIcon } from "lucide-react"
import Image from "next/image"
import { title } from "process";
import { Fragment } from "react";

export default function Home() {
  const heroSectionDetails = {
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
    buttonSubtitle: "1 minute quiz for personalized insights",
    buttonInfo: "By clicking Get Started, you agree with Terms and Conditions, Privacy Policy, Subscription Terms",
    image: "/images/hero_mobile.jpg",
    footer: "Fametonic 2025 @All Rights Reserved"
  }
  return (

    <Fragment>
      <TopBanner />
      <Navbar />
      <HeroSection />
    </Fragment>



  );
}
