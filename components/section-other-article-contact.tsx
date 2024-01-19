import type { NextPage } from "next";
import { memo } from "react";
import styles from "./section-other-article-contact.module.css";

const SectionOtherArticleContact: NextPage = memo(() => {
  return (
    <div className={styles.section}>
      <div className={styles.otherArticles}>
        <div className={styles.h6}>Other articles</div>
        <div className={styles.articles}>
          <div className={styles.article}>
            <b className={styles.p6}>ACCOUNT</b>
            <div className={styles.p2}>
              <p className={styles.lostAccessTo}>Lost access to my account.</p>
            </div>
          </div>
          <div className={styles.article1}>
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
            <img
              className={styles.iconcircleselected}
              alt=""
              src="/iconcircleselected.svg"
            />
            <img
              className={styles.iconcircleselected}
              alt=""
              src="/iconcirclenonselected.svg"
            />
            <img
              className={styles.iconcircleselected}
              alt=""
              src="/iconcirclenonselected.svg"
            />
          </div>
          <div className={styles.buttons}>
            <img
              className={styles.iconleftarrow}
              alt=""
              src="/iconleftarrow.svg"
            />
            <img
              className={styles.iconleftarrow}
              alt=""
              src="/iconrightarrow.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.otherArticles}>
        <div className={styles.cantFindWhat}>
          Can’t find what you are looking for?
        </div>
        <div className={styles.button}>
          <div className={styles.getInContact}>GET IN CONTACT</div>
        </div>
      </div>
    </div>
  );
});

export default SectionOtherArticleContact;
