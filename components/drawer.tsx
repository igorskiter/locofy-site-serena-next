import type { NextPage } from "next";
import { memo, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import MenuSelect from "./menu-select";
import Menu from "./menu";
import styles from "./drawer.module.css";

type DrawerType = {
  onClose?: () => void;
};

const Drawer: NextPage<DrawerType> = memo(({ onClose }) => {
  const router = useRouter();

  const onAboutClick = useCallback(() => {
    router.push("/about-us");
  }, [router]);

  const onForDoctorsClick = useCallback(() => {
    router.push("/doctors");
  }, [router]);

  const onBlogClick = useCallback(() => {
    window.open("https://blog.serenacare.com.br/");
    onClose && onClose();
  }, []);

  const onContactClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  const onFAQClick = useCallback(() => {
    router.push("/faq");
  }, [router]);

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
                <MenuSelect />
                <Menu about="About" onAboutTextClick={onAboutClick} />
                <Menu
                  about="For Doctors"
                  onAboutTextClick={onForDoctorsClick}
                  aboutLetterSpacing="unset"
                />
                <Menu
                  about="Blog"
                  onAboutTextClick={onClose}
                  aboutLetterSpacing="unset"
                />
                <Menu
                  about="Contact"
                  onAboutTextClick={onContactClick}
                  aboutLetterSpacing="unset"
                />
                <Menu
                  about="FAQ"
                  onAboutTextClick={onFAQClick}
                  aboutLetterSpacing="unset"
                />
              </div>
            </div>
            <div className={styles.center1}>
              <div className={styles.content1}>
                <img
                  className={styles.serFotoMockupQuestionario}
                  alt=""
                  src="/ser-foto-mockup--questionario-1@2x.png"
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
              <div className={styles.socialitens}>
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
});

export default Drawer;
