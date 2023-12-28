import type { NextPage } from "next";
import { memo } from "react";

const SideMenu: NextPage = memo(() => {
  return (
    <div className="my-0 mx-[!important] absolute top-[9.31rem] left-[0.06rem] h-[63.44rem] overflow-hidden shrink-0 hidden flex-col items-start justify-end bg-[url('/sidemenu1@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[120rem] z-[7] text-left text-[1rem] text-grey-prime font-plus-jakarta-sans">
      <div className="self-stretch h-[9.38rem] hidden flex-row items-center justify-between pt-[3.25rem] px-[6rem] pb-[3.63rem] box-border">
        <div className="flex-1 h-[1.75rem] flex flex-row items-center justify-start gap-[0.63rem]">
          <img
            className="relative w-[2rem] h-[1.75rem] object-cover hidden"
            alt=""
            src="/menuburger@2x.png"
          />
          <img
            className="relative w-[2rem] h-[2rem] object-cover"
            alt=""
            src="/close@2x.png"
          />
        </div>
        <div className="flex-1 h-[1.83rem] flex flex-col items-center justify-center">
          <img
            className="relative w-[14rem] h-[1.83rem] object-cover"
            alt=""
            src="/logo@2x.png"
          />
        </div>
        <div className="flex-1 h-[2.5rem] flex flex-row items-center justify-end gap-[0.63rem]">
          <img
            className="relative w-[2rem] h-[2rem] object-cover"
            alt=""
            src="/vector@2x.png"
          />
          <div className="flex flex-row items-center justify-start gap-[0.94rem]">
            <div className="relative tracking-[0.03em] leading-[130%] font-medium opacity-[0.1]">
              Login
            </div>
            <img
              className="relative w-[2.5rem] h-[2.5rem] object-cover"
              alt=""
              src="/iconlogin@2x.png"
            />
          </div>
        </div>
      </div>
      <aside
        className="w-[120rem] h-[58.13rem] flex flex-col items-end justify-end pt-[0rem] pb-[2.88rem] pr-[5.63rem] pl-[0rem] box-border text-left text-[2.5rem] text-grey-prime font-plus-jakarta-sans"
        id="NavMenu"
      >
        <div className="flex flex-col items-end justify-end gap-[17rem]">
          <div className="shrink-0 flex flex-row items-end justify-end">
            <div className="self-stretch shrink-0 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1rem]">
              <div className="h-[24.44rem] shrink-0 flex flex-col items-start justify-start gap-[2.5rem]">
                <i className="relative text-[3.63rem] leading-[130%] font-bold font-lora">
                  Home
                </i>
                <div className="relative tracking-[-0.01em] leading-[130%] font-light">
                  About
                </div>
                <div className="relative leading-[130%] font-light">
                  For Doctors
                </div>
                <div className="relative leading-[130%] font-light">Blog</div>
                <div className="relative leading-[130%] font-light">
                  Contact
                </div>
                <div className="relative leading-[130%] font-light">FAQ</div>
              </div>
            </div>
            <div className="w-[68.06rem] flex flex-col items-center justify-center text-[4rem]">
              <div className="relative w-[40.13rem] h-[30.56rem]">
                <img
                  className="absolute top-[6.38rem] left-[0rem] rounded-2xl w-[19.5rem] h-[24.19rem] object-cover mix-blend-darken"
                  alt=""
                  src="/ser-foto-mockup--questionario-1@2x.png"
                />
                <div className="absolute w-[79.44%] top-[0%] left-[20.56%] leading-[110%] whitespace-pre-wrap inline-block mix-blend-multiply">
                  <p className="m-0 tracking-[-0.02em] font-extralight">{`Redefining `}</p>
                  <p className="m-0">
                    <span className="tracking-[-0.02em] font-extralight">
                      our relationship
                    </span>
                    <i className="font-semibold font-lora"> with health</i>
                  </p>
                </div>
              </div>
            </div>
            <div className="self-stretch shrink-0 flex flex-col items-center justify-end pt-[0rem] px-[0rem] pb-[5.25rem]">
              <img
                className="relative w-[3rem] h-[15.88rem] object-cover"
                alt=""
                src="/socialitens@2x.png"
              />
            </div>
          </div>
          <div className="relative text-[1rem] leading-[130%] font-light">
            Privacy Policy
          </div>
        </div>
      </aside>
    </div>
  );
});

export default SideMenu;
