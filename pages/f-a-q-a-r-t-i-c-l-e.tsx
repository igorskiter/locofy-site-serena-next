import type { NextPage } from "next";
import Header from "../components/header";
import SideMenu from "../components/side-menu";
import Footer from "../components/footer";

const FAQARTICLE: NextPage = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-end justify-start bg-[url('/faq-article@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[1rem] text-grey-prime font-plus-jakarta-sans">
      <Header
        menuBurger="/menuburger@2x.png"
        close1="/close@2x.png"
        logo="/logo1@2x.png"
        vector="/vector1@2x.png"
        iconLogin="/IconLogin51@2x.png"
        headerZIndex="0"
      />
      <div className="self-stretch h-[44.25rem] flex flex-col items-center justify-start pt-[4.25rem] px-[0rem] pb-[0rem] box-border z-[1]">
        <div className="flex flex-col items-start justify-start gap-[5.38rem]">
          <div className="shrink-0 flex flex-row items-center justify-start gap-[0.94rem]">
            <img
              className="relative w-[0.5rem] h-[1.13rem] object-contain"
              alt=""
              src="/back-button@2x.png"
            />
            <div className="relative tracking-[0.03em] leading-[130%] font-medium">
              Back
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-start justify-start gap-[3rem] text-[2.25rem] text-black-text">
            <b className="relative leading-[130%] mix-blend-multiply">
              What is Serena Screening?
            </b>
            <img
              className="relative max-h-full w-[71.38rem] object-cover"
              alt=""
              src="/vector-3@2x.png"
            />
            <div className="relative text-[1.5rem] tracking-[0.02em] leading-[140%] inline-block w-[71.5rem]">
              <p className="m-0">
                Serena Screening is a digital health platform that provides
                comprehensive insights into how lifestyle impacts health. It
                uses Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[57.44rem] flex flex-col items-center justify-center z-[2] text-[2.25rem] text-darkslategray-200">
        <div className="flex flex-col items-start justify-start gap-[3.75rem]">
          <div className="relative leading-[110%] mix-blend-multiply">
            Other articles
          </div>
          <div className="w-[71.44rem] shrink-0 flex flex-row flex-wrap items-start justify-start gap-[1.56rem] text-[1rem] text-grey-prime">
            <div className="rounded-xl bg-grey-25 shadow-[0px_24px_40px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(50px)] box-border w-[34.94rem] flex flex-col items-start justify-start py-[2.25rem] px-[2.63rem] gap-[3rem] border-[2px] border-solid border-grey-prime">
              <b className="relative tracking-[0.1em] leading-[100%] flex items-center w-[5.75rem] mix-blend-multiply">
                ACCOUNT
              </b>
              <div className="relative text-[3rem] leading-[110%] font-medium inline-block w-[30.19rem] h-[9.56rem] shrink-0">
                <p className="m-0">Lost access to my account.</p>
              </div>
            </div>
            <div className="rounded-xl bg-grey-25 [backdrop-filter:blur(50px)] box-border w-[34.94rem] flex flex-col items-start justify-start py-[2.25rem] px-[2.63rem] gap-[3rem] border-[2px] border-solid border-grey-prime">
              <b className="relative tracking-[0.1em] leading-[100%] mix-blend-multiply">
                ACCOUNT
              </b>
              <div className="relative text-[3rem] leading-[110%] font-medium inline-block w-[30.19rem] h-[9.56rem] shrink-0">
                <p className="m-0">How do I change my account’s e-mail?</p>
              </div>
            </div>
            <div className="w-[71.44rem] shrink-0 flex flex-row items-center justify-between">
              <div className="w-[5.25rem] shrink-0 flex flex-row items-center justify-between">
                <img
                  className="relative w-[0.75rem] h-[0.75rem] object-cover"
                  alt=""
                  src="/iconcircleselected1@2x.png"
                />
                <img
                  className="relative w-[0.75rem] h-[0.75rem] object-cover"
                  alt=""
                  src="/iconcirclenonselected1@2x.png"
                />
                <img
                  className="relative w-[0.75rem] h-[0.75rem] object-cover"
                  alt=""
                  src="/iconcirclenonselected1@2x.png"
                />
              </div>
              <div className="shrink-0 flex flex-row items-start justify-start gap-[1.5rem]">
                <img
                  className="relative w-[2.25rem] h-[2.25rem] object-cover"
                  alt=""
                  src="/iconleftarrow1@2x.png"
                />
                <img
                  className="relative w-[2.25rem] h-[2.25rem] object-cover"
                  alt=""
                  src="/iconrightarrow1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideMenu
        sideMenuBackgroundImage="url('/sidemenu@3x.png')"
        sideMenuZIndex="3"
        sERFOTOMOCKUPQUESTIONARIO="/ser-foto-mockup--questionario-1@2x.png"
        socialItens="/socialitens@2x.png"
        sideMenuMargin="0 !important"
        sideMenuPosition="absolute"
        sideMenuTop="9.31rem"
        sideMenuLeft="0.06rem"
      />
      <Footer
        lINE="/line1@2x.png"
        vector="/Logo61@2x.png"
        group="/LogoCare31@2x.png"
        buttonsSocial="/ButtonsSocial31@2x.png"
        iconLogin="/IconLogin61@2x.png"
        footerZIndex="4"
      />
    </div>
  );
};

export default FAQARTICLE;
