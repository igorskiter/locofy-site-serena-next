import type { NextPage } from "next";

const Doctors: NextPage = () => {
  return (
    <div className="relative bg-gray-100 w-full overflow-hidden flex flex-col items-start justify-start text-left text-[1rem] text-grey-prime font-plus-jakarta-sans">
      <header
        className="self-stretch h-[9.38rem] flex flex-row items-center justify-between pt-[3.25rem] px-[6rem] pb-[3.63rem] box-border text-left text-[0.88rem] text-grey-prime font-plus-jakarta-sans"
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
      <section
        className="self-stretch h-[60rem] flex flex-col items-center justify-center py-[0rem] px-[6rem] box-border text-left text-[6rem] text-grey-prime font-plus-jakarta-sans"
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
      <div className="h-[63.44rem] overflow-hidden shrink-0 hidden flex-col items-start justify-end bg-[url('/sidemenu@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[120rem]">
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
      <section
        className="self-stretch h-[73.38rem] flex flex-col items-start justify-center py-[0rem] px-[4.44rem] box-border text-left text-[3rem] text-grey-prime font-plus-jakarta-sans"
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
          <div className="h-[53.5rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[5.75rem] box-border">
            <div className="w-[44.13rem] h-[32.69rem] flex flex-col items-start justify-start gap-[6rem]">
              <div className="relative tracking-[0.01em] leading-[140%] inline-block w-[44.13rem]">
                <span>{`With `}</span>
                <i className="font-semibold font-lora">Serena Screening</i>
                <span>{`, you can unlock a comprehensive understanding of your patients health, helping you `}</span>
                <i className="font-semibold font-lora">{`move from reactive treatments to proactive, `}</i>
                <span>preventive care.</span>
              </div>
              <div className="rounded-xl bg-green-link w-[25.88rem] h-[3.5rem] flex flex-row items-center justify-between py-[0rem] px-[1.87rem] box-border text-center text-[1rem]">
                <div className="relative tracking-[0.14em] leading-[130%] uppercase font-semibold flex items-center justify-center w-[22.11rem] shrink-0">
                  Start Your Free Trial
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="self-stretch h-[57.81rem] flex flex-col items-center justify-start py-[3.56rem] px-[0rem] box-border text-left text-[2.25rem] text-grey-prime font-lora"
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
      <div className="self-stretch h-[64.25rem] flex flex-col items-center justify-start text-[1.5rem]">
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
                <div className="w-[30.69rem] flex flex-row flex-wrap items-start justify-between">
                  <div className="w-[24.56rem] flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[150%]">
                      Patient score evolution monitoring
                    </div>
                  </div>
                  <img
                    className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/icon-check@2x.png"
                  />
                  <img
                    className="relative w-[30.69rem] h-[0.13rem] object-contain"
                    alt=""
                    src="/line-1@2x.png"
                  />
                </div>
                <div className="w-[30.69rem] flex flex-row flex-wrap items-start justify-between">
                  <div className="w-[24.56rem] flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[150%]">
                      Access to Serena Circle
                    </div>
                  </div>
                  <img
                    className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/icon-check@2x.png"
                  />
                  <img
                    className="relative w-[30.69rem] h-[0.13rem] object-contain"
                    alt=""
                    src="/line-1@2x.png"
                  />
                </div>
                <div className="w-[30.69rem] flex flex-row flex-wrap items-start justify-between">
                  <div className="w-[24.56rem] flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[150%]">
                      Group mentorship with Dr. Silvia Lagrotta
                    </div>
                  </div>
                  <img
                    className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/x@2x.png"
                  />
                  <img
                    className="relative w-[30.69rem] h-[0.13rem] object-contain"
                    alt=""
                    src="/line-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="w-[34.94rem] h-[6.31rem] flex flex-col items-center justify-start text-center text-[1.13rem] text-green-prime">
              <div className="relative w-[31rem] h-[3.5rem]">
                <div className="absolute top-[5.56rem] left-[0rem] w-[31rem] hidden flex-col items-center justify-end">
                  <div className="relative rounded-xl bg-white-prime-65 w-[31rem] h-[3.5rem]" />
                  <b className="relative tracking-[0.14em] leading-[130%] uppercase inline-block mt-[-2.12rem]">
                    DISCOVER
                  </b>
                </div>
                <div className="absolute top-[5.56rem] left-[0rem] w-[31rem] hidden flex-col items-center justify-end text-white-prime">
                  <div className="relative rounded-xl bg-green-prime shadow-[0px_8px_12px_2px_rgba(11,_62,_60,_0.65)] box-border w-[31.13rem] h-[3.63rem] border-[2px] border-solid border-white-prime" />
                  <b className="relative tracking-[0.14em] leading-[130%] uppercase inline-block mt-[-2.12rem]">
                    DISCOVER
                  </b>
                </div>
                <div className="absolute top-[-0.03rem] left-[-0.03rem] rounded-xl bg-whitesmoke-200 box-border w-[31.06rem] h-[3.56rem] flex flex-col items-center justify-center text-grey-prime border-[1px] border-solid border-grey-prime">
                  <b className="relative tracking-[0.14em] leading-[130%] uppercase">
                    sign up
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-grey-25 w-[35rem] flex flex-col items-center justify-start gap-[0.63rem]">
            <div className="self-stretch rounded-t-3xl rounded-b-none bg-grey-25 flex flex-col items-start justify-start py-[3rem] px-[2.88rem] gap-[3rem] border-[4px] border-solid border-white-prime">
              <b className="relative tracking-[0.1em] leading-[100%] mix-blend-multiply">
                PREMIUM
              </b>
              <div className="relative leading-[100%] mix-blend-multiply text-[4.5rem]">
                <b>$54</b>
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
                <div className="w-[30.69rem] flex flex-row flex-wrap items-start justify-between">
                  <div className="w-[24.56rem] flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[150%]">
                      Patient score evolution monitoring
                    </div>
                  </div>
                  <img
                    className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/icon-check@2x.png"
                  />
                  <img
                    className="relative w-[30.69rem] h-[0.13rem] object-contain"
                    alt=""
                    src="/line-1@2x.png"
                  />
                </div>
                <div className="w-[30.69rem] flex flex-row flex-wrap items-start justify-between">
                  <div className="w-[24.56rem] flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[150%]">
                      Access to Serena Circle
                    </div>
                  </div>
                  <img
                    className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/icon-check@2x.png"
                  />
                  <img
                    className="relative w-[30.69rem] h-[0.13rem] object-contain"
                    alt=""
                    src="/line-1@2x.png"
                  />
                </div>
                <div className="w-[30.69rem] flex flex-row flex-wrap items-start justify-between">
                  <div className="w-[24.56rem] flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[150%]">
                      Group mentorship with Dr. Silvia Lagrotta
                    </div>
                  </div>
                  <div className="w-[3.13rem] flex flex-col items-end justify-start text-right">
                    <div className="self-stretch relative leading-[150%]">
                      8
                    </div>
                  </div>
                  <img
                    className="relative w-[30.69rem] h-[0.13rem] object-contain"
                    alt=""
                    src="/line-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="w-[34.94rem] h-[6.31rem] flex flex-col items-center justify-start text-center text-[1.13rem] text-green-prime">
              <div className="relative w-[31rem] h-[3.5rem]">
                <div className="absolute top-[5.56rem] left-[0rem] w-[31rem] hidden flex-col items-center justify-end">
                  <div className="relative rounded-xl bg-white-prime-65 w-[31rem] h-[3.5rem]" />
                  <b className="relative tracking-[0.14em] leading-[130%] uppercase inline-block mt-[-2.12rem]">
                    DISCOVER
                  </b>
                </div>
                <div className="absolute top-[5.56rem] left-[0rem] w-[31rem] hidden flex-col items-center justify-end text-white-prime">
                  <div className="relative rounded-xl bg-green-prime shadow-[0px_8px_12px_2px_rgba(11,_62,_60,_0.65)] box-border w-[31.13rem] h-[3.63rem] border-[2px] border-solid border-white-prime" />
                  <b className="relative tracking-[0.14em] leading-[130%] uppercase inline-block mt-[-2.12rem]">
                    DISCOVER
                  </b>
                </div>
                <div className="absolute top-[-0.03rem] left-[-0.03rem] rounded-xl bg-whitesmoke-200 box-border w-[31.06rem] h-[3.56rem] flex flex-col items-center justify-center text-grey-prime border-[1px] border-solid border-grey-prime">
                  <b className="relative tracking-[0.14em] leading-[130%] uppercase">
                    sign up
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-grey-25 w-[35rem] flex flex-col items-center justify-start gap-[0.63rem]">
            <div className="self-stretch rounded-t-3xl rounded-b-none bg-darkturquoise flex flex-col items-start justify-start py-[3rem] px-[2.88rem] gap-[3rem] border-[4px] border-solid border-white">
              <b className="relative tracking-[0.1em] leading-[100%] flex items-center w-[7.94rem] mix-blend-multiply">
                VIP
              </b>
              <div className="relative leading-[100%] mix-blend-multiply text-[4.5rem]">
                <b>$84</b>
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
                <div className="w-[30.69rem] flex flex-row flex-wrap items-start justify-between">
                  <div className="w-[24.56rem] flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[150%]">
                      Patient score evolution monitoring
                    </div>
                  </div>
                  <img
                    className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/icon-check@2x.png"
                  />
                  <img
                    className="relative w-[30.69rem] h-[0.13rem] object-contain"
                    alt=""
                    src="/line-1@2x.png"
                  />
                </div>
                <div className="w-[30.69rem] flex flex-row flex-wrap items-start justify-between">
                  <div className="w-[24.56rem] flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[150%]">
                      Access to Serena Circle
                    </div>
                  </div>
                  <img
                    className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/icon-check@2x.png"
                  />
                  <img
                    className="relative w-[30.69rem] h-[0.13rem] object-contain"
                    alt=""
                    src="/line-1@2x.png"
                  />
                </div>
                <div className="w-[30.69rem] flex flex-row flex-wrap items-start justify-between">
                  <div className="w-[24.56rem] flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[150%]">
                      Group mentorship with Dr. Silvia Lagrotta
                    </div>
                  </div>
                  <div className="w-[3.13rem] flex flex-col items-end justify-start text-right">
                    <div className="self-stretch relative leading-[150%]">
                      8
                    </div>
                  </div>
                  <img
                    className="relative w-[30.69rem] h-[0.13rem] object-contain"
                    alt=""
                    src="/line-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="w-[34.94rem] h-[6.31rem] flex flex-col items-center justify-start text-center text-[1.13rem] text-white-prime">
              <div className="relative w-[31rem] h-[3.5rem]">
                <div className="absolute top-[5.56rem] left-[0rem] w-[31rem] hidden flex-col items-center justify-end text-green-prime">
                  <div className="relative rounded-xl bg-white-prime-65 w-[31rem] h-[3.5rem]" />
                  <b className="relative tracking-[0.14em] leading-[130%] uppercase inline-block mt-[-2.12rem]">
                    DISCOVER
                  </b>
                </div>
                <div className="absolute top-[5.56rem] left-[0rem] w-[31rem] hidden flex-col items-center justify-end">
                  <div className="relative rounded-xl bg-green-prime shadow-[0px_8px_12px_2px_rgba(11,_62,_60,_0.65)] box-border w-[31.13rem] h-[3.63rem] border-[2px] border-solid border-white-prime" />
                  <b className="relative tracking-[0.14em] leading-[130%] uppercase inline-block mt-[-2.12rem]">
                    DISCOVER
                  </b>
                </div>
                <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-green-link w-[31rem] h-[3.5rem] flex flex-col items-center justify-center">
                  <b className="relative tracking-[0.14em] leading-[130%] uppercase">
                    sign up
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className="self-stretch h-[70.56rem] flex flex-col items-center justify-start text-left text-[2.25rem] text-grey-prime font-plus-jakarta-sans"
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
              <div className="self-stretch relative text-[1.5rem] tracking-[0.01em] leading-[150%] mix-blend-multiply">
                Connect, collaborate, and share insights with other doctors
                using Serena Care. Together, we can lead the evolution of
                healthcare." Plus, we offer training on lifestyle medicine to
                help you make the most of our platform.
              </div>
            </div>
            <div className="rounded-xl bg-green-link shrink-0 flex flex-row items-start justify-start py-[1.06rem] px-[5.69rem] text-center text-[1rem]">
              <div className="relative tracking-[0.14em] leading-[130%] uppercase font-semibold">
                JOIN THE COMMUNITY
              </div>
            </div>
          </div>
          <div className="rounded-3xl w-[44.13rem] h-[44.13rem] flex flex-col items-end justify-center bg-[url('/right@3x.png')] bg-cover bg-no-repeat bg-[top] mix-blend-multiply">
            <div className="relative w-[32.56rem] h-[21.88rem]">
              <img
                className="relative w-[32.56rem] h-[21.88rem] object-cover"
                alt=""
                src="/subtract@2x.png"
              />
              <div className="absolute top-[10.19rem] left-[5rem] w-[12.71rem] h-[1.5rem] flex flex-row items-center justify-end gap-[0.44rem]">
                <img
                  className="relative w-[9.46rem] h-[1.5rem] object-cover"
                  alt=""
                  src="/vector@2x.png"
                />
                <img
                  className="relative w-[2.79rem] h-[0.53rem] object-cover"
                  alt=""
                  src="/group@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="self-stretch h-[28.81rem] flex flex-col items-center justify-center pt-[0rem] px-[0rem] pb-[1.75rem] box-border"
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
    </div>
  );
};

export default Doctors;
