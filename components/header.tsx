import type { NextPage } from "next";
import { useRouter } from "next/router";
import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
} from "react";
import Drawer from "./drawer";
import styles from "./header.module.css";
import PortalDrawer from "./portal-drawer";

type HeaderType = {
  menuBurger?: string;
  close1?: string;
  logo?: string;
  vector?: string;
  iconLogin?: string;
  logoTablet?: string;
  logoMobile?: string;
};

const Header: NextPage<HeaderType> = memo(
  ({ menuBurger, close1, logo, vector, iconLogin, logoTablet, logoMobile }) => {
    const router = useRouter();

    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const headerStyle: CSSProperties = useMemo(() => {
      return {
        backgroundColor: isDrawerOpen ? "transparent" : "transparent",
        position: isDrawerOpen ? "sticky" : "static",
      };
    }, [isDrawerOpen]);

    const openDrawer = useCallback(() => {
      setDrawerOpen(true);
      document.body.style.overflow = "hidden";
    }, []);

    const closeDrawer = useCallback(() => {
      setDrawerOpen(false);
      document.body.style.overflow = "auto";
    }, []);

    useEffect(() => {
      closeDrawer();
    }, [router]);
    // const headerStyle = [styles.header]

    return (
      <>
        <header className={styles.header} id="Header" style={headerStyle}>
          <div className={styles.lefet}>
            {!isDrawerOpen && (
              <img
                className={styles.menuburgerIcon}
                id="MenuBurguer"
                alt=""
                src={menuBurger}
                onClick={openDrawer}
              />
            )}
            {isDrawerOpen && (
              <img
                className={styles.closeIcon}
                alt=""
                src={close1}
                onClick={closeDrawer}
              />
            )}
          </div>
          <div className={styles.center}>
            <img className={styles.logoIcon} alt="Logo" id="Logo" src={logo} />
            <img className={styles.logotabletIcon} alt="" src={logoTablet} />
            <img className={styles.logomobileIcon} alt="" src={logoMobile} />
          </div>
          <div className={styles.right}>
            {/* <img className={styles.closeIcon} alt="" src={vector} /> */}
            <div
              className={styles.buttonlogin}
              onClick={() => {
                window.location.replace("https://practitioner.serenacare.app/");
              }}
            >
              <b className={styles.login}>Login</b>
              <div className={styles.iconlogin} id="IconLogin" />
            </div>
          </div>
        </header>
        {isDrawerOpen && (
          <PortalDrawer
            overlayColor="rgba(236, 236, 236, 0.3)"
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
