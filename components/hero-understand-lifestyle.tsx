import type { NextPage } from "next";
import { memo } from "react";
import styles from "./hero-understand-lifestyle.module.css";

const HeroUnderstandLifestyle: NextPage = memo(() => {
  return (
    <section
      className={styles.container}
      id="HeroUnderstandLifestyle"
    >
      <div className={styles.box}>
        <div className={styles.h2}>
          <i>Understand</i>
          <span>
            <span>{` and mesure the influence of `}</span>
            <i>{`lifestyle factors `}</i>
            <span>on the onset of disease and chronic conditions.</span>
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
