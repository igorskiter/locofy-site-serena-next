import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";

type HeaderType = {
  menuBurger?: string;
  close1?: string;
  logo?: string;
  vector?: string;
  iconLogin?: string;

  /** Style props */
  headerZIndex?: CSSProperties["zIndex"];
};

const Header: NextPage<HeaderType> = memo(
  ({ menuBurger, close1, logo, vector, iconLogin, headerZIndex }) => {
    const headerStyle: CSSProperties = useMemo(() => {
      return {
        zIndex: headerZIndex,
      };
    }, [headerZIndex]);

    return (
      <header
        className="self-stretch h-[9.38rem] flex flex-row items-center justify-between pt-[3.25rem] px-[6rem] pb-[3.63rem] box-border z-[0] text-left text-[0.88rem] text-grey-prime font-plus-jakarta-sans"
        id="Header"
        style={headerStyle}
      >
        <div className="flex-1 h-[1.75rem] flex flex-row items-center justify-start gap-[0.63rem]">
          <img
            className="relative w-[2rem] h-[1.75rem] object-cover"
            id="MenuBurguer"
            alt=""
            src={menuBurger}
          />
          <img
            className="relative w-[2rem] h-[2rem] object-cover hidden"
            alt=""
            src={close1}
          />
        </div>
        <div className="flex-1 h-[1.83rem] flex flex-col items-center justify-center">
          <img
            className="relative w-[14rem] h-[1.83rem] object-cover"
            alt="Logo"
            id="Logo"
            src={logo}
          />
        </div>
        <div className="flex-1 h-[2.5rem] flex flex-row items-center justify-end gap-[0.63rem]">
          <img
            className="relative w-[2rem] h-[2rem] object-cover hidden"
            alt=""
            src={vector}
          />
          <div className="flex flex-row items-center justify-start gap-[0.94rem]">
            <b className="relative tracking-[0.03em] leading-[130%]">Login</b>
            <img
              className="relative w-[2.5rem] h-[2.5rem] object-cover"
              alt="IconLogin"
              id="IconLogin"
              src={iconLogin}
            />
          </div>
        </div>
      </header>
    );
  }
);

export default Header;
