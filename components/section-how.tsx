import type { NextPage } from "next";
import { memo } from "react";

const SectionHow: NextPage = memo(() => {
  return (
    <section
      className="self-stretch h-[73.13rem] flex flex-col items-center justify-start z-[4] text-left text-[2.25rem] text-grey-prime font-plus-jakarta-sans"
      id="SectionHow"
    >
      <div className="self-stretch flex flex-row items-start justify-center gap-[10.81rem] lg:flex-col md:flex-col md:gap-[10.81rem] md:items-center md:justify-center">
        <img
          className="relative rounded-3xl w-[44.13rem] h-[55.63rem] object-cover"
          alt=""
          src="/imageaboutushow@2x.png"
        />
        <div className="self-stretch shrink-0 flex flex-col items-end justify-center gap-[3rem]">
          <i className="relative tracking-[-0.02em] leading-[120%] font-bold font-lora mix-blend-normal">
            How
          </i>
          <div className="relative text-[4rem] leading-[120%] inline-block w-[33.44rem] mix-blend-multiply">
            <span className="tracking-[-0.02em] font-light">{`We are designing `}</span>
            <i className="tracking-[-0.01em] font-semibold font-lora">better</i>
            <span className="tracking-[-0.02em]">
              <i className="font-medium font-lora">{` `}</i>
              <span className="font-light">healthcare.</span>
            </span>
          </div>
          <div className="relative text-[1.5rem] leading-[150%] inline-block w-[31.94rem] mix-blend-normal">
            We have spent years researching and developing a tool to highlight
            the vital correlation between lifestyle and health. Working with
            scientists, doctors, researchers and universities to solve, what we
            believe, is one of the most important and difficult problems we face
            today.
          </div>
        </div>
      </div>
    </section>
  );
});

export default SectionHow;
