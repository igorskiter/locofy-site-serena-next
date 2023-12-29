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
        className="self-stretch h-[28.81rem] flex flex-col items-center justify-center pt-[0rem] px-[0rem] pb-[1.75rem] box-border z-[6] text-left text-[1.25rem] text-grey-prime font-plus-jakarta-sans"
        id="Footer"
        style={footerStyle}
      >
        <div className="flex flex-col items-center justify-center gap-[7.38rem]">
          <img
            className="relative max-h-full w-[108rem] object-cover"
            alt=""
            src={lINE}
          />
          <div className="shrink-0 flex flex-col items-center justify-center">
            <div className="w-[97.44rem] shrink-0 flex flex-row items-end justify-start">
              <div className="h-[18.69rem] shrink-0 flex flex-col items-center justify-start gap-[5.69rem]">
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
              <div className="flex-1 h-[18.06rem] flex flex-col items-start justify-start py-[0rem] pr-[0rem] pl-[11.25rem] box-border">
                <div className="flex flex-row items-start justify-start gap-[8rem]">
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
              <div className="h-[18.63rem] shrink-0 flex flex-col items-end justify-start gap-[3.75rem] text-[0.88rem]">
                <div className="shrink-0 flex flex-row items-center justify-start gap-[0.94rem]">
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
                <div className="rounded-xl bg-grey-prime box-border w-[16rem] h-[3.5rem] flex flex-col items-center justify-center py-[1.31rem] px-[4.94rem] text-[1rem] text-white border-[2px] border-solid border-gray-100">
                  <div className="relative tracking-[0.14em] leading-[130%] uppercase font-semibold">
                    CONTAct
                  </div>
                </div>
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
