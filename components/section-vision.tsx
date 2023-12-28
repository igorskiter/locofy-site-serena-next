import type { NextPage } from "next";
import { memo } from "react";

const SectionVision: NextPage = memo(() => {
  return (
    <section
      className="self-stretch flex flex-col items-start justify-center pt-[20rem] px-[7rem] pb-[19.19rem] z-[2] text-left text-[3rem] text-grey-prime font-plus-jakarta-sans"
      id="SectionVision"
    >
      <div className="self-stretch flex flex-row items-start justify-between md:flex-col md:gap-[0rem] md:items-start md:justify-start sm:flex-col sm:gap-[0rem] sm:items-start sm:justify-start">
        <div className="relative w-[44.13rem] h-[50.88rem]">
          <img
            className="absolute top-[0rem] left-[0rem] rounded-3xl w-[35rem] h-[35rem] object-cover"
            alt=""
            src="/imageaboutus1@2x.png"
          />
          <img
            className="absolute top-[25rem] left-[18.25rem] rounded-3xl w-[25.88rem] h-[25.88rem] object-cover"
            alt=""
            src="/imageaboutus2@2x.png"
          />
        </div>
        <div className="w-[50.13rem] h-[50.88rem] flex flex-row items-center justify-start">
          <div className="relative leading-[140%] inline-block w-[40.94rem] shrink-0 mix-blend-multiply">
            <span>{`Our `}</span>
            <i className="font-semibold font-lora">{`vision `}</i>
            <span>{`is to improve people's lives by redefining their `}</span>
            <i className="font-semibold font-lora">relationship with health</i>
            <span>{`. We aim to help foster the culture that will lead to a proactive `}</span>
            <i className="font-semibold font-lora">healthcare system</i>
            <span>.</span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default SectionVision;
