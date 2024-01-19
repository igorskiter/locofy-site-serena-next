import type { NextPage } from "next";
import { memo } from "react";
import styles from "./hero-understand-lifestyle.module.css";

const HeroUnderstandLifestyle: NextPage = memo(() => {
  return (
    <section
      className={styles.herounderstandlifestyle}
      id="HeroUnderstandLifestyle"
    >
      <div className={styles.box}>
        <div className={styles.h2}>
          <i className={styles.understand}>Understand</i>
          <span className={styles.andMesureTheInfluenceOfLi}>
            <span
              className={styles.andMesureThe}
            >{` and mesure the influence of `}</span>
            <i className={styles.lifestyleFactors}>{`lifestyle factors `}</i>
            <span className={styles.onTheOnset}>
              on the onset of disease and chronic conditions.
            </span>
          </span>
        </div>
        <div className={styles.p4}>
          With the Serena Screening high technology we are empowering both
          practitioners and patients with information that will help take
          preventative measures against potential health issues.
        </div>
      </div>
    </section>
  );
});

export default HeroUnderstandLifestyle;
