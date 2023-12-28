import type { NextPage } from "next";
import { memo } from "react";

const TeamSection: NextPage = memo(() => {
  return (
    <section
      className="self-stretch h-[56.88rem] flex flex-col items-center justify-start z-[5] text-left text-[2.25rem] text-grey-prime font-lora"
      id="SectionOurTeam"
    >
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="h-[37.69rem] flex flex-col items-center justify-between pt-[0rem] px-[0rem] pb-[3.38rem] box-border bg-[url('/box@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="h-[28.08rem] shrink-0 flex flex-col items-center justify-start gap-[3.75rem]">
            <i className="relative tracking-[-0.02em] leading-[120%] font-bold mix-blend-normal">
              Our Team
            </i>
            <div className="relative text-[3rem] tracking-[-0.02em] leading-[150%] font-plus-jakarta-sans text-center inline-block w-[72rem] mix-blend-multiply">
              We're proud of our talented and diverse team at Serena. We're
              scientists, designers, healthcare professionals, bringing diverse
              skills and experiences to the table to create an innovative
              solution that will help transform how we look at healthcare.
            </div>
          </div>
          <div className="rounded-xl bg-darkcyan w-[25.88rem] shrink-0 flex flex-row items-center justify-between py-[1.19rem] px-[6.94rem] box-border text-center text-[1rem] text-white font-plus-jakarta-sans">
            <div className="relative tracking-[0.14em] leading-[130%] uppercase font-semibold flex items-center justify-center w-[10.65rem] h-[1.44rem] shrink-0">
              Jobs at Serena
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default TeamSection;
