import type { NextPage } from "next";
import Link from "next/link";
import { memo, useMemo, type CSSProperties } from "react";
import styles from "./footer.module.css";

type FooterType = {
  lINE?: string;
  vector?: string;
  group?: string;
  buttonsSocial?: any;
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
          <div className={styles.lineIcon} />
          <div className={styles.logomobile}>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          </div>
          <div className={styles.logotablet}>
            <img
              className={styles.vectorIcon1}
              alt="Logo"
              id="Logo"
              src="/Logo4@2x.png"
            />
            <img
              className={styles.groupIcon1}
              alt="LogoCare"
              id="LogoCare"
              src="/LogoCare31@2x.png"
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
                <div className={styles.buttonssocial}>
                  <a
                    className={styles.linksocial}
                    href="https://blog.serenacare.com.br/"
                  >
                    <img
                      className={styles.iconspotify}
                      alt=""
                      src="/iconspotify.svg"
                    />
                  </a>
                  <a
                    className={styles.linksocial1}
                    href="https://blog.serenacare.com.br/"
                  >
                    <img
                      className={styles.iconspotify}
                      alt=""
                      src="/iconlinkedin.svg"
                    />
                  </a>
                  <a
                    className={styles.linksocial2}
                    href="https://blog.serenacare.com.br/"
                  >
                    <img
                      className={styles.iconspotify}
                      alt=""
                      src="/iconfacebook.svg"
                    />
                  </a>
                  <a
                    className={styles.linksocial3}
                    href="https://blog.serenacare.com.br/"
                  >
                    <img
                      className={styles.iconspotify}
                      alt=""
                      src="/iconinstagram.svg"
                    />
                  </a>
                </div>
              </div>
              <div className={styles.center}>
                <div className={styles.links}>
                  <div className={styles.right}>
                    <Link className={styles.home} href="/">
                      Home
                    </Link>
                    <Link className={styles.about} href="/about-us">
                      About
                    </Link>
                    <Link className={styles.about} href="/doctors">
                      For Doctors
                    </Link>
                  </div>
                  <div className={styles.right}>
                    <a
                      className={styles.blog}
                      href="https://blog.serenacare.com.br/"
                    >
                      Blog
                    </a>
                    <Link className={styles.about} href="/faq">
                      FAQ
                    </Link>
                    <a
                      className={styles.blog}
                      href="https://blog.serenacare.com.br/"
                    >
                      Privacy Policy
                    </a>
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
                <Link className={styles.button} href="/contact">
                  <div className={styles.contact}>CONTAct</div>
                </Link>
              </div>
            </div>
            <div className={styles.buttonssocial1}>
              <div className={styles.box1}>
                <img
                  className={styles.iconinstagram1}
                  alt=""
                  src="/iconinstagram1.svg"
                />
              </div>
              <div className={styles.box2}>
                <img
                  className={styles.iconinstagram1}
                  alt=""
                  src="/iconfacebook1.svg"
                />
              </div>
              <div className={styles.box2}>
                <img
                  className={styles.iconinstagram1}
                  alt=""
                  src="/iconlinkedin1.svg"
                />
              </div>
              <div className={styles.box2}>
                <img
                  className={styles.iconspotify1}
                  alt=""
                  src="/iconspotify1.svg"
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
