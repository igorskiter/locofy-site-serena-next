import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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

    const router = useRouter();

    const onHomeClick = useCallback(() => {
      router.push("/");
    }, [router]);

    const onAboutClick = useCallback(() => {
      router.push("/about-us");
    }, [router]);

    const onForDoctorsClick = useCallback(() => {
      router.push("/doctors");
    }, [router]);

    const onBlogClick = useCallback(() => {
      window.open("https://blog.serenacare.com.br/");
    }, []);

    const onContactClick = useCallback(() => {
      router.push("/contact");
    }, [router]);

    const onFAQClick = useCallback(() => {
      router.push("/faq");
    }, [router]);

    return (
      <div className={styles.sidemenu} style={sideMenuStyle}>
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
              src="/logo3@2x.png"
            />
            <img
              className={styles.logotabletIcon}
              alt=""
              src="/logotablet1.svg"
            />
            <img
              className={styles.logomobileIcon}
              alt=""
              src="/logomobile1.svg"
            />
          </div>
          <div className={styles.right}>
            <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
            <div className={styles.buttonlogin}>
              <b className={styles.login}>Login</b>
              <img
                className={styles.iconlogin}
                alt="IconLogin"
                id="IconLogin"
                src="/iconlogin2@2x.png"
              />
            </div>
          </div>
        </header>
        <div className={styles.navmenu}>
          <div className={styles.content}>
            <div className={styles.menu}>
              <div className={styles.left}>
                <div className={styles.menu1}>
                  <Link className={styles.home} href="/" onClick={onHomeClick}>
                    Home
                  </Link>
                  <Link
                    className={styles.about}
                    href="/about-us"
                    onClick={onAboutClick}
                  >
                    About
                  </Link>
                  <Link
                    className={styles.forDoctors}
                    href="/doctors"
                    onClick={onForDoctorsClick}
                  >
                    For Doctors
                  </Link>
                  <a
                    className={styles.blog}
                    href="https://blog.serenacare.com.br/"
                    onClick={onBlogClick}
                  >
                    Blog
                  </a>
                  <Link
                    className={styles.forDoctors}
                    href="/contact"
                    onClick={onContactClick}
                  >
                    Contact
                  </Link>
                  <Link
                    className={styles.forDoctors}
                    href="/faq"
                    onClick={onFAQClick}
                  >
                    FAQ
                  </Link>
                </div>
              </div>
              <div className={styles.center1}>
                <div className={styles.content1}>
                  <img
                    className={styles.serFotoMockupQuestionario}
                    alt=""
                    src={sERFOTOMOCKUPQUESTIONARIO}
                  />
                  <div className={styles.h2}>
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
              </div>
              <div className={styles.right1}>
                <div className={styles.socialitens} src={socialItens}>
                  <a
                    className={styles.linksocial}
                    href="https://blog.serenacare.com.br/"
                  >
                    <img
                      className={styles.iconSocialMediaInstagram}
                      alt=""
                      src="/icon-social-media--instagram.svg"
                    />
                  </a>
                  <a
                    className={styles.linksocial1}
                    href="https://blog.serenacare.com.br/"
                  >
                    <img
                      className={styles.iconSocialMediaInstagram}
                      alt=""
                      src="/icon-social-media--facebook.svg"
                    />
                  </a>
                  <a
                    className={styles.linksocial1}
                    href="https://blog.serenacare.com.br/"
                  >
                    <img
                      className={styles.iconSocialMediaInstagram}
                      alt=""
                      src="/icon-social-media--linkedin.svg"
                    />
                  </a>
                  <a
                    className={styles.linksocial3}
                    href="https://blog.serenacare.com.br/"
                  >
                    <img
                      className={styles.iconSocialMediaInstagram}
                      alt=""
                      src="/icon-social-media--spotify.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.footersocial}>
              <div className={styles.socialitens1}>
                <a
                  className={styles.linksocial}
                  href="https://blog.serenacare.com.br/"
                >
                  <img
                    className={styles.iconSocialMediaInstagram}
                    alt=""
                    src="/icon-social-media--instagram.svg"
                  />
                </a>
                <a
                  className={styles.linksocial1}
                  href="https://blog.serenacare.com.br/"
                >
                  <img
                    className={styles.iconSocialMediaInstagram}
                    alt=""
                    src="/icon-social-media--facebook.svg"
                  />
                </a>
                <a
                  className={styles.linksocial1}
                  href="https://blog.serenacare.com.br/"
                >
                  <img
                    className={styles.iconSocialMediaInstagram}
                    alt=""
                    src="/icon-social-media--linkedin.svg"
                  />
                </a>
                <a
                  className={styles.linksocial3}
                  href="https://blog.serenacare.com.br/"
                >
                  <img
                    className={styles.iconSocialMediaInstagram}
                    alt=""
                    src="/icon-social-media--spotify.svg"
                  />
                </a>
              </div>
            </div>
            <a
              className={styles.privacyPolicy}
              href="https://blog.serenacare.com.br/"
            >
              Privacy Policy
            </a>
            <div className={styles.textSerenaCare}>
              © Serena Care 2023 . Todos os direitos reservados
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default SideMenu;
