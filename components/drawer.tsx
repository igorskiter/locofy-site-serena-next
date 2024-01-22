import type { NextPage } from "next";
import { memo, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "./header";
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
      <Header
        menuBurger="/menuburger1@2x.png"
        close1="/close.svg"
        logo="/Logo1@2x.png"
        vector="/vector.svg"
        iconLogin="/iconlogin1@2x.png"
        showMenuBurgerIcon={false}
        closeIcon
        logoTablet="/logotablet.svg"
        logoMobile="/logomobile.svg"
      />
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
            <div className={styles.center}>
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
            <div className={styles.right}>
              <div className={styles.socialitens}>
                <a
                  className={styles.linksocial}
                  href="https://blog.serenacare.com.br/"
                >
                  <img
                    className={styles.iconSocialMediaSpotify}
                    alt=""
                    src="/icon-social-media--spotify.svg"
                  />
                </a>
                <a
                  className={styles.linksocial1}
                  href="https://blog.serenacare.com.br/"
                >
                  <img
                    className={styles.iconSocialMediaSpotify}
                    alt=""
                    src="/icon-social-media--linkedin.svg"
                  />
                </a>
                <a
                  className={styles.linksocial2}
                  href="https://blog.serenacare.com.br/"
                >
                  <img
                    className={styles.iconSocialMediaSpotify}
                    alt=""
                    src="/icon-social-media--facebook.svg"
                  />
                </a>
                <a
                  className={styles.linksocial3}
                  href="https://blog.serenacare.com.br/"
                >
                  <img
                    className={styles.iconSocialMediaSpotify}
                    alt=""
                    src="/icon-social-media--instagram.svg"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.privacyPolicy}>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
});

export default Drawer;
