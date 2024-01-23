import type { NextPage } from "next";
import { memo, useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./section-other-article-contact.module.css";

const SectionOtherArticleContact: NextPage = memo(() => {
  const router = useRouter();

  const onArticleContainerClick = useCallback(() => {
    router.push("/faq-article");
  }, [router]);

  const onArticleContainer1Click = useCallback(() => {
    router.push("/faq-article");
  }, [router]);

  const onButtonContainerClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <div className={styles.section}>
      <div className={styles.otherArticles}>
        <div className={styles.h6}>Other articles</div>
        <div className={styles.articles}>
          <div className={styles.article} onClick={onArticleContainerClick}>
            <b className={styles.p6}>ACCOUNT</b>
            <div className={styles.p2}>
              <p className={styles.lostAccessTo}>Lost access to my account.</p>
            </div>
          </div>
          <div className={styles.article1} onClick={onArticleContainer1Click}>
            <b className={styles.p61}>ACCOUNT</b>
            <div className={styles.p21}>
              <p className={styles.lostAccessTo}>
                How do I change my account’s e-mail?
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.selection}>
            <button className={styles.buttoncircle}>
              <img
                className={styles.iconcircleselected}
                alt=""
                src="/iconcircleselected.svg"
              />
            </button>
            <button className={styles.buttoncircle}>
              <img
                className={styles.iconcircleselected}
                alt=""
                src="/iconcirclenonselected.svg"
              />
            </button>
            <button className={styles.buttoncircle}>
              <img
                className={styles.iconcircleselected}
                alt=""
                src="/iconcirclenonselected.svg"
              />
            </button>
          </div>
          <div className={styles.buttons}>
            <button className={styles.iconleftarrow}>
              <img
                className={styles.iconleftarrowChild}
                alt=""
                src="/ellipse-42.svg"
              />
              <img
                className={styles.iconleftarrowItem}
                alt=""
                src="/vector-6.svg"
              />
            </button>
            <button className={styles.iconleftarrow}>
              <div className={styles.iconrightarrowChild} />
              <img
                className={styles.iconrightarrowItem}
                alt=""
                src="/vector-5.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.otherArticles}>
        <div className={styles.cantFindWhat}>
          Can’t find what you are looking for?
        </div>
        <div className={styles.button} onClick={onButtonContainerClick}>
          <div className={styles.getInContact}>GET IN CONTACT</div>
        </div>
      </div>
    </div>
  );
});

export default SectionOtherArticleContact;
