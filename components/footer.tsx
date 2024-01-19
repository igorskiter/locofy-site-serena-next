import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";
import styles from "./footer.module.css";

type FooterType = {
  lINE?: string;
  vector?: string;
  group?: string;
  buttonsSocial?: string;
  iconLogin?: string;

  /** Style props */
  footerZIndex?: CSSProperties["zIndex"];
};

const Footer: NextPage<FooterType> = memo(
  ({ lINE, vector, group, buttonsSocial, iconLogin, footerZIndex }) => {
    const footerStyle: CSSProperties = useMemo(() => {
      return {
        zIndex: footerZIndex,
      };
    }, [footerZIndex]);

    return (
      <section className={styles.footer} id="Footer" style={footerStyle}>
        <div className={styles.content}>
          <img className={styles.lineIcon} alt="" src={lINE} />
          <div className={styles.logomobile}>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          </div>
          <div className={styles.logotablet}>
            <img
              className={styles.vectorIcon1}
              alt="Logo"
              id="Logo"
              src="/Logo11@2x.png"
            />
            <img
              className={styles.groupIcon1}
              alt="LogoCare"
              id="LogoCare"
              src="/LogoCare10@2x.png"
            />
          </div>
          <div className={styles.footer1}>
            <div className={styles.box}>
              <div className={styles.left}>
                <div className={styles.logoSerenacare}>
                  <img
                    className={styles.vectorIcon1}
                    alt="Logo"
                    id="Logo"
                    src={vector}
                  />
                  <img
                    className={styles.groupIcon1}
                    alt="LogoCare"
                    id="LogoCare"
                    src={group}
                  />
                </div>
                <img
                  className={styles.buttonssocialIcon}
                  alt="ButtonsSocial"
                  id="ButtonsSocial"
                  src={buttonsSocial}
                />
              </div>
              <div className={styles.center}>
                <div className={styles.links}>
                  <div className={styles.right}>
                    <b className={styles.home}>Home</b>
                    <div className={styles.about}>About</div>
                    <div className={styles.about}>For Doctors</div>
                  </div>
                  <div className={styles.right}>
                    <div className={styles.about}>Blog</div>
                    <div className={styles.about}>FAQ</div>
                    <div className={styles.about}>Privacy Policy</div>
                  </div>
                </div>
              </div>
              <div className={styles.right1}>
                <div className={styles.buttonlogin}>
                  <b className={styles.login}>Login</b>
                  <img
                    className={styles.iconlogin}
                    alt="IconLogin"
                    id="IconLogin"
                    src={iconLogin}
                  />
                </div>
                <div className={styles.button}>
                  <div className={styles.contact}>CONTAct</div>
                </div>
              </div>
            </div>
            <div className={styles.buttonssocial}>
              <div className={styles.box1}>
                <img
                  className={styles.iconinstagram}
                  alt=""
                  src="/iconinstagram.svg"
                />
              </div>
              <div className={styles.box2}>
                <img
                  className={styles.iconinstagram}
                  alt=""
                  src="/iconfacebook.svg"
                />
              </div>
              <div className={styles.box2}>
                <img
                  className={styles.iconinstagram}
                  alt=""
                  src="/iconlinkedin.svg"
                />
              </div>
              <div className={styles.box2}>
                <img
                  className={styles.iconspotify}
                  alt=""
                  src="/iconspotify.svg"
                />
              </div>
            </div>
            <div className={styles.menu6}>
              © Serena Care 2023 . Todos os direitos reservados
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default Footer;
