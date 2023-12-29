import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <div className="relative w-full h-[105.69rem] overflow-hidden flex flex-col items-start justify-start bg-[url('/contact@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[1rem] text-grey-prime font-plus-jakarta-sans">
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
            src="/logo1@2x.png"
          />
        </div>
        <div className="flex-1 h-[2.5rem] flex flex-row items-center justify-end gap-[0.63rem]">
          <img
            className="relative w-[2rem] h-[2rem] object-cover hidden"
            alt=""
            src="/vector1@2x.png"
          />
          <div className="flex flex-row items-center justify-start gap-[0.94rem]">
            <b className="relative tracking-[0.03em] leading-[130%]">Login</b>
            <img
              className="relative w-[2.5rem] h-[2.5rem] object-cover"
              alt="IconLogin"
              id="IconLogin"
              src="/IconLogin5@2x.png"
            />
          </div>
        </div>
      </header>
      <div className="my-0 mx-[!important] absolute top-[9.31rem] left-[0.06rem] h-[63.44rem] overflow-hidden shrink-0 hidden flex-col items-start justify-end bg-[url('/sidemenu@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[120rem] z-[1]">
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
      <div className="self-stretch flex-1 flex flex-col items-center justify-start pt-[4rem] px-[0rem] pb-[0rem] z-[2] text-[6rem] font-lora">
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
      <section
        className="self-stretch h-[28.81rem] flex flex-col items-center justify-center pt-[0rem] px-[0rem] pb-[1.75rem] box-border z-[3] text-left text-[1.25rem] text-grey-prime font-plus-jakarta-sans"
        id="Footer"
      >
        <div className="flex flex-col items-center justify-center gap-[7.38rem]">
          <img
            className="relative max-h-full w-[108rem] object-cover"
            alt=""
            src="/line1@2x.png"
          />
          <div className="shrink-0 flex flex-col items-center justify-center">
            <div className="w-[97.44rem] shrink-0 flex flex-row items-end justify-start">
              <div className="h-[18.69rem] shrink-0 flex flex-col items-center justify-start gap-[5.69rem]">
                <div className="w-[16.5rem] h-[2.06rem] flex flex-row items-center justify-end gap-[0.63rem]">
                  <img
                    className="relative w-[13.04rem] h-[2.06rem] object-cover"
                    alt="Logo"
                    id="Logo"
                    src="/Logo6@2x.png"
                  />
                  <img
                    className="relative w-[2.83rem] h-[0.73rem] object-cover"
                    alt="LogoCare"
                    id="LogoCare"
                    src="/LogoCare3@2x.png"
                  />
                </div>
                <img
                  className="relative w-[15.66rem] h-[2.16rem] object-cover"
                  alt="ButtonsSocial"
                  id="ButtonsSocial"
                  src="/ButtonsSocial3@2x.png"
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
                    src="/IconLogin61@2x.png"
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
    </div>
  );
};

export default Contact;
