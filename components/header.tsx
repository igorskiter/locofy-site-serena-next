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
import styles from "./header.module.css";

type HeaderType = {
  menuBurger?: string;
  close1?: string;
  logo?: string;
  vector?: string;
  iconLogin?: string;
  showMenuBurgerIcon?: boolean;
  closeIcon?: boolean;
  logoTablet?: string;
  logoMobile?: string;

  /** Style props */
  headerZIndex?: CSSProperties["zIndex"];
};

const Header: NextPage<HeaderType> = memo(
  ({
    menuBurger,
    close1,
    logo,
    vector,
    iconLogin,
    headerZIndex,
    showMenuBurgerIcon,
    closeIcon,
    logoTablet,
    logoMobile,
  }) => {
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
        <header className={styles.header} id="Header" style={headerStyle}>
          <div className={styles.lefet}>
            {showMenuBurgerIcon && (
              <img
                className={styles.menuburgerIcon}
                id="MenuBurguer"
                alt=""
                src={menuBurger}
                onClick={openDrawer}
              />
            )}
            {!closeIcon && (
              <img className={styles.closeIcon} alt="" src={close1} />
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
