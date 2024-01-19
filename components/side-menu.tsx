import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";
import styles from "./side-menu.module.css";

type SideMenuType = {
  sERFOTOMOCKUPQUESTIONARIO?: string;
  socialItens?: string;

  /** Style props */
  sideMenuBackgroundImage?: CSSProperties["backgroundImage"];
  sideMenuZIndex?: CSSProperties["zIndex"];
  sideMenuMargin?: CSSProperties["margin"];
  sideMenuPosition?: CSSProperties["position"];
  sideMenuTop?: CSSProperties["top"];
  sideMenuLeft?: CSSProperties["left"];
};

const SideMenu: NextPage<SideMenuType> = memo(
  ({
    sideMenuBackgroundImage,
    sideMenuZIndex,
    sERFOTOMOCKUPQUESTIONARIO,
    socialItens,
    sideMenuMargin,
    sideMenuPosition,
    sideMenuTop,
    sideMenuLeft,
  }) => {
    const sideMenuStyle: CSSProperties = useMemo(() => {
      return {
        backgroundImage: sideMenuBackgroundImage,
        zIndex: sideMenuZIndex,
        margin: sideMenuMargin,
        position: sideMenuPosition,
        top: sideMenuTop,
        left: sideMenuLeft,
      };
    }, [
      sideMenuBackgroundImage,
      sideMenuZIndex,
      sideMenuMargin,
      sideMenuPosition,
      sideMenuTop,
      sideMenuLeft,
    ]);

    return (
      <div className={styles.sidemenu} style={sideMenuStyle}>
        <div className={styles.header}>
          <div className={styles.lefet}>
            <img
              className={styles.menuburgerIcon}
              alt=""
              src="/menuburger.svg"
            />
            <img className={styles.closeIcon} alt="" src="/close.svg" />
          </div>
          <div className={styles.center}>
            <img className={styles.logoIcon} alt="" src="/logo2.svg" />
          </div>
          <div className={styles.right}>
            <img className={styles.closeIcon} alt="" src="/vector2.svg" />
            <div className={styles.buttonlogin}>
              <div className={styles.text}>Login</div>
              <img className={styles.iconlogin} alt="" src="/iconlogin.svg" />
            </div>
          </div>
        </div>
        <div className={styles.navmenu}>
          <div className={styles.content}>
            <div className={styles.menu}>
              <div className={styles.left}>
                <div className={styles.menu1}>
                  <i className={styles.home}>Home</i>
                  <div className={styles.about}>About</div>
                  <div className={styles.forDoctors}>For Doctors</div>
                  <div className={styles.forDoctors}>Blog</div>
                  <div className={styles.forDoctors}>Contact</div>
                  <div className={styles.forDoctors}>FAQ</div>
                </div>
              </div>
              <div className={styles.center1}>
                <div className={styles.content1}>
                  <img
                    className={styles.serFotoMockupQuestionario}
                    alt=""
                    src={sERFOTOMOCKUPQUESTIONARIO}
                  />
                  <div className={styles.redefiningOurRelationshipContainer}>
                    <p className={styles.redefining}>{`Redefining `}</p>
                    <p className={styles.ourRelationshipWithHealth}>
                      <span className={styles.ourRelationship}>
                        our relationship
                      </span>
                      <i className={styles.withHealth}> with health</i>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.right1}>
                <img
                  className={styles.socialitensIcon}
                  alt=""
                  src={socialItens}
                />
              </div>
            </div>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
          </div>
        </div>
      </div>
    );
  }
);

export default SideMenu;
