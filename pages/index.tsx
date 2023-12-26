import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-start justify-start bg-[url('/home@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-base text-grey-prime font-plus-jakarta-sans">
      <div className="self-stretch h-[150px] flex flex-row items-center justify-between pt-[52px] px-24 pb-[58px] box-border">
        <div className="flex-1 h-7 flex flex-col items-start justify-center">
          <img
            className="relative w-8 h-7 object-cover"
            alt=""
            src="/menuburger@2x.png"
          />
        </div>
        <div className="flex-1 h-[29.3px] flex flex-col items-center justify-center">
          <img
            className="relative w-56 h-[29.3px] object-cover"
            alt=""
            src="/logo@2x.png"
          />
        </div>
        <div className="flex-1 h-10 flex flex-col items-end justify-center">
          <div className="flex flex-row items-center justify-start gap-[15px]">
            <div className="relative tracking-[0.03em] leading-[130%] font-medium opacity-[0.1]">
              Login
            </div>
            <img
              className="relative w-10 h-10 object-cover"
              alt=""
              src="/iconlogin@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch h-[960px] flex flex-col items-center justify-center text-center text-135xl-9 text-whitesmoke-100">
        <div className="w-[1728px] h-[960px] flex flex-col items-center justify-center pt-[126px] px-0 pb-0 box-border gap-[103px] bg-[url('/content@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="relative leading-[110%] whitespace-pre-wrap inline-block w-[1117px] mix-blend-hard-light">
            <p className="m-0">
              <span>
                <span className="tracking-[-0.02em] font-extralight">{`Redefining `}</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span className="tracking-[-0.02em] font-extralight">
                  our relationship
                </span>
                <i className="font-semibold font-lora">{` `}</i>
              </span>
              <i className="text-[164px] font-medium font-lora">with health</i>
            </p>
          </div>
          <div className="flex flex-row items-start justify-start gap-[24px] text-lg text-white-prime">
            <div className="rounded-xl bg-darkslategray shrink-0 flex flex-row items-center justify-center py-[21px] px-[54px] border-[2px] border-solid border-white-prime">
              <b className="relative tracking-[0.14em] leading-[130%] uppercase">
                FOR doctorS
              </b>
            </div>
            <div className="rounded-xl bg-darkslategray shrink-0 flex flex-row items-center justify-center py-[21px] px-[54px] border-[2px] border-solid border-white-prime">
              <b className="relative tracking-[0.14em] leading-[130%] uppercase">
                FOR COMPANIES
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[1080px] flex flex-col items-center justify-center text-[78px] font-lora">
        <div className="flex flex-row items-start justify-start">
          <div className="relative tracking-[-0.02em] leading-[130%] inline-block w-[875px] h-[551px] shrink-0 mix-blend-multiply">
            <i className="font-semibold">Understand</i>
            <span className="text-[72px] font-plus-jakarta-sans">
              <span className="font-light font-plus-jakarta-sans">{` and mesure the influence of `}</span>
              <i className="font-semibold font-lora">{`lifestyle factors `}</i>
              <span className="font-light">
                on the onset of disease and chronic conditions.
              </span>
            </span>
          </div>
          <div className="relative text-5xl leading-[140%] font-light font-plus-jakarta-sans flex items-end w-[555px] h-[551px] shrink-0 mix-blend-multiply">
            With the Serena Screening high technology we are empowering both
            practitioners and patients with information that will help take
            preventative measures against potential health issues.
          </div>
        </div>
      </div>
      <div className="self-stretch h-[467.5px] flex flex-col items-start justify-start text-[36px] text-salmon-prime">
        <div className="relative w-[1920px] h-[467.5px]">
          <img
            className="absolute h-[80.9%] w-full top-[19.1%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/group@2x.png"
          />
          <div className="absolute h-[4.06%] w-[0.99%] top-[32.83%] right-[35.08%] bottom-[63.1%] left-[63.93%] rounded-[50%] bg-gainsboro box-border border-[3px] border-solid border-salmon-prime" />
          <div className="absolute top-[-1px] left-[1139.9px] rounded-lg bg-grey-25 shadow-[0px_12px_20px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)] box-border w-[194px] h-[125px] flex flex-col items-center justify-end py-[18px] px-0 mix-blend-normal border-[2px] border-solid border-salmon-prime">
            <div className="w-[156px] h-[81px] flex flex-col items-start justify-start gap-[24px]">
              <div className="relative leading-[140%] inline-block w-[116px] mix-blend-normal">
                93%
              </div>
              <div className="relative text-sm leading-[140%] text-grey-prime inline-block w-[156px] mix-blend-multiply">
                of patients with improved quality of life.
              </div>
            </div>
          </div>
          <div className="absolute h-[1.71%] w-[0.42%] top-[34.01%] right-[34.95%] bottom-[64.28%] left-[64.63%] rounded-[50%] bg-salmon-prime [transform:_rotate(180deg)] [transform-origin:0_0]" />
          <div className="absolute h-[2.14%] w-[0.52%] top-[70.8%] right-[56.31%] bottom-[27.06%] left-[43.17%] rounded-[50%] bg-gainsboro box-border border-[2px] border-solid border-darkturquoise" />
          <div className="absolute h-[2.14%] w-[0.52%] top-[54.76%] right-[77.92%] bottom-[43.1%] left-[21.56%] rounded-[50%] bg-gainsboro box-border border-[2px] border-solid border-salmon-prime" />
          <div className="absolute h-[2.14%] w-[0.52%] top-[42.57%] right-[16.41%] bottom-[55.29%] left-[83.07%] rounded-[50%] bg-gainsboro box-border border-[2px] border-solid border-darkturquoise" />
          <div className="absolute h-[2.14%] w-[0.52%] top-[54.97%] right-[24.54%] bottom-[42.89%] left-[74.94%] rounded-[50%] bg-gainsboro box-border border-[2px] border-solid border-salmon-prime" />
          <div className="absolute h-[2.14%] w-[0.52%] top-[44.06%] right-[54.95%] bottom-[53.8%] left-[44.53%] rounded-[50%] bg-gainsboro box-border border-[2px] border-solid border-salmon-prime" />
          <div className="absolute h-[2.14%] w-[0.52%] top-[63.53%] right-[46.93%] bottom-[34.33%] left-[52.55%] rounded-[50%] bg-gainsboro box-border border-[2px] border-solid border-salmon-prime" />
          <div className="absolute h-[2.14%] w-[0.52%] top-[36.15%] right-[86.31%] bottom-[61.71%] left-[13.17%] rounded-[50%] bg-gainsboro box-border border-[2px] border-solid border-salmon-prime" />
          <div className="absolute h-[2.14%] w-[0.52%] top-[75.08%] right-[74.12%] bottom-[22.78%] left-[25.36%] rounded-[50%] bg-gainsboro box-border border-[2px] border-solid border-darkturquoise" />
        </div>
      </div>
      <div className="self-stretch h-[1327px] flex flex-col items-center justify-center pt-0 px-0 pb-[262px] box-border text-[96px]">
        <div className="flex flex-row items-center justify-center gap-[115px]">
          <div className="shrink-0 flex flex-row items-center justify-center relative gap-[10px]">
            <div className="absolute my-0 mx-[!important] h-[31.3%] w-[75.14%] top-[24.94%] left-[16.78%] tracking-[-0.02em] leading-[100%] inline-block mix-blend-multiply z-[0]">
              <p className="m-0">
                <span className="font-light">{`Understand. `}</span>
                <i className="font-semibold font-lora">Act.</i>
                <i className="font-bold font-lora">{` `}</i>
              </p>
              <p className="m-0 font-light">Prevent.</p>
            </div>
            <div className="relative w-[742.6px] h-[831.6px] z-[1] text-center text-9xl-3 text-green-prime">
              <div className="absolute top-[144.2px] left-[12.5px] [filter:blur(18.85px)] flex flex-col items-start justify-start text-[23.6px]">
                <div className="[filter:blur(16.03px)] w-[172px] h-[131px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-4 box-border">
                  <img
                    className="relative w-[88px] h-[98px] object-cover"
                    alt=""
                    src="/iconstressmanagement@2x.png"
                  />
                </div>
                <div className="relative leading-[130%] font-medium inline-block w-[172.5px] h-[67.7px] shrink-0">
                  Manejo do estresse
                </div>
              </div>
              <div className="absolute top-[0px] left-[296.8px] [filter:blur(25.51px)] h-[187px] flex flex-col items-center justify-start gap-[10px] text-[22.5px]">
                <div className="[filter:blur(16.03px)] w-[152px] overflow-hidden flex flex-row items-center justify-center py-0 px-[7px] box-border z-[0]">
                  <img
                    className="relative w-[97.2px] h-[101px] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/iconsleepquality@2x.png"
                  />
                </div>
                <div className="absolute my-0 mx-[!important] h-[34.76%] w-full top-[65.13%] left-[0%] leading-[130%] font-medium inline-block z-[1]">
                  Sono de qualidade
                </div>
              </div>
              <div className="absolute top-[458.2px] left-[0px] flex flex-col items-center justify-start gap-[25px]">
                <div className="[filter:blur(16.03px)] w-[210px] h-[127px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-0.5 px-px box-border">
                  <img
                    className="relative w-[149.2px] h-[122.8px] object-cover"
                    alt=""
                    src="/iconphysicalactivities@2x.png"
                  />
                </div>
                <div className="relative leading-[130%] font-medium inline-block w-[207.6px] h-[81.5px] shrink-0 [filter:blur(16.03px)]">
                  Atividades físicas
                </div>
              </div>
              <div className="absolute top-[482px] left-[573.2px] flex flex-col items-center justify-start gap-[19px]">
                <img
                  className="relative w-[160.3px] h-[103.8px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/blur@2x.png"
                />
                <div className="relative leading-[130%] font-medium inline-block w-[169.3px] h-[66.6px] shrink-0 [filter:blur(8.01px)]">
                  Conexões emocionais
                </div>
              </div>
              <div className="absolute top-[597.6px] left-[315.8px] h-[234px] flex flex-col items-center justify-start gap-[10px] text-[54.1px] font-lora">
                <img
                  className="relative w-[154.7px] h-[186.5px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/blur@2x.png"
                />
                <i className="relative leading-[120%] inline-block font-semibold w-[156px] h-[38px] shrink-0">
                  Diet
                </i>
              </div>
              <div className="absolute top-[173.8px] left-[567.6px] flex flex-col items-center justify-start gap-[18px] text-[24.1px]">
                <div className="[filter:blur(9.63px)] w-[149px] h-[88px] flex flex-row items-center justify-center">
                  <img
                    className="relative w-[76.2px] h-[78.4px] object-cover"
                    alt=""
                    src="/iconcontroltoxic@2x.png"
                  />
                </div>
                <div className="relative leading-[130%] font-medium inline-block w-[151.5px] h-[59.5px] shrink-0 [filter:blur(9.63px)]">
                  Controle de tóxicos
                </div>
              </div>
            </div>
          </div>
          <div className="h-[836.4px] shrink-0 flex flex-col items-center justify-end pt-0 px-0 pb-28 box-border gap-[12px] text-5xl">
            <div className="relative tracking-[0.01em] leading-[150%] inline-block w-[556px] h-[107px] shrink-0 mix-blend-multiply">
              <p className="m-0">
                From nutrition and physical activity to sleep
              </p>
              <p className="m-0">{`patterns and stress management, we delve `}</p>
              <p className="m-0">into various aspects of your daily life.</p>
            </div>
            <div className="relative tracking-[0.01em] leading-[150%] inline-block w-[556px] h-[129px] shrink-0 mix-blend-multiply">
              <p className="m-0">
                With this knowledge, it is possible to identify
              </p>
              <p className="m-0">
                potential risks early, make informed decisions,
              </p>
              <p className="m-0">and transition from reactive healthcare to</p>
              <p className="m-0">proactive, preventive care.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[1074px] flex flex-col items-center justify-start text-white-prime">
        <div className="flex flex-row items-center justify-center gap-[18px]">
          <div className="w-[567px] h-[834px] flex flex-col items-start justify-start">
            <div className="self-stretch flex-1 flex flex-col items-center justify-end relative gap-[10px]">
              <div className="my-0 mx-[!important] absolute top-[0px] left-[0px] w-[567px] h-[834px] flex flex-col items-center justify-center z-[0]">
                <div className="relative rounded-xl bg-grey-25 [backdrop-filter:blur(50px)] box-border w-[551px] h-[818px] opacity-[0.6] mix-blend-multiply border-[2px] border-solid border-grey-prime" />
              </div>
              <img
                className="my-0 mx-[!important] absolute top-[10px] left-[10px] rounded-2xl w-[547px] h-[816px] object-cover opacity-[0.9] mix-blend-normal z-[1]"
                alt=""
                src="/doctors@2x.png"
              />
              <div className="self-stretch h-[352px] flex flex-col items-start justify-end py-0 pr-0 pl-[49px] box-border gap-[31px] z-[2]">
                <div className="flex flex-col items-start justify-start p-2">
                  <b className="relative tracking-[0.1em] leading-[100%] flex items-center w-[92px] h-3.5 shrink-0 mix-blend-normal">
                    DOCTORS
                  </b>
                </div>
                <div className="relative text-29xl leading-[110%] inline-block w-[382px] h-[103.6px] shrink-0">
                  <span>{`Your practice, `}</span>
                  <i className="font-semibold font-lora">upgraded.</i>
                </div>
              </div>
              <div className="self-stretch h-[352px] flex flex-row items-center justify-start pt-[102px] pb-[142px] pr-0 pl-[49px] box-border z-[3] text-5xl text-white">
                <div className="relative tracking-[0.03em] leading-[150%] inline-block w-[436px] h-[126px] shrink-0">
                  Experience Serena Screening, a tool that provides instant
                  understanding on how lifestyle factors impact your patients'
                  health.
                </div>
              </div>
              <div className="w-[553px] h-24 flex flex-col items-center justify-start gap-[10px] z-[4] text-center text-lg text-grey-prime">
                <div className="rounded-xl bg-whitesmoke-200 box-border w-[497px] h-[57px] flex flex-col items-center justify-center border-[1px] border-solid border-grey-prime">
                  <b className="relative tracking-[0.14em] leading-[130%] uppercase">
                    learn more
                  </b>
                </div>
                <div className="w-[496px] hidden flex-col items-center justify-end text-green-prime">
                  <div className="relative rounded-xl bg-white-prime-65 w-[496px] h-14" />
                  <b className="relative tracking-[0.14em] leading-[130%] uppercase inline-block mt-[-34px]">
                    DISCOVER
                  </b>
                </div>
                <div className="w-[496px] hidden flex-col items-center justify-end text-white-prime">
                  <div className="relative rounded-xl bg-green-prime shadow-[0px_8px_12px_2px_rgba(11,_62,_60,_0.65)] box-border w-[498px] h-[58px] border-[2px] border-solid border-white-prime" />
                  <b className="relative tracking-[0.14em] leading-[130%] uppercase inline-block mt-[-34px]">
                    DISCOVER
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[567px] h-[834px] flex flex-col items-start justify-start">
            <div className="self-stretch flex-1 flex flex-col items-center justify-end relative gap-[10px]">
              <div className="my-0 mx-[!important] absolute top-[0px] left-[0px] flex flex-col items-start justify-start p-2 z-[0]">
                <div className="relative rounded-xl bg-grey-25 [backdrop-filter:blur(25px)] box-border w-[551px] h-[818px] opacity-[0.5] mix-blend-multiply border-[2px] border-solid border-grey-prime" />
              </div>
              <div className="my-0 mx-[!important] absolute top-[10px] left-[10px] w-[547px] h-[814px] flex flex-col items-start justify-start z-[1]">
                <img
                  className="self-stretch flex-1 relative rounded-2xl max-w-full overflow-hidden max-h-full object-contain"
                  alt=""
                  src="/imagepatients@2x.png"
                />
              </div>
              <div className="self-stretch h-[214px] flex flex-col items-start justify-start pt-0 pb-[65px] pr-0 pl-[49px] box-border gap-[32px] z-[2]">
                <div className="flex flex-col items-start justify-start p-2">
                  <b className="relative tracking-[0.1em] leading-[100%] mix-blend-normal">
                    PATIENTS
                  </b>
                </div>
                <div className="relative text-29xl leading-[110%] inline-block w-[382px] h-[89px] shrink-0">
                  <span>{`Take control of `}</span>
                  <i className="font-semibold font-lora">your health.</i>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[567px] h-[834px] flex flex-col items-start justify-start">
            <div className="self-stretch flex-1 flex flex-col items-center justify-end relative gap-[10px]">
              <div className="my-0 mx-[!important] absolute top-[0px] left-[0px] flex flex-col items-start justify-start p-2 z-[0]">
                <div className="relative rounded-xl bg-grey-25 [backdrop-filter:blur(25px)] box-border w-[551px] h-[818px] opacity-[0.5] mix-blend-multiply border-[2px] border-solid border-grey-prime" />
              </div>
              <img
                className="my-0 mx-[!important] absolute top-[10px] left-[10px] rounded-2xl w-[547px] h-[814px] object-cover z-[1]"
                alt=""
                src="/companies@2x.png"
              />
              <div className="self-stretch h-[214px] flex flex-col items-start justify-start pt-0 pb-[65px] pr-0 pl-[49px] box-border gap-[32px] z-[2]">
                <div className="flex flex-col items-start justify-start p-2">
                  <b className="relative tracking-[0.1em] leading-[100%] mix-blend-normal">
                    COMPANIES
                  </b>
                </div>
                <div className="relative text-29xl leading-[110%] inline-block w-[382px] h-[89px] shrink-0">
                  <p className="m-0">From reactive</p>
                  <p className="m-0 font-lora">
                    <i className="font-semibold">to proactive.</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[461px] flex flex-col items-center justify-center pt-0 px-0 pb-7 box-border text-xl">
        <div className="flex flex-col items-center justify-center gap-[118px]">
          <img
            className="relative max-h-full w-[1728px] object-cover"
            alt=""
            src="/line@2x.png"
          />
          <div className="shrink-0 flex flex-col items-center justify-center">
            <div className="shrink-0 flex flex-row items-end justify-start">
              <div className="h-[299px] shrink-0 flex flex-col items-center justify-start gap-[91px]">
                <div className="w-[264px] h-[32.9px] flex flex-row items-center justify-end gap-[10px]">
                  <img
                    className="relative w-[208.6px] h-[32.9px] object-cover"
                    alt=""
                    src="/vector@2x.png"
                  />
                  <img
                    className="relative w-[45.3px] h-[11.6px] object-cover"
                    alt=""
                    src="/group@2x.png"
                  />
                </div>
                <img
                  className="relative w-[250.5px] h-[34.6px] object-cover"
                  alt=""
                  src="/buttons-social@2x.png"
                />
              </div>
              <div className="w-[1039px] h-[289px] flex flex-col items-start justify-start py-0 pr-0 pl-[180px] box-border">
                <div className="flex flex-row items-start justify-start gap-[128px]">
                  <div className="shrink-0 flex flex-col items-start justify-start gap-[49px]">
                    <b className="relative text-5xl tracking-[0.03em] leading-[130%]">
                      Home
                    </b>
                    <div className="relative tracking-[0.03em] leading-[130%] font-medium">
                      About
                    </div>
                    <div className="relative tracking-[0.03em] leading-[130%] font-medium">
                      For Doctors
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-col items-start justify-start gap-[49px]">
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
              <div className="h-[298px] shrink-0 flex flex-col items-end justify-start gap-[60px] text-sm">
                <div className="w-[84px] h-9 flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative tracking-[0.03em] leading-[130%] font-medium">
                    Login
                  </div>
                  <img
                    className="relative w-9 h-9 object-cover"
                    alt=""
                    src="/icon-login@2x.png"
                  />
                </div>
                <div className="rounded-xl bg-grey-prime box-border w-64 h-14 flex flex-col items-end justify-start py-[21px] px-[79px] text-base text-white border-[2px] border-solid border-gray-100">
                  <div className="relative tracking-[0.14em] leading-[130%] uppercase font-semibold">
                    CONTAct
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-[12px] leading-[130%] text-gray-200">
              © Serena Care 2023 . Todos os direitos reservados
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
