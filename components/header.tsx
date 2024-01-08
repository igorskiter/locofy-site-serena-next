import type { NextPage } from "next";
import {
  memo,
  useState,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import Drawer from "./drawer";
import PortalDrawer from "./portal-drawer";

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

    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const openDrawer = useCallback(() => {
      setDrawerOpen(true);
    }, []);

    const closeDrawer = useCallback(() => {
      setDrawerOpen(false);
    }, []);

    return (
      <>
        <header
          className="self-stretch h-[9.38rem] flex flex-row items-center justify-between pt-[3.25rem] px-[6rem] pb-[3.63rem] box-border z-[0] text-left text-[0.88rem] text-grey-prime font-plus-jakarta-sans md:py-[1.88rem] md:px-[1.63rem] md:box-border sm:py-[1.5rem] sm:px-[1rem] sm:box-border"
          id="Header"
          style={headerStyle}
        >
          <div className="flex-1 h-[1.75rem] flex flex-row items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[2rem] h-[1.75rem] object-cover cursor-pointer"
              id="MenuBurguer"
              alt=""
              src={menuBurger}
              onClick={openDrawer}
            />
            <img
              className="relative w-[2rem] h-[2rem] object-cover hidden"
              alt=""
              src={close1}
            />
          </div>
          <div className="flex-1 h-[1.83rem] flex flex-col items-center justify-center gap-[0.63rem]">
            <img
              className="relative w-[14rem] h-[1.83rem] object-cover md:hidden"
              alt="Logo"
              id="Logo"
              src={logo}
            />
            <img
              className="relative w-[11.31rem] h-[1.5rem] object-cover hidden md:flex"
              alt=""
              src="/logotablet@2x.png"
            />
            <img
              className="relative w-[8.06rem] h-[1.06rem] object-cover hidden"
              alt=""
              src="/logomobile@2x.png"
            />
          </div>
          <div className="flex-1 h-[2.5rem] flex flex-row items-center justify-end gap-[0.63rem]">
            <img
              className="relative w-[2rem] h-[2rem] object-cover hidden"
              alt=""
              src={vector}
            />
            <div className="flex flex-row items-center justify-start gap-[0.94rem]">
              <b className="relative tracking-[0.03em] leading-[130%] sm:hidden">
                Login
              </b>
              <img
                className="relative w-[2.5rem] h-[2.5rem] object-cover"
                alt="IconLogin"
                id="IconLogin"
                src={iconLogin}
              />
            </div>
          </div>
        </header>
        {isDrawerOpen && (
          <PortalDrawer
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Left"
            onOutsideClick={closeDrawer}
          >
            <Drawer onClose={closeDrawer} />
          </PortalDrawer>
        )}
      </>
    );
  }
);

export default Header;
