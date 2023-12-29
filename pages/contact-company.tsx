import type { NextPage } from "next";
import Header from "../components/header";
import SideMenu from "../components/side-menu";
import Footer from "../components/footer";

const ContactCompany: NextPage = () => {
  return (
    <div className="relative w-full h-[105.69rem] overflow-hidden flex flex-col items-start justify-start bg-[url('/contact@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[6rem] text-grey-prime font-lora">
      <Header
        menuBurger="/menuburger@2x.png"
        close1="/close@2x.png"
        logo="/logo1@2x.png"
        vector="/vector1@2x.png"
        iconLogin="/IconLogin51@2x.png"
        headerZIndex="0"
      />
      <SideMenu
        sideMenuBackgroundImage="url('/sidemenu@3x.png')"
        sideMenuZIndex="1"
        sERFOTOMOCKUPQUESTIONARIO="/ser-foto-mockup--questionario-1@2x.png"
        socialItens="/socialitens@2x.png"
        sideMenuMargin="0 !important"
        sideMenuPosition="absolute"
        sideMenuTop="9.31rem"
        sideMenuLeft="0.06rem"
      />
      <div className="self-stretch flex-1 flex flex-col items-center justify-start pt-[4rem] px-[0rem] pb-[0rem] z-[2]">
        <div className="flex flex-row items-start justify-start gap-[9.13rem]">
          <div className="h-[48.25rem] shrink-0 flex flex-col items-start justify-start gap-[6rem]">
            <div className="relative tracking-[-0.02em] leading-[100%] inline-block w-[36.75rem] mix-blend-multiply">
              <span className="font-extralight font-plus-jakarta-sans">{`We want to `}</span>
              <i className="font-semibold">hear from you</i>
              <i className="font-medium">.</i>
            </div>
            <div className="relative text-[1.75rem] leading-[150%] font-plus-jakarta-sans text-black-text inline-block w-[32.25rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-start justify-start text-[1.25rem] text-low-contrast-gre font-plus-jakarta-sans">
            <div className="w-[44.13rem] shrink-0 flex flex-row flex-wrap items-start justify-start gap-[1rem]">
              <div className="relative w-[44.12rem] h-[3.94rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-grey-25 w-[21.56rem] flex flex-row items-center justify-start py-[1.5rem] pr-[1.56rem] pl-[1.13rem] box-border">
                  <div className="relative leading-[120%] inline-block w-[17.91rem] shrink-0">
                    Name*
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[22.56rem] rounded-xl bg-grey-25 w-[21.56rem] flex flex-row items-center justify-start py-[1.5rem] pr-[1.56rem] pl-[1.13rem] box-border">
                  <div className="relative leading-[120%] inline-block w-[17.91rem] shrink-0">
                    Surname*
                  </div>
                </div>
              </div>
              <div className="relative w-[44.13rem] h-[3.94rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-grey-25 w-[44.13rem] flex flex-row items-center justify-start py-[1.5rem] pr-[1.56rem] pl-[1.13rem] box-border">
                  <div className="relative leading-[120%] inline-block w-[17.91rem] shrink-0">
                    E-mail*
                  </div>
                </div>
              </div>
              <div className="relative w-[44.13rem] h-[3.94rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-grey-25 w-[44.13rem] flex flex-row items-center justify-start py-[1.5rem] pr-[1.56rem] pl-[1.13rem] box-border">
                  <div className="relative leading-[120%] inline-block w-[17.91rem] shrink-0">
                    Phone number (Optional)
                  </div>
                </div>
              </div>
              <div className="relative w-[44.13rem] h-[3.94rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-grey-25 w-[44.13rem] flex flex-row items-center justify-start py-[1.5rem] pr-[1.56rem] pl-[1.13rem] box-border">
                  <div className="relative leading-[120%] inline-block w-[17.91rem] shrink-0">
                    Company Name*
                  </div>
                </div>
              </div>
              <div className="relative w-[44.13rem] h-[4.5rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-grey-25 w-[44.13rem] flex flex-row items-center justify-start py-[1.5rem] pr-[1.56rem] pl-[1.13rem] box-border gap-[0.63rem]">
                  <img
                    className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/chevrondown@2x.png"
                  />
                  <div className="relative leading-[120%] inline-block w-[17.91rem] shrink-0">
                    Subject*
                  </div>
                </div>
              </div>
              <div className="relative w-[44.13rem] h-[17.44rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-grey-25 w-[44.13rem] flex flex-row items-center justify-start pt-[1.5rem] pb-[15rem] pr-[1.56rem] pl-[1.13rem] box-border">
                  <div className="relative leading-[120%] inline-block w-[17.91rem] shrink-0">
                    Type your message here.*
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-grey-prime box-border h-[3.5rem] flex flex-row items-center justify-center py-[1.38rem] px-[6.38rem] text-[1rem] text-white border-[2px] border-solid border-gray-100">
                <div className="relative tracking-[0.14em] leading-[130%] uppercase font-semibold">
                  Send
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        lINE="/line1@2x.png"
        vector="/Logo61@2x.png"
        group="/LogoCare32@2x.png"
        buttonsSocial="/ButtonsSocial31@2x.png"
        iconLogin="/IconLogin41@2x.png"
        footerZIndex="3"
      />
    </div>
  );
};

export default ContactCompany;
