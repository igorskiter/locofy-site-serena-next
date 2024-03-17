import { useRouter } from "next/router";
import { memo, useCallback, useRef, useState } from "react";
import styles from "./section-other-article.module.scss";

const SectionOtherArticleContact = memo(({ hasCantFindWhat = true }: any) => {
  const router = useRouter();
  let cardsRef = useRef();
  const [cardSelection, setCarSelection] = useState(0);

  const onArticleContainerClick = useCallback(() => {
    router.push("/faq-article");
  }, [router]);

  const onButtonContainerClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  const scrollCard = (index: number) => {
    if (cardsRef[0]) {
      const containerWidth = cardsRef[0].clientWidth;
      const cardWidth = cardsRef[0].children[0].clientWidth;

      cardsRef[0].scrollTo({
        left: +(
          index * cardWidth -
          (containerWidth - cardWidth) / 2 +
          26
        ).toFixed(0),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.otherArticles}>
        <div className={styles.h6}>Other articles</div>
        <div ref={(ref) => (cardsRef[0] = ref)} className={styles.articles}>
          <div className={styles.article} onClick={onArticleContainerClick}>
            <b className={styles.p6}>ACCOUNT</b>
            <div className={styles.p2}>
              <p className={styles.descriptionArticle}>
                Lost access to my account.
              </p>
            </div>
          </div>
          <div className={styles.article} onClick={onArticleContainerClick}>
            <b className={styles.p6}>ACCOUNT</b>
            <div className={styles.p2}>
              <p className={styles.descriptionArticle}>
                How do I change my account’s e-mail?
              </p>
            </div>
          </div>
        </div>

        <div className={styles.bullets}>
          <div
            data-selection={cardSelection === 0}
            className={styles.bullet}
            onClick={() => {
              scrollCard(0);
              setCarSelection(0);
            }}
          ></div>
          <div
            data-selection={cardSelection === 1}
            className={styles.bullet}
            onClick={() => {
              scrollCard(1);
              setCarSelection(1);
            }}
          ></div>
        </div>
        {/* <div className={styles.footer}>
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
        </div> */}
        {hasCantFindWhat && (
          <div
            className={`${styles.otherArticles} ${styles.otherArticlesContact}`}
          >
            <div className={styles.cantFindWhat}>
              Can’t find what you are looking for?
            </div>
            <div className={styles.button} onClick={onButtonContainerClick}>
              <div className={styles.getInContact}>GET IN CONTACT</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default SectionOtherArticleContact;
