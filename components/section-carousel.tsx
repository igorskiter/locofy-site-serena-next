import type { NextPage } from "next";
import { memo } from "react";

const SectionCarousel: NextPage = memo(() => {
  return (
    <section
      className="self-stretch h-[82.94rem] flex flex-col items-center justify-center pt-[0rem] px-[0rem] pb-[16.38rem] box-border z-[4] text-left text-[6rem] text-grey-prime font-plus-jakarta-sans"
      id="SectionCarousel"
    >
      <div className="w-full flex flex-row items-center justify-between max-w-[88.25rem] lg:flex-row lg:gap-[7.09rem] lg:items-center lg:justify-between md:flex-col md:gap-[6.25rem] md:items-center md:justify-center sm:flex-col sm:gap-[6.25rem] sm:items-center sm:justify-center">
        <div className="shrink-0 flex flex-row items-center justify-center relative gap-[0.63rem]">
          <div className="absolute my-0 mx-[!important] h-[31.3%] w-[75.14%] top-[24.94%] left-[16.78%] tracking-[-0.02em] leading-[100%] inline-block mix-blend-multiply z-[0]">
            <p className="m-0">
              <span className="font-light">{`Understand. `}</span>
              <i className="font-semibold font-lora">Act.</i>
              <i className="font-bold font-lora">{` `}</i>
            </p>
            <p className="m-0 font-light">Prevent.</p>
          </div>
          <div className="relative w-[46.41rem] h-[51.98rem] z-[1] text-center text-[1.77rem] text-green-prime">
            <div className="absolute top-[9.01rem] left-[0.78rem] [filter:blur(18.85px)] flex flex-col items-start justify-start text-[1.48rem]">
              <div className="[filter:blur(16.03px)] w-[10.75rem] h-[8.19rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0rem] px-[1rem] box-border">
                <img
                  className="relative w-[5.5rem] h-[6.13rem] object-cover"
                  alt="IconStressManagement"
                  id="IconStressManagement"
                  src="/IconStressManagement@2x.png"
                />
              </div>
              <div className="relative leading-[130%] font-medium inline-block w-[10.78rem] h-[4.23rem] shrink-0">
                Manejo do estresse
              </div>
            </div>
            <div className="absolute top-[0rem] left-[18.55rem] [filter:blur(25.51px)] h-[11.69rem] flex flex-col items-center justify-start gap-[0.63rem] text-[1.41rem]">
              <div className="[filter:blur(16.03px)] w-[9.5rem] overflow-hidden flex flex-row items-center justify-center py-[0rem] px-[0.44rem] box-border z-[0]">
                <img
                  className="relative w-[6.08rem] h-[6.31rem] overflow-hidden shrink-0 object-cover"
                  alt="IconSleepQuality"
                  id="IconSleepQuality"
                  src="/IconSleepQuality@2x.png"
                />
              </div>
              <div className="absolute my-0 mx-[!important] h-[34.76%] w-full top-[65.13%] left-[0%] leading-[130%] font-medium inline-block z-[1]">
                Sono de qualidade
              </div>
            </div>
            <div className="absolute top-[28.64rem] left-[0rem] flex flex-col items-center justify-start gap-[1.56rem]">
              <div className="[filter:blur(16.03px)] w-[13.13rem] h-[7.94rem] overflow-hidden shrink-0 flex flex-col items-center justify-start py-[0.13rem] px-[0.06rem] box-border">
                <img
                  className="relative w-[9.32rem] h-[7.68rem] object-cover"
                  alt="IconPhysicalActivities"
                  id="IconPhysicalActivities"
                  src="/IconPhysicalActivities@2x.png"
                />
              </div>
              <div className="relative leading-[130%] font-medium inline-block w-[12.98rem] h-[5.09rem] shrink-0 [filter:blur(16.03px)]">
                Atividades físicas
              </div>
            </div>
            <div className="absolute top-[30.13rem] left-[35.83rem] flex flex-col items-center justify-start gap-[1.19rem]">
              <img
                className="relative w-[10.02rem] h-[6.49rem] overflow-hidden shrink-0 object-cover"
                alt="IconSocial"
                id="IconSocial"
                src="/IconSocial@2x.png"
              />
              <div className="relative leading-[130%] font-medium inline-block w-[10.58rem] h-[4.16rem] shrink-0 [filter:blur(8.01px)]">
                Conexões emocionais
              </div>
            </div>
            <div className="absolute top-[37.35rem] left-[19.74rem] h-[14.63rem] flex flex-col items-center justify-start gap-[0.63rem] text-[3.38rem] font-lora">
              <img
                className="relative w-[9.67rem] h-[11.66rem] overflow-hidden shrink-0 object-cover"
                alt="IconDiet"
                id="IconDiet"
                src="/IconDiet@2x.png"
              />
              <i className="relative leading-[120%] inline-block font-semibold w-[9.75rem] h-[2.38rem] shrink-0">
                Diet
              </i>
            </div>
            <div className="absolute top-[10.86rem] left-[35.48rem] flex flex-col items-center justify-start gap-[1.13rem] text-[1.51rem]">
              <div className="[filter:blur(9.63px)] w-[9.31rem] h-[5.5rem] flex flex-row items-center justify-center">
                <img
                  className="relative w-[4.76rem] h-[4.9rem] object-cover"
                  alt=""
                  src="/iconcontroltoxic@2x.png"
                />
              </div>
              <div className="relative leading-[130%] font-medium inline-block w-[9.47rem] h-[3.72rem] shrink-0 [filter:blur(9.63px)]">
                Controle de tóxicos
              </div>
            </div>
          </div>
        </div>
        <div className="h-[52.28rem] shrink-0 flex flex-col items-center justify-end pt-[0rem] px-[0rem] pb-[7rem] box-border gap-[0.75rem] text-[1.5rem]">
          <div className="relative tracking-[0.01em] leading-[150%] inline-block w-[34.75rem] h-[6.69rem] shrink-0 mix-blend-multiply">
            <p className="m-0">From nutrition and physical activity to sleep</p>
            <p className="m-0">{`patterns and stress management, we delve `}</p>
            <p className="m-0">into various aspects of your daily life.</p>
          </div>
          <div className="relative tracking-[0.01em] leading-[150%] inline-block w-[34.75rem] h-[8.06rem] shrink-0 mix-blend-multiply">
            <p className="m-0">
              With this knowledge, it is possible to identify
            </p>
            <p className="m-0">
              potential risks early, make informed decisions,
            </p>
            <p className="m-0">and transition from reactive healthcare to</p>
            <p className="m-0">proactive, preventive care.</p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default SectionCarousel;
