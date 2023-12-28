import type { NextPage } from "next";
import { memo } from "react";

const SectionWhy: NextPage = memo(() => {
  return (
    <section
      className="self-stretch h-[76.44rem] flex flex-row items-start justify-center z-[3] text-left text-[2.25rem] text-grey-prime font-plus-jakarta-sans"
      id="SectionWhy"
    >
      <div className="flex-1 flex flex-row items-start justify-center gap-[5.88rem] md:flex-col md:gap-[0rem] md:items-start md:justify-center">
        <div className="self-stretch w-[40.06rem] flex flex-col items-start justify-center gap-[3rem]">
          <i className="relative tracking-[-0.02em] leading-[120%] font-bold font-lora mix-blend-normal">
            Why
          </i>
          <div className="relative text-[4rem] leading-[120%] inline-block w-[33.44rem] mix-blend-multiply">
            <span className="tracking-[-0.02em] font-light">{`Empower doctors and patients with `}</span>
            <i className="font-semibold font-lora">
              <span className="tracking-[-0.01em]">valuable data</span>
              <span className="tracking-[-0.02em]">{` `}</span>
            </i>
            <span className="tracking-[-0.02em]">
              <span className="font-light">{`and `}</span>
            </span>
            <i className="tracking-[-0.01em] font-semibold font-lora">
              information
            </i>
            <span className="tracking-[-0.02em] font-light">.</span>
          </div>
          <div className="relative text-[1.5rem] leading-[150%] inline-block w-[40.06rem] mix-blend-normal">
            Our current healthcare system, established decades ago, has
            primarily operated under a reactive framework, emphasizing the
            treatment of diseases and the management of symptoms. A paradigm
            shift towards preventative health interventions could significantly
            improve outcomes, reduce healthcare costs, and enhance overall
            well-being.
          </div>
        </div>
        <img
          className="relative rounded-3xl w-[44.13rem] h-[55.63rem] object-cover"
          alt=""
          src="/imageabouturwhy@2x.png"
        />
      </div>
    </section>
  );
});

export default SectionWhy;
