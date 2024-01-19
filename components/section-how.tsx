import type { NextPage } from "next";
import { memo } from "react";
import styles from "./section-how.module.css";

const SectionHow: NextPage = memo(() => {
  return (
    <section className={styles.section} id="SectionHow">
      <div className={styles.content}>
        <img
          className={styles.imageaboutushowIcon}
          alt=""
          src="/imageaboutushow@2x.png"
        />
        <div className={styles.description}>
          <i className={styles.chapeu2}>How</i>
          <div className={styles.h1}>
            <span className={styles.weAreDesigning}>{`We are designing `}</span>
            <i className={styles.better}>better</i>
            <span className={styles.healthcare}>
              <i className={styles.i}>{` `}</i>
              <span className={styles.healthcare1}>healthcare.</span>
            </span>
          </div>
          <div className={styles.p3}>
            We have spent years researching and developing a tool to highlight
            the vital correlation between lifestyle and health. Working with
            scientists, doctors, researchers and universities to solve, what we
            believe, is one of the most important and difficult problems we face
            today.
          </div>
        </div>
      </div>
    </section>
  );
});

export default SectionHow;
