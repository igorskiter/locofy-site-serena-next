import type { NextPage } from "next";
import {
  memo,
  useCallback,
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
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const headerStyle: CSSProperties = useMemo(() => {
      return {
        backgroundColor: isDrawerOpen ? "transparent" : "white"
      };
    }, [isDrawerOpen]);

    const openDrawer = useCallback(() => {
      setDrawerOpen(true);
    }, []);

    const closeDrawer = useCallback(() => {
      setDrawerOpen(false);
    }, []);

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
            <img className={styles.closeIcon} alt="" src={vector} />
            <div className={styles.buttonlogin}>
              <b className={styles.login}>Login</b>
              <img
                className={styles.iconlogin}
                alt="IconLogin"
                id="IconLogin"
                src={iconLogin}
              />
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
