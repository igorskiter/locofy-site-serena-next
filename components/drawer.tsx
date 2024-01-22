import type { NextPage } from "next";
import { memo, useEffect } from "react";
import styles from "./drawer.module.css";

type DrawerType = {
  onClose?: () => void;
};

const Drawer: NextPage<DrawerType> = memo(({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.drawer} data-animate-on-scroll>
      <header className={styles.header} id="Header">
        <div className={styles.lefet}>
          <img
            className={styles.menuburgerIcon}
            id="MenuBurguer"
            alt=""
            src="/menuburger1@2x.png"
          />
          <img className={styles.closeIcon} alt="" src="/close.svg" />
        </div>
        <div className={styles.center}>
          <img
            className={styles.logoIcon}
            alt="Logo"
            id="Logo"
            src="/Logo1@2x.png"
          />
          <img className={styles.logotabletIcon} alt="" src="/logotablet.svg" />
          <img className={styles.logomobileIcon} alt="" src="/logomobile.svg" />
        </div>
        <div className={styles.right}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.buttonlogin}>
            <b className={styles.login}>Login</b>
            <img
              className={styles.iconlogin}
              alt="IconLogin"
              id="IconLogin"
              src="/iconlogin1@2x.png"
            />
          </div>
        </div>
      </header>
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
                  src="/ser-foto-mockup--questionario-1@2x.png"
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
                src="/socialitens.svg"
              />
            </div>
          </div>
          <div className={styles.privacyPolicy}>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
});

export default Drawer;
