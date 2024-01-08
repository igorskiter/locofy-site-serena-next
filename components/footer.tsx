import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";

type FooterType = {
  lINE?: string;
  vector?: string;
  group?: string;
  buttonsSocial?: string;
  iconLogin?: string;

  /** Style props */
  footerZIndex?: CSSProperties["zIndex"];
};

const Footer: NextPage<FooterType> = memo(
  ({ lINE, vector, group, buttonsSocial, iconLogin, footerZIndex }) => {
    const footerStyle: CSSProperties = useMemo(() => {
      return {
        zIndex: footerZIndex,
      };
    }, [footerZIndex]);

    return (
      <section
        className="self-stretch h-[30.31rem] flex flex-col items-center justify-center py-[0rem] px-[6rem] box-border z-[6] text-left text-[1.25rem] text-grey-prime font-plus-jakarta-sans md:h-auto md:pl-[1.88rem] md:pr-[1.88rem] md:box-border sm:self-stretch sm:w-auto sm:h-auto sm:pl-[1rem] sm:pr-[1rem] sm:box-border"
        id="Footer"
        style={footerStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-center gap-[8rem] md:gap-[3.38rem] md:pl-[0rem] md:box-border sm:self-stretch sm:w-auto sm:gap-[2.81rem]">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={lINE}
          />
          <div className="relative w-[8.31rem] h-[1.04rem] hidden sm:flex">
            <img
              className="absolute h-[34.94%] w-[17.14%] top-[38.55%] right-[0%] bottom-[26.51%] left-[82.86%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/group@2x.png"
            />
            <img
              className="absolute h-full w-[79.02%] top-[0%] right-[20.98%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/vector@2x.png"
            />
          </div>
          <div className="self-stretch h-[2.06rem] hidden flex-row items-center justify-start py-[0rem] px-[5.25rem] box-border gap-[0.63rem] md:flex md:gap-[0rem] sm:hidden sm:self-stretch sm:w-auto sm:pl-[0rem] sm:pr-[0rem] sm:box-border">
            <img
              className="relative w-[13.04rem] h-[2.06rem] object-cover"
              alt="Logo"
              id="Logo"
              src="/Logo1@2x.png"
            />
            <img
              className="relative w-[2.83rem] h-[0.73rem] object-cover"
              alt="LogoCare"
              id="LogoCare"
              src="/LogoCare@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-center pt-[0rem] px-[5.25rem] pb-[1.13rem] gap-[1.25rem] lg:pl-[0rem] lg:pr-[0rem] lg:box-border">
            <div className="self-stretch flex flex-row items-end justify-start md:pl-[0rem] md:pr-[0rem] md:box-border sm:self-stretch sm:w-auto sm:flex-col">
              <div className="h-[18.69rem] shrink-0 flex flex-col items-center justify-start gap-[5.69rem] md:hidden md:items-start md:justify-start md:pl-[0rem] md:pr-[0rem] md:box-border sm:hidden sm:h-auto">
                <div className="w-[16.5rem] h-[2.06rem] flex flex-row items-center justify-end gap-[0.63rem]">
                  <img
                    className="relative w-[13.04rem] h-[2.06rem] object-cover"
                    alt="Logo"
                    id="Logo"
                    src={vector}
                  />
                  <img
                    className="relative w-[2.83rem] h-[0.73rem] object-cover"
                    alt="LogoCare"
                    id="LogoCare"
                    src={group}
                  />
                </div>
                <img
                  className="relative w-[15.66rem] h-[2.16rem] object-cover"
                  alt="ButtonsSocial"
                  id="ButtonsSocial"
                  src={buttonsSocial}
                />
              </div>
              <div className="flex-1 h-[18.06rem] flex flex-col items-start justify-start py-[0rem] pr-[0rem] pl-[11.25rem] box-border lg:pl-[5rem] lg:box-border sm:pl-[0rem] sm:box-border sm:flex-[unset] sm:self-stretch">
                <div className="flex flex-row items-start justify-start gap-[8rem] sm:self-stretch sm:w-auto sm:gap-[0rem] sm:items-start sm:justify-between">
                  <div className="shrink-0 flex flex-col items-start justify-start gap-[3.06rem]">
                    <b className="relative text-[1.5rem] tracking-[0.03em] leading-[130%]">
                      Home
                    </b>
                    <div className="relative tracking-[0.03em] leading-[130%] font-medium">
                      About
                    </div>
                    <div className="relative tracking-[0.03em] leading-[130%] font-medium">
                      For Doctors
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-col items-start justify-start gap-[3.06rem]">
                    <div className="relative tracking-[0.03em] leading-[130%] font-medium">
                      Blog
                    </div>
                    <div className="relative tracking-[0.03em] leading-[130%] font-medium">
                      FAQ
                    </div>
                    <div className="relative tracking-[0.03em] leading-[130%] font-medium">
                      Privacy Policy
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[18.63rem] shrink-0 flex flex-col items-end justify-start gap-[3.75rem] text-[0.88rem] md:pl-[0rem] md:pr-[5rem] md:box-border sm:self-stretch sm:w-auto sm:h-auto sm:gap-[0.75rem] sm:items-center sm:justify-end sm:pr-[0rem] sm:box-border">
                <div className="shrink-0 flex flex-row items-center justify-start gap-[0.94rem] sm:hidden">
                  <b className="relative tracking-[0.03em] leading-[130%]">
                    Login
                  </b>
                  <img
                    className="relative w-[2.5rem] h-[2.5rem] object-cover"
                    alt="IconLogin"
                    id="IconLogin"
                    src={iconLogin}
                  />
                </div>
                <div className="self-stretch rounded-xl bg-grey-prime box-border h-[3.5rem] flex flex-row items-center justify-center py-[1.31rem] px-[4.94rem] text-[1rem] text-white border-[2px] border-solid border-gray-100 sm:flex sm:self-stretch sm:w-auto sm:flex-row sm:gap-[0rem] sm:items-center sm:justify-center sm:pl-[4.94rem] sm:pr-[4.94rem] sm:box-border">
                  <div className="relative tracking-[0.14em] leading-[130%] uppercase font-semibold">
                    CONTAct
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[21.13rem] hidden flex-row flex-wrap items-center justify-start gap-[2.5rem] md:flex">
              <div className="flex-1 flex flex-col items-center justify-start">
                <img
                  className="relative w-[2rem] h-[2rem] object-cover"
                  alt=""
                  src="/iconinstagram@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <img
                  className="relative w-[2rem] h-[2rem] object-cover"
                  alt=""
                  src="/iconfacebook@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <img
                  className="relative w-[2rem] h-[2rem] object-cover"
                  alt=""
                  src="/iconlinkedin@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <img
                  className="relative w-[2.16rem] h-[2.16rem] object-cover"
                  alt=""
                  src="/iconspotify@2x.png"
                />
              </div>
            </div>
            <div className="relative text-[0.75rem] leading-[130%] text-gray-200">
              © Serena Care 2023 . Todos os direitos reservados
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default Footer;
