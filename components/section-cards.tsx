import type { NextPage } from "next";
import { memo } from "react";

const SectionCards: NextPage = memo(() => {
  return (
    <section
      className="self-stretch h-[67.13rem] flex flex-col items-center justify-start z-[5] text-left text-[1rem] text-white-prime font-plus-jakarta-sans md:pl-[1.5rem] md:pr-[1.5rem] md:box-border"
      id="SectionCards"
    >
      <div className="self-stretch flex flex-row items-center justify-center gap-[1.13rem] lg:flex-row lg:gap-[1.13rem] lg:items-center lg:justify-start md:flex-row md:gap-[1.13rem] md:items-center md:justify-start sm:flex-row sm:gap-[1.13rem] sm:items-center sm:justify-center">
        <div className="h-[52.13rem] shrink-0 flex flex-col items-start justify-start">
          <div className="flex-1 w-[35.44rem] flex flex-col items-center justify-end relative gap-[0.63rem]">
            <div className="my-0 mx-[!important] absolute top-[0rem] left-[0rem] flex flex-col items-start justify-start p-[0.5rem] z-[0]">
              <div className="relative rounded-xl bg-grey-25 [backdrop-filter:blur(25px)] box-border w-[34.44rem] h-[51.13rem] opacity-[0.5] mix-blend-multiply border-[2px] border-solid border-grey-prime" />
            </div>
            <img
              className="my-0 mx-[!important] absolute top-[0.63rem] left-[0.63rem] rounded-2xl w-[34.19rem] h-[51rem] object-cover opacity-[0.9] mix-blend-normal z-[1]"
              alt=""
              src="/doctors@2x.png"
            />
            <div className="self-stretch h-[13.38rem] flex flex-col items-start justify-start pt-[0rem] pb-[4.06rem] pr-[0rem] pl-[3.06rem] box-border gap-[2rem] z-[2]">
              <div className="flex flex-col items-start justify-start p-[0.5rem]">
                <b className="relative tracking-[0.1em] leading-[100%] mix-blend-normal">
                  PATIENTS
                </b>
              </div>
              <div className="relative text-[3rem] leading-[110%] inline-block w-[23.88rem] h-[5.56rem] shrink-0">
                <span>{`Take control of `}</span>
                <i className="font-semibold font-lora">your health.</i>
              </div>
            </div>
            <div className="self-stretch h-[17.94rem] hidden flex-row items-center justify-start pt-[0rem] pb-[8.88rem] pr-[0rem] pl-[3.06rem] box-border z-[3] text-[1.5rem] text-white">
              <div className="relative tracking-[0.03em] leading-[150%] inline-block w-[27.25rem] h-[7.88rem] shrink-0">
                Experience Serena Screening, a tool that provides instant
                understanding on how lifestyle factors impact your patients'
                health.
              </div>
            </div>
            <div className="w-[34.56rem] h-[6rem] hidden flex-col items-center justify-start gap-[0.63rem] z-[4] text-center text-[1.13rem] text-green-prime md:hover:hidden">
              <button
                className="cursor-pointer p-0 bg-whitesmoke-200 rounded-xl box-border w-[31.06rem] h-[3.56rem] flex flex-col items-center justify-center border-[1px] border-solid border-grey-prime"
                id="ButtonPrimary"
              >
                <b className="relative text-[1.13rem] tracking-[0.14em] leading-[130%] uppercase font-plus-jakarta-sans text-grey-prime text-center">
                  learn more
                </b>
              </button>
              <div className="w-[31rem] hidden flex-col items-center justify-end">
                <div className="relative rounded-xl bg-white-prime-65 w-[31rem] h-[3.5rem]" />
                <b className="relative tracking-[0.14em] leading-[130%] uppercase inline-block mt-[-2.12rem]">
                  DISCOVER
                </b>
              </div>
              <div className="w-[31rem] hidden flex-col items-center justify-end text-white-prime">
                <div className="relative rounded-xl bg-green-prime shadow-[0px_8px_12px_2px_rgba(11,_62,_60,_0.65)] box-border w-[31.13rem] h-[3.63rem] border-[2px] border-solid border-white-prime" />
                <b className="relative tracking-[0.14em] leading-[130%] uppercase inline-block mt-[-2.12rem]">
                  DISCOVER
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[52.13rem] shrink-0 flex flex-col items-start justify-start">
          <div className="flex-1 w-[35.44rem] flex flex-col items-center justify-end relative gap-[0.63rem]">
            <div className="my-0 mx-[!important] absolute top-[0rem] left-[0rem] flex flex-col items-start justify-start p-[0.5rem] z-[0]">
              <div className="relative rounded-xl bg-grey-25 [backdrop-filter:blur(25px)] box-border w-[34.44rem] h-[51.13rem] opacity-[0.5] mix-blend-multiply border-[2px] border-solid border-grey-prime" />
            </div>
            <div className="my-0 mx-[!important] absolute top-[0.63rem] left-[0.63rem] w-[34.19rem] h-[50.88rem] flex flex-col items-start justify-start z-[1]">
              <img
                className="self-stretch flex-1 relative rounded-2xl max-w-full overflow-hidden max-h-full object-contain"
                alt=""
                src="/imagepatients@2x.png"
              />
            </div>
            <div className="self-stretch h-[13.38rem] flex flex-col items-start justify-start pt-[0rem] pb-[4.06rem] pr-[0rem] pl-[3.06rem] box-border gap-[2rem] z-[2]">
              <div className="flex flex-col items-start justify-start p-[0.5rem]">
                <b className="relative tracking-[0.1em] leading-[100%] mix-blend-normal">
                  PATIENTS
                </b>
              </div>
              <div className="relative text-[3rem] leading-[110%] inline-block w-[23.88rem] h-[5.56rem] shrink-0">
                <span>{`Take control of `}</span>
                <i className="font-semibold font-lora">your health.</i>
              </div>
            </div>
            <div className="self-stretch h-[17.94rem] hidden flex-row items-center justify-start pt-[0rem] pb-[8.88rem] pr-[0rem] pl-[3.06rem] box-border z-[3] text-[1.5rem] text-white">
              <div className="relative tracking-[0.03em] leading-[150%] inline-block w-[27.25rem] h-[7.88rem] shrink-0">
                Experience Serena Screening, a tool that provides instant
                understanding on how lifestyle factors impact your patients'
                health.
              </div>
            </div>
            <div className="w-[34.56rem] h-[6rem] hidden flex-col items-center justify-start gap-[0.63rem] z-[4] text-center text-[1.13rem] text-green-prime">
              <button
                className="cursor-pointer p-0 bg-whitesmoke-200 rounded-xl box-border w-[31.06rem] h-[3.56rem] flex flex-col items-center justify-center border-[1px] border-solid border-grey-prime"
                id="ButtonPrimary"
              >
                <b className="relative text-[1.13rem] tracking-[0.14em] leading-[130%] uppercase font-plus-jakarta-sans text-grey-prime text-center">
                  learn more
                </b>
              </button>
              <div className="w-[31rem] hidden flex-col items-center justify-end">
                <div className="relative rounded-xl bg-white-prime-65 w-[31rem] h-[3.5rem]" />
                <b className="relative tracking-[0.14em] leading-[130%] uppercase inline-block mt-[-2.12rem]">
                  DISCOVER
                </b>
              </div>
              <div className="w-[31rem] hidden flex-col items-center justify-end text-white-prime">
                <div className="relative rounded-xl bg-green-prime shadow-[0px_8px_12px_2px_rgba(11,_62,_60,_0.65)] box-border w-[31.13rem] h-[3.63rem] border-[2px] border-solid border-white-prime" />
                <b className="relative tracking-[0.14em] leading-[130%] uppercase inline-block mt-[-2.12rem]">
                  DISCOVER
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[52.13rem] shrink-0 flex flex-col items-start justify-start">
          <div className="flex-1 w-[35.44rem] flex flex-col items-center justify-end relative gap-[0.63rem]">
            <div className="my-0 mx-[!important] absolute top-[0rem] left-[0rem] flex flex-col items-start justify-start p-[0.5rem] z-[0]">
              <div className="relative rounded-xl bg-grey-25 [backdrop-filter:blur(25px)] box-border w-[34.44rem] h-[51.13rem] opacity-[0.5] mix-blend-multiply border-[2px] border-solid border-grey-prime" />
            </div>
            <img
              className="my-0 mx-[!important] absolute top-[0.63rem] left-[0.63rem] rounded-2xl w-[34.19rem] h-[50.88rem] object-cover z-[1]"
              alt=""
              src="/companies@2x.png"
            />
            <div className="self-stretch h-[13.38rem] flex flex-col items-start justify-start pt-[0rem] pb-[4.06rem] pr-[0rem] pl-[3.06rem] box-border gap-[2rem] z-[2]">
              <div className="flex flex-col items-start justify-start p-[0.5rem]">
                <b className="relative tracking-[0.1em] leading-[100%] mix-blend-normal">
                  COMPANIES
                </b>
              </div>
              <div className="relative text-[3rem] leading-[110%] inline-block w-[23.88rem] h-[5.56rem] shrink-0">
                <p className="m-0">From reactive</p>
                <p className="m-0 font-lora">
                  <i className="font-semibold">to proactive.</i>
                </p>
              </div>
            </div>
            <div className="self-stretch h-[17.94rem] hidden flex-row items-center justify-start pt-[0rem] pb-[8.88rem] pr-[0rem] pl-[3.06rem] box-border z-[3] text-[1.5rem] text-white">
              <div className="relative tracking-[0.03em] leading-[150%] inline-block w-[27.25rem] h-[7.88rem] shrink-0">
                Experience Serena Screening, a tool that provides instant
                understanding on how lifestyle factors impact your patients'
                health.
              </div>
            </div>
            <div className="w-[34.56rem] h-[6rem] hidden flex-col items-center justify-start gap-[0.63rem] z-[4] text-center text-[1.13rem] text-green-prime">
              <button
                className="cursor-pointer p-0 bg-whitesmoke-200 rounded-xl box-border w-[31.06rem] h-[3.56rem] flex flex-col items-center justify-center border-[1px] border-solid border-grey-prime"
                id="ButtonPrimary"
              >
                <b className="relative text-[1.13rem] tracking-[0.14em] leading-[130%] uppercase font-plus-jakarta-sans text-grey-prime text-center">
                  learn more
                </b>
              </button>
              <div className="w-[31rem] hidden flex-col items-center justify-end">
                <div className="relative rounded-xl bg-white-prime-65 w-[31rem] h-[3.5rem]" />
                <b className="relative tracking-[0.14em] leading-[130%] uppercase inline-block mt-[-2.12rem]">
                  DISCOVER
                </b>
              </div>
              <div className="w-[31rem] hidden flex-col items-center justify-end text-white-prime">
                <div className="relative rounded-xl bg-green-prime shadow-[0px_8px_12px_2px_rgba(11,_62,_60,_0.65)] box-border w-[31.13rem] h-[3.63rem] border-[2px] border-solid border-white-prime" />
                <b className="relative tracking-[0.14em] leading-[130%] uppercase inline-block mt-[-2.12rem]">
                  DISCOVER
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default SectionCards;
