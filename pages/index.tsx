import type { NextPage } from "next";
import Header from "../components/header";
import SideMenu from "../components/side-menu";
import Footer from "../components/footer";

const Faq: NextPage = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-start justify-start bg-[url('/faq@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[2.25rem] text-darkslategray-200 font-plus-jakarta-sans">
      <Header
        menuBurger="/menuburger@2x.png"
        close1="/close@2x.png"
        logo="/logo@2x.png"
        vector="/vector@2x.png"
        iconLogin="/iconlogin@2x.png"
        headerZIndex="0"
      />
      <div className="self-stretch h-[20.19rem] flex flex-col items-center justify-start pt-[10.75rem] px-[0rem] pb-[0rem] box-border z-[1]">
        <div className="flex flex-col items-start justify-start gap-[3.75rem]">
          <div className="relative leading-[110%] mix-blend-multiply">
            How can we help you?
          </div>
          <div className="rounded-xl bg-grey-25 w-[71.38rem] shrink-0 flex flex-row items-center justify-start py-[1.25rem] pr-[1.56rem] pl-[1.13rem] box-border gap-[0.63rem] text-[1.25rem] text-low-contrast-gre">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/iconsearch@2x.png"
            />
            <div className="relative leading-[120%] inline-block w-[17.91rem] shrink-0">
              Search for articles
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[66.19rem] flex flex-col items-center justify-start pt-[9.5rem] px-[0rem] pb-[0rem] box-border z-[2]">
        <div className="flex flex-col items-start justify-start gap-[6rem]">
          <div className="relative leading-[110%] mix-blend-multiply">
            Frequently Asked Questions
          </div>
          <div className="w-[72.13rem] shrink-0 flex flex-row flex-wrap items-start justify-start gap-[10.63rem] text-[1.25rem] text-black-text">
            <div className="shrink-0 flex flex-row items-start justify-start gap-[10.63rem]">
              <div className="w-[16.75rem] flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="relative leading-[120%] inline-block w-[10.63rem]">
                  What is Serena Screening?
                </div>
                <div className="self-stretch relative text-[0.88rem] tracking-[0.02em] leading-[150%] inline-block h-[5.38rem] shrink-0">
                  <span>
                    Serena Screening is a digital health platform that provides
                    comprehensive insights into how lifestyle impacts health. It
                    uses...
                  </span>
                  <span className="text-green-link">
                    <b className="font-plus-jakarta-sans">{`[ `}</b>
                    <i className="font-bold">read more</i>
                    <b className="font-plus-jakarta-sans">{` ] `}</b>
                  </span>
                </div>
              </div>
              <div className="w-[16.75rem] flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="relative leading-[120%] inline-block w-[10.69rem]">
                  How does Serena Screening work?
                </div>
                <div className="self-stretch relative text-[0.88rem] tracking-[0.03em] leading-[150%]">
                  <span>
                    It works by collecting and analyzing data related to
                    lifestyle factors such as diet, exercise, sleep, and stress.
                    This data is then...
                  </span>
                  <span className="text-green-link">
                    <b className="font-plus-jakarta-sans">{`[ `}</b>
                    <i className="font-bold">read more</i>
                    <b className="font-plus-jakarta-sans">{` ] `}</b>
                  </span>
                </div>
              </div>
              <div className="w-[16.75rem] flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="relative leading-[120%] inline-block w-[16.75rem]">
                  What scientific evidence supports Serena Screening?
                </div>
                <div className="self-stretch relative text-[0.88rem] tracking-[0.02em] leading-[150%]">
                  <span>
                    Serena Screening is based on the principles of lifestyle
                    medicine, a field of healthcare backed by extensive
                    scientific research...
                  </span>
                  <span className="text-green-link">
                    <b className="font-plus-jakarta-sans">{`[ `}</b>
                    <i className="font-bold">read more</i>
                    <b className="font-plus-jakarta-sans">{` ] `}</b>
                  </span>
                </div>
              </div>
            </div>
            <div className="shrink-0 flex flex-row items-start justify-start gap-[10.63rem]">
              <div className="w-[16.69rem] flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="relative leading-[120%] inline-block w-[16.5rem]">
                  How can Serena Screening help patients?
                </div>
                <div className="self-stretch relative text-[0.88rem] tracking-[0.02em] leading-[150%]">
                  <span>
                    It empowers doctors with actionable insights into their
                    patients' health, allowing them to shift from reactive to
                    proactive healthcare...
                  </span>
                  <span className="text-green-link">
                    <b className="font-plus-jakarta-sans">{`[ `}</b>
                    <i className="font-bold">read more</i>
                    <b className="font-plus-jakarta-sans">{` ] `}</b>
                  </span>
                </div>
              </div>
              <div className="w-[16.75rem] flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="relative leading-[120%] inline-block w-[16.63rem]">
                  How can Serena Screening help companies?
                </div>
                <div className="self-stretch relative text-[0.88rem] tracking-[0.02em] leading-[150%]">
                  <span>
                    Serena Screening can help companies create a healthier work
                    environment by providing insights into the health of their
                    employees...
                  </span>
                  <span className="text-green-link">
                    <b className="font-plus-jakarta-sans">{`[ `}</b>
                    <i className="font-bold">read more</i>
                    <b> ]</b>
                  </span>
                  <b>
                    <span>{` `}</span>
                  </b>
                </div>
              </div>
              <div className="w-[16.75rem] flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="self-stretch relative leading-[120%]">
                  How can this platform assist doctors and practitioners ?
                </div>
                <div className="self-stretch relative text-[0.88rem] tracking-[0.02em] leading-[150%] whitespace-pre-wrap">
                  <span>
                    Our platform can save doctors time by providing them with a
                    comprehensive overview of a patient's health before the
                    visit. This allows...
                  </span>
                  <span className="text-green-link">
                    <b className="font-plus-jakarta-sans">{`[ `}</b>
                    <i className="font-bold">read more</i>
                    <b className="text-black">{` ] `}</b>
                  </span>
                  <b className="text-black">
                    <span>{` `}</span>
                  </b>
                </div>
              </div>
            </div>
            <div className="shrink-0 flex flex-row items-start justify-start gap-[10.63rem]">
              <div className="w-[17.38rem] flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="relative leading-[120%] inline-block w-[10rem]">
                  How is data privacy ensured?
                </div>
                <div className="self-stretch relative text-[0.88rem] tracking-[0.02em] leading-[150%]">
                  <span>
                    We take data privacy very seriously. We comply with all
                    relevant data protection laws and regulations. All data is
                    stored securely, and we do not...
                  </span>
                  <span className="text-green-link">
                    <b className="font-plus-jakarta-sans">{`[ `}</b>
                    <i className="font-bold">read more</i>
                    <b className="font-plus-jakarta-sans">{` ] `}</b>
                  </span>
                </div>
              </div>
              <div className="w-[16.75rem] flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="relative leading-[120%] inline-block w-[13rem]">
                  How accurate is the AI used in the platform?
                </div>
                <div className="self-stretch relative text-[0.88rem] tracking-[0.02em] leading-[150%]">
                  <span>
                    The AI in Serena Screening is highly accurate. It's based on
                    advanced machine learning algorithms that have been trained
                    on large...
                  </span>
                  <span className="text-green-link">
                    <b className="font-plus-jakarta-sans">{`[ `}</b>
                    <i className="font-bold">read more</i>
                    <b className="font-plus-jakarta-sans">{` ] `}</b>
                  </span>
                </div>
              </div>
              <div className="w-[16.75rem] flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="relative leading-[120%] inline-block w-[13rem]">
                  What support is available to users?
                </div>
                <div className="self-stretch relative text-[0.88rem] tracking-[0.02em] leading-[150%]">
                  <span>
                    We offer comprehensive support to all users. If you have any
                    questions or need assistance, you can reach out to our
                    support team...
                  </span>
                  <span className="text-green-link">
                    <b className="font-plus-jakarta-sans">{`[ `}</b>
                    <i className="font-bold">read more</i>
                    <b className="font-plus-jakarta-sans">{` ] `}</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[61.19rem] flex flex-col items-center justify-start pt-[10.06rem] px-[0rem] pb-[0rem] box-border gap-[10rem] z-[3]">
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
                  src="/iconcircleselected@2x.png"
                />
                <img
                  className="relative w-[0.75rem] h-[0.75rem] object-cover"
                  alt=""
                  src="/iconcirclenonselected@2x.png"
                />
                <img
                  className="relative w-[0.75rem] h-[0.75rem] object-cover"
                  alt=""
                  src="/iconcirclenonselected@2x.png"
                />
              </div>
              <div className="shrink-0 flex flex-row items-start justify-start gap-[1.5rem]">
                <img
                  className="relative w-[2.25rem] h-[2.25rem] object-cover"
                  alt=""
                  src="/iconleftarrow@2x.png"
                />
                <img
                  className="relative w-[2.25rem] h-[2.25rem] object-cover"
                  alt=""
                  src="/iconrightarrow@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70.94rem] flex flex-col items-start justify-start gap-[3.75rem]">
          <div className="relative leading-[110%] inline-block w-[37rem] h-[1.68rem] shrink-0 mix-blend-multiply">
            Can’t find what you are looking for?
          </div>
          <div className="h-[3.53rem] flex flex-col items-start justify-start text-[1rem] text-white">
            <div className="relative w-[16.19rem] h-[3.54rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-grey-prime box-border w-[16.19rem] h-[3.54rem] border-[2px] border-solid border-gray-100" />
              <div className="absolute top-[1.31rem] left-[3.25rem] tracking-[0.14em] leading-[130%] uppercase font-semibold flex items-center w-[10.06rem] h-[0.75rem]">
                get in contact
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideMenu
        sideMenuBackgroundImage="unset"
        sideMenuZIndex="4"
        sERFOTOMOCKUPQUESTIONARIO="/ser-foto-mockup--questionario-1@2x.png"
        socialItens="/socialitens@2x.png"
        sideMenuMargin="0 !important"
        sideMenuPosition="absolute"
        sideMenuTop="9.31rem"
        sideMenuLeft="0.06rem"
      />
      <Footer
        lINE="/line@2x.png"
        vector="/Logo1@2x.png"
        group="/LogoCare@2x.png"
        buttonsSocial="/ButtonsSocial@2x.png"
        iconLogin="/IconLogin1@2x.png"
        footerZIndex="5"
      />
    </div>
  );
};

export default Faq;
