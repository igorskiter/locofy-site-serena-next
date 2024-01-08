import type { NextPage } from "next";
import { memo } from "react";
import Property1BUTTONPRIMARY from "./property1-b-u-t-t-o-n-p-r-i-m-a-r-y";

const Intro: NextPage = memo(() => {
  return (
    <section className="self-stretch h-[60rem] flex flex-col items-center justify-center py-[0rem] px-[6rem] box-border z-[1] text-center text-[9.68rem] text-whitesmoke-100 font-plus-jakarta-sans md:pl-[1.5rem] md:pr-[1.5rem] md:box-border">
      <div className="self-stretch rounded-3xl h-[60rem] flex flex-col items-center justify-center pt-[7.88rem] px-[0rem] pb-[0rem] box-border gap-[6.44rem] bg-[url('/content@3x.png')] bg-cover bg-no-repeat bg-[top] md:gap-[0rem] md:items-center md:justify-center md:pl-[6.25rem] md:pt-[0rem] md:pr-[6.25rem] md:box-border sm:rounded-2xl">
        <div className="relative leading-[110%] whitespace-pre-wrap inline-block w-[69.81rem] mix-blend-hard-light lg:w-[69.81rem]">
          <p className="m-0">
            <span>
              <span className="tracking-[-0.02em] font-extralight">{`Redefining `}</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="tracking-[-0.02em] font-extralight">
                our relationship
              </span>
              <i className="font-semibold font-lora">{` `}</i>
            </span>
            <i className="text-[10.25rem] font-medium font-lora">with health</i>
          </p>
        </div>
        <div className="flex flex-row items-start justify-start gap-[1.5rem] md:hidden">
          <Property1BUTTONPRIMARY
            doctorSpecialty="FOR doctorS"
            property1BUTTONPRIMARYBoxSizing="border-box"
            property1BUTTONPRIMARYPadding="1.31rem 3.38rem"
            property1BUTTONPRIMARYCursor="pointer"
            property1BUTTONPRIMARYFlexShrink="0"
            cTATEXTFontSize="1.13rem"
            cTATEXTDisplay="inline-block"
          />
          <Property1BUTTONPRIMARY
            doctorSpecialty="FOR COMPANIES"
            property1BUTTONPRIMARYBoxSizing="border-box"
            property1BUTTONPRIMARYPadding="1.31rem 3.38rem"
            property1BUTTONPRIMARYCursor="pointer"
            property1BUTTONPRIMARYFlexShrink="0"
            cTATEXTFontSize="1.13rem"
            cTATEXTDisplay="inline-block"
          />
        </div>
      </div>
    </section>
  );
});

export default Intro;
