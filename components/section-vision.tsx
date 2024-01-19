import type { NextPage } from "next";
import { memo } from "react";
import styles from "./section-vision.module.css";

const SectionVision: NextPage = memo(() => {
  return (
    <section className={styles.section} id="SectionVision">
      <div className={styles.content}>
        <div className={styles.left}>
          <img
            className={styles.imageaboutus1Icon}
            alt=""
            src="/imageaboutus1@2x.png"
          />
          <img
            className={styles.imageaboutus2Icon}
            alt=""
            src="/imageaboutus2@2x.png"
          />
        </div>
        <div className={styles.right}>
          <div className={styles.p2}>
            <span>{`Our `}</span>
            <i className={styles.vision}>{`vision `}</i>
            <span>{`is to improve people's lives by redefining their `}</span>
            <i className={styles.vision}>relationship with health</i>
            <span>{`. We aim to help foster the culture that will lead to a proactive `}</span>
            <i className={styles.vision}>healthcare system</i>
            <span>.</span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default SectionVision;
