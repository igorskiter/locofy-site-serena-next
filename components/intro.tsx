import type { NextPage } from "next";
import { memo } from "react";
import Button from "./ui/button";
import styles from "./intro.module.css";

const Intro: NextPage = memo(() => {
  return (
    <section className={`${styles.hero} ${styles.newHero}`}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.title2}>
            <p className={styles.redefining}>{`Redefining `}</p>
            <p className={styles.redefining}>our relationship</p>
          </div>
          <i className={styles.title1}>with health</i>
        </div>
        <div className={styles.buttons}>
          <Button
            style={{
              boxSizing: "border-box",
              cursor: "pointer",
              flexShrink: "18px",
            }}
          >
            FOR doctorS
          </Button>
          <Button
            style={{
              boxSizing: "border-box",
              cursor: "pointer",
              flexShrink: "18px",
            }}
          >
            FOR COMPANIES
          </Button>
        </div>
      </div>
    </section>
  );
});

export default Intro;
