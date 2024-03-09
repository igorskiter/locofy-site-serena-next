import type { NextPage } from "next";
import { memo } from "react";
import styles from "./hero-doctors.module.css";

const HeroDoctors: NextPage = memo(() => {
  return (
    <section className={styles.hero} id="HeroDoctor">
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.h1}>
            <p className={styles.discoverUnderstand}>
              <span className={styles.discover}>{`Discover. `}</span>
              <br/>
              <i className={styles.understand}>Understand</i>
              <i className={styles.i}>.</i>
            </p>
            <p className={styles.act}>Act.</p>
          </div>
          <div className={styles.p3}>
            The health of patients is greatly impacted by their lifestyle
            choices. Through comprehensive data collection, analysis, and
            tracking, we uncover connections revealing the root causes of
            symptoms and anticipating the onset of diseases based on lifestyle
            and behavior.
          </div>
        </div>
        <img className={styles.rightIcon} alt="" src="/right@2x.png" />
      </div>
    </section>
  );
});

export default HeroDoctors;
