import type { NextPage } from "next";
import { memo } from "react";
import styles from "./hero-understand-lifestyle.module.css";

const HeroUnderstandLifestyle: NextPage = memo(() => {
  return (
    <section className={styles.container} id="HeroUnderstandLifestyle">
      <div className={styles.box}>
        <div className={styles.h2}>
          <i>Understand</i>
          <span>
            <span>
              {` and mesure`} <br />
              {`the influence of `}
            <i>
              {`lifestyle`} <br />
              {`factors `}
            </i>
              on the onset of <br />
              disease and chronic <br /> conditions.
            </span>
          </span>
        </div>
        <div className={styles.p4}>
          With the Serena Screening technology we are <br />
          empowering both practitioners and patients with <br />
          information that will help take preventative <br />
          measures against potential health issues.
        </div>
      </div>
    </section>
  );
});

export default HeroUnderstandLifestyle;
