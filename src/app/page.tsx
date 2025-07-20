import React from "react";
import Hero from "@/components/landing-components/Hero";
import {ArrowRightIcon} from "lucide-react";
import Link from "next/link";
import {SparklesText} from "@/components/magicui/sparkles-text";

const Home = () => {
  return <div className="flex pt-[4rem] flex-col items-center">
    <SparklesText className="text-[16px] font-light">
      <Link href={"/"} className="inline-flex items-center inset-shadow-sm gap-1 px-4 py-1 rounded-full">✨ Introducing Todo task <ArrowRightIcon size={16} /></Link>
    </SparklesText>
    <Hero />
  </div>;
};

export default Home;
