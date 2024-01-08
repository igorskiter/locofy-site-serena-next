import type { NextPage } from "next";
import { memo } from "react";

const HeroAboutUs: NextPage = memo(() => {
  return (
    <section className="self-stretch h-[60rem] flex flex-col items-center justify-center py-[0rem] px-[6rem] box-border z-[1] text-center text-[6rem] text-white-prime font-plus-jakarta-sans">
      <div className="w-[108rem] h-[60rem] flex flex-col items-center justify-center bg-[url('/content1@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="relative leading-[100%] inline-block w-[73.13rem]">
          <span className="font-extralight">{`Shifting paradigms towards `}</span>
          <i className="font-medium font-lora">preventive health</i>
        </div>
      </div>
    </section>
  );
});

export default HeroAboutUs;
