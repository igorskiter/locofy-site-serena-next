import type { NextPage } from "next";
import { useRouter } from "next/router";
import { memo, useCallback, useEffect } from "react";
import styles from "./drawer.module.css";
import Menu from "./menu";

type DrawerType = {
  onClose?: () => void;
};

const Drawer: NextPage<DrawerType> = memo(({ onClose }) => {
  const router = useRouter();

  const onClick = useCallback(
    (route: string) => {
      router.push(route);
    },
    [router]
  );

  const onBlogClick = useCallback(() => {
    window.open("https://blog.serenacare.com.br/");
    onClose && onClose();
  }, []);

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
      <div className={styles.navmenu}>
        <div className={styles.content}>
          <div className={styles.menu}>
            <div
              className={styles.contentMenu}
              style={{
                display: "flex",
                gap: 80,
                padding: '60px 0 60px 10%',
                height: "-webkit-fill-available",
              }}
            >
              <div className={styles.left}>
                <div className={styles.menu1}>
                  {/* <MenuSelect /> */}
                  <Menu name="Home" pathMenu="/" onClick={() => onClick("/")} />
                  <Menu
                    name="About"
                    pathMenu="/about-us"
                    onClick={() => onClick("/about-us")}
                  />
                  <Menu
                    name="For Doctors"
                    pathMenu="/doctors"
                    onClick={() => onClick("/doctors")}
                    aboutLetterSpacing="unset"
                  />
                  <Menu
                    name="Blog"
                    pathMenu=""
                    onClick={onBlogClick}
                    aboutLetterSpacing="unset"
                  />
                  <Menu
                    name="Contact"
                    pathMenu="/contact"
                    onClick={() => onClick("/contact")}
                    aboutLetterSpacing="unset"
                  />
                  <Menu
                    name="FAQ"
                    pathMenu="/faq"
                    onClick={() => onClick("/faq")}
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
            </div>
            <div className={styles.right}>
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
          <a
            className={styles.privacyPolicy}
            href="https://blog.serenacare.com.br/"
          >
            Privacy Policy
          </a>
          <div className={styles.footerMobile}>
            <div className={styles.footersocial}>
              <div className={styles.socialitens1}>
                <a
                  className={styles.linksocial4}
                  href="https://blog.serenacare.com.br/"
                >
                  <img
                    className={styles.iconSocialMediaInstagram}
                    alt=""
                    src="/icon-social-media--instagram.svg"
                  />
                </a>
                <a
                  className={styles.linksocial5}
                  href="https://blog.serenacare.com.br/"
                >
                  <img
                    className={styles.iconSocialMediaInstagram}
                    alt=""
                    src="/icon-social-media--facebook.svg"
                  />
                </a>
                <a
                  className={styles.linksocial5}
                  href="https://blog.serenacare.com.br/"
                >
                  <img
                    className={styles.iconSocialMediaInstagram}
                    alt=""
                    src="/icon-social-media--linkedin.svg"
                  />
                </a>
                <a
                  className={styles.linksocial7}
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
            <div className={styles.textSerenaCare}>
              © Serena Care 2023 . Todos os direitos reservados
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Drawer;
