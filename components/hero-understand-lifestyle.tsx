import type { NextPage } from "next";
import { memo } from "react";

const HeroUnderstandLifestyle: NextPage = memo(() => {
  return (
    <section
      className="self-stretch h-[67.5rem] flex flex-col items-center justify-center py-[0rem] px-[15.94rem] box-border z-[2] text-left text-[4.88rem] text-grey-prime font-lora md:pl-[7.94rem] md:pr-[2.25rem] md:box-border"
      id="HeroUnderstandLifestyle"
    >
      <div className="self-stretch flex flex-row items-start justify-start lg:flex-row lg:gap-[0rem] lg:items-start lg:justify-start md:h-auto md:flex-row md:gap-[0rem] md:items-start md:justify-start sm:flex-col sm:gap-[0rem] sm:items-start sm:justify-start">
        <div className="flex-1 relative tracking-[-0.02em] leading-[130%] inline-block h-[34.44rem] mix-blend-multiply sm:flex-[unset] sm:self-stretch">
          <i className="font-semibold">Understand</i>
          <span className="text-[4.5rem] font-plus-jakarta-sans">
            <span className="font-light font-plus-jakarta-sans">{` and mesure the influence of `}</span>
            <i className="font-semibold font-lora">{`lifestyle factors `}</i>
            <span className="font-light">
              on the onset of disease and chronic conditions.
            </span>
          </span>
        </div>
        <div className="flex-1 relative text-[1.5rem] leading-[140%] font-light font-plus-jakarta-sans flex items-end h-[34.44rem] mix-blend-multiply max-w-[34.69rem] sm:flex-[unset] sm:self-stretch">
          With the Serena Screening high technology we are empowering both
          practitioners and patients with information that will help take
          preventative measures against potential health issues.
        </div>
      </div>
    </section>
  );
});

export default HeroUnderstandLifestyle;
