import type { NextPage } from "next";

const Faq: NextPage = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-start justify-start bg-[url('/faq@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[2.25rem] text-darkslategray-200 font-plus-jakarta-sans">
      <header
        className="self-stretch h-[9.38rem] flex flex-row items-center justify-between pt-[3.25rem] px-[6rem] pb-[3.63rem] box-border z-[0] text-left text-[0.88rem] text-grey-prime font-plus-jakarta-sans"
        id="Header"
      >
        <div className="flex-1 h-[1.75rem] flex flex-row items-center justify-start gap-[0.63rem]">
          <img
            className="relative w-[2rem] h-[1.75rem] object-cover"
            id="MenuBurguer"
            alt=""
            src="/menuburger@2x.png"
          />
          <img
            className="relative w-[2rem] h-[2rem] object-cover hidden"
            alt=""
            src="/close@2x.png"
          />
        </div>
        <div className="flex-1 h-[1.83rem] flex flex-col items-center justify-center">
          <img
            className="relative w-[14rem] h-[1.83rem] object-cover"
            alt="Logo"
            id="Logo"
            src="/logo@2x.png"
          />
        </div>
        <div className="flex-1 h-[2.5rem] flex flex-row items-center justify-end gap-[0.63rem]">
          <img
            className="relative w-[2rem] h-[2rem] object-cover hidden"
            alt=""
            src="/vector@2x.png"
          />
          <div className="flex flex-row items-center justify-start gap-[0.94rem]">
            <b className="relative tracking-[0.03em] leading-[130%]">Login</b>
            <img
              className="relative w-[2.5rem] h-[2.5rem] object-cover"
              alt="IconLogin"
              id="IconLogin"
              src="/iconlogin@2x.png"
            />
          </div>
        </div>
      </header>
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
      <section
        className="self-stretch h-[28.81rem] flex flex-col items-center justify-center pt-[0rem] px-[0rem] pb-[1.75rem] box-border z-[4]"
        id="Footer"
      >
        <footer
          className="flex flex-col items-center justify-center gap-[7.38rem] text-left text-[1.25rem] text-grey-prime font-plus-jakarta-sans"
          id="Footer"
        >
          <img
            className="relative max-h-full w-[108rem] object-cover"
            alt=""
            src="/line@2x.png"
          />
          <div className="shrink-0 flex flex-col items-center justify-center">
            <div className="w-[97.44rem] shrink-0 flex flex-row items-end justify-start">
              <div className="h-[18.69rem] shrink-0 flex flex-col items-center justify-start gap-[5.69rem]">
                <div className="w-[16.5rem] h-[2.06rem] flex flex-row items-center justify-end gap-[0.63rem]">
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
                <img
                  className="relative w-[15.66rem] h-[2.16rem] object-cover"
                  alt="ButtonsSocial"
                  id="ButtonsSocial"
                  src="/ButtonsSocial@2x.png"
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
                    src="/IconLogin1@2x.png"
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
        </footer>
      </section>
      <div className="my-0 mx-[!important] absolute top-[9.31rem] left-[0.06rem] h-[63.44rem] overflow-hidden shrink-0 hidden flex-col items-start justify-end bg-[url('/sidemenu@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[120rem] z-[5] text-[1rem] text-grey-prime">
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
    </div>
  );
};

export default Faq;
