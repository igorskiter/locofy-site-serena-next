import type { NextPage } from "next";
import Header from "../components/header";
import SideMenu from "../components/side-menu";
import Footer from "../components/footer";

const FAQ: NextPage = () => {
  return (
    <div className="relative bg-gray-100 w-full overflow-hidden flex flex-col items-start justify-start text-left text-[1.5rem] text-grey-prime font-plus-jakarta-sans">
      <Header
        menuBurger="/menuburger@2x.png"
        close1="/close@2x.png"
        logo="/logo@2x.png"
        vector="/vector@2x.png"
        iconLogin="/iconlogin@2x.png"
        headerZIndex="0"
      />
      <section
        className="self-stretch h-[60rem] flex flex-col items-center justify-center py-[0rem] px-[6rem] box-border z-[1] text-left text-[6rem] text-grey-prime font-plus-jakarta-sans"
        id="HeroDoctor"
      >
        <div className="w-[99.13rem] overflow-hidden flex flex-row items-center justify-between">
          <div className="shrink-0 flex flex-col items-start justify-center gap-[5.44rem]">
            <div className="relative tracking-[-0.02em] leading-[100%] inline-block w-[36.75rem] mix-blend-multiply">
              <p className="m-0">
                <span className="font-extralight">{`Discover. `}</span>
                <i className="font-semibold font-lora">Understand</i>
                <i className="font-medium font-lora">.</i>
              </p>
              <p className="m-0 font-extralight">Act.</p>
            </div>
            <div className="relative text-[1.75rem] leading-[130%] inline-block w-[35rem]">
              The health of patients is greatly impacted by their lifestyle
              choices. Through comprehensive data collection, analysis, and
              tracking, we uncover connections revealing the root causes of
              symptoms and anticipating the onset of diseases based on lifestyle
              and behavior.
            </div>
          </div>
          <img
            className="rounded-3xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/right@2x.png"
          />
        </div>
      </section>
      <section
        className="self-stretch h-[73.38rem] flex flex-col items-start justify-center py-[0rem] px-[4.44rem] box-border z-[2] text-left text-[3rem] text-grey-prime font-plus-jakarta-sans"
        id="SectionScreening"
      >
        <div className="self-stretch h-[53.5rem] flex flex-row items-start justify-start gap-[9.75rem]">
          <div className="flex flex-row items-start justify-start">
            <div className="relative w-[46.58rem] h-[52.25rem]">
              <img
                className="absolute top-[0rem] left-[0rem] w-[45.81rem] h-[40.19rem] object-cover"
                alt=""
                src="/img-doctor-2@2x.png"
              />
              <img
                className="absolute top-[24.69rem] left-[24.59rem] rounded-3xl w-[21.99rem] h-[27.56rem] object-cover mix-blend-normal"
                alt=""
                src="/img-doctor-3@2x.png"
              />
            </div>
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
            </div>
          </div>
        </div>
      </section>
      <section
        className="self-stretch h-[57.81rem] flex flex-col items-center justify-start py-[3.56rem] px-[0rem] box-border z-[3] text-left text-[2.25rem] text-grey-prime font-lora"
        id="SectionBenefits"
      >
        <div className="w-full flex flex-col items-start justify-start gap-[8.06rem] max-w-[99rem]">
          <i className="relative tracking-[-0.02em] leading-[120%] font-bold mix-blend-normal">
            Benefits
          </i>
          <div className="flex flex-row items-start justify-start gap-[10.13rem] text-black-text font-plus-jakarta-sans">
            <div className="w-[26.25rem] flex flex-col items-start justify-start gap-[2rem]">
              <img
                className="relative w-[7.63rem] h-[7.63rem] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/iconplans@2x.png"
              />
              <div className="self-stretch relative leading-[120%] font-semibold">
                <p className="m-0">{`Personalized `}</p>
                <p className="m-0">Treatment</p>
                <p className="m-0">Plans</p>
              </div>
              <div className="self-stretch relative text-[1.25rem] leading-[150%]">
                Understanding how lifestyle factors affect health allows you to
                create personalized treatment plans. With Serena Screening, you
                can guide your patients towards healthier choices, helping them
                to treat and prevent chronic conditions before they start.
              </div>
            </div>
            <div className="w-[26.25rem] flex flex-col items-start justify-start gap-[2rem]">
              <img
                className="relative w-[7.63rem] h-[7.63rem] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/iconrelationships@2x.png"
              />
              <div className="self-stretch relative leading-[120%] font-semibold">
                <p className="m-0">{`Strengthen `}</p>
                <p className="m-0">Doctor-Patient Relationships</p>
              </div>
              <div className="self-stretch relative text-[1.25rem] leading-[150%]">
                Serena Screening not only improves health outcomes but also
                strengthens the doctor-patient relationship. By providing a
                comprehensive understanding of each patient's health, you can
                engage in more meaningful and productive conversations,
                fostering trust and collaboration.
              </div>
            </div>
            <div className="w-[26.25rem] flex flex-col items-start justify-start gap-[2rem]">
              <img
                className="relative w-[7.63rem] h-[7.63rem] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/iconproactive@2x.png"
              />
              <div className="self-stretch relative leading-[120%] font-semibold">
                <p className="m-0">{`From `}</p>
                <p className="m-0">Reactive to</p>
                <p className="m-0">Proactive</p>
              </div>
              <div className="self-stretch relative text-[1.25rem] leading-[150%]">
                Serena Screening empowers you to shift from reactive to
                proactive healthcare. By identifying potential health risks
                early, you can intervene before they become serious issues,
                promoting overall wellness and preventive care.
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="self-stretch h-[64.25rem] flex flex-col items-center justify-start z-[4]">
        <div className="w-[108rem] h-[41.75rem] flex flex-row flex-wrap items-start justify-start gap-[1.5rem]">
          <div className="rounded-3xl bg-grey-25 w-[35rem] flex flex-col items-center justify-start gap-[0.63rem]">
            <div className="self-stretch rounded-t-3xl rounded-b-none bg-grey-25 flex flex-col items-start justify-start py-[3rem] px-[2.88rem] gap-[3rem] border-[4px] border-solid border-white-prime">
              <b className="relative tracking-[0.1em] leading-[100%] mix-blend-multiply">
                BASIC
              </b>
              <div className="relative leading-[100%] mix-blend-multiply text-[4.5rem]">
                <b>$29</b>
                <span className="text-[1.25rem]">/mo</span>
              </div>
            </div>
            <div className="w-[34.81rem] flex flex-col items-center justify-center text-[1.25rem] text-black-text">
              <div className="w-[30.69rem] h-[20.69rem] flex flex-col items-center justify-center gap-[1.5rem]">
                <div className="w-[30.69rem] flex flex-row flex-wrap items-start justify-between">
                  <div className="w-[24.56rem] flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[150%]">
                      Serena Screenings / month
                    </div>
                  </div>
                  <div className="w-[3.13rem] flex flex-col items-end justify-start text-right">
                    <div className="self-stretch relative leading-[150%]">
                      20
                    </div>
                  </div>
                  <img
                    className="relative w-[30.69rem] h-[0.13rem] object-contain"
                    alt=""
                    src="/line-1@2x.png"
                  />
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
            </div>
            <div className="rounded-t-none rounded-b-3xl w-[34.94rem] h-[6.31rem] flex flex-col items-center justify-start text-center text-[1.13rem] text-white-prime">
              <div className="relative w-[31rem] h-[3.5rem]">
                <div className="absolute top-[5.56rem] left-[0rem] w-[31rem] hidden flex-col items-center justify-end text-green-prime">
                  <div className="relative rounded-xl bg-white-prime-65 w-[31rem] h-[3.5rem]" />
                  <b className="relative tracking-[0.14em] leading-[130%] uppercase inline-block mt-[-2.12rem]">
                    DISCOVER
                  </b>
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
      <section
        className="self-stretch h-[70.56rem] flex flex-col items-center justify-start z-[5] text-left text-[2.25rem] text-grey-prime font-plus-jakarta-sans"
        id="SectionCircle"
      >
        <div className="w-full flex flex-row items-center justify-start gap-[14.75rem] max-w-[89.81rem]">
          <div className="self-stretch shrink-0 flex flex-col items-start justify-start py-[4.63rem] px-[0rem] gap-[4rem]">
            <div className="w-[30.94rem] flex flex-col items-start justify-start gap-[3rem]">
              <i className="relative tracking-[-0.02em] leading-[120%] font-bold font-lora mix-blend-normal">
                Serena Circle
              </i>
              <div className="relative text-[4.5rem] tracking-[-0.02em] leading-[90%] inline-block w-[35rem] mix-blend-multiply">
                <span className="font-light">{`Join the `}</span>
                <i className="font-semibold font-lora">com munity.</i>
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
      </section>
      <SideMenu
        sideMenuBackgroundImage="url('/sidemenu@3x.png')"
        sideMenuZIndex="6"
        sERFOTOMOCKUPQUESTIONARIO="/ser-foto-mockup--questionario-1@2x.png"
        socialItens="/socialitens@2x.png"
        sideMenuMargin="0 !important"
        sideMenuPosition="absolute"
        sideMenuTop="9.31rem"
        sideMenuLeft="0.06rem"
      />
      <Footer
        lINE="/line@2x.png"
        vector="/Logo11@2x.png"
        group="/LogoCare41@2x.png"
        buttonsSocial="/ButtonsSocial2@2x.png"
        iconLogin="/IconLogin12@2x.png"
        footerZIndex="7"
      />
    </div>
  );
};

export default FAQ;
