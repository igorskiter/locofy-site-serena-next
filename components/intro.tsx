import type { NextPage } from "next";
import { memo } from "react";
import Property1BUTTONPRIMARY from "./property1-b-u-t-t-o-n-p-r-i-m-a-r-y";

const Intro: NextPage = memo(() => {
  return (
    <section className="self-stretch h-[60rem] flex flex-col items-center justify-center py-[0rem] px-[6rem] box-border z-[1] text-center text-[9.68rem] text-whitesmoke-100 font-plus-jakarta-sans">
      <div className="self-stretch h-[60rem] flex flex-col items-center justify-center pt-[7.88rem] px-[0rem] pb-[0rem] box-border gap-[6.44rem] bg-[url('/content1@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="relative leading-[110%] whitespace-pre-wrap inline-block w-[69.81rem] mix-blend-hard-light">
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
        <div className="flex flex-row items-start justify-start gap-[1.5rem]">
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
