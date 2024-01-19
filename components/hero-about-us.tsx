import type { NextPage } from "next";
import { memo } from "react";
import styles from "./hero-about-us.module.css";

const HeroAboutUs: NextPage = memo(() => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.title}>
          <span
            className={styles.shiftingParadigmsTowards}
          >{`Shifting paradigms towards `}</span>
          <i className={styles.preventiveHealth}>preventive health</i>
        </div>
      </div>
    </section>
  );
});

export default HeroAboutUs;
