import type { NextPage } from "next";
import { memo, useCallback } from "react";
import styles from "./section-doctor-circle.module.css";

const SectionDoctorCircle: NextPage = memo(() => {
  const onButtonContainerClick = useCallback(() => {
    window.location.href = "https://www.serenacare.com.br/comunidade/";
  }, []);

  return (
    <section className={styles.section} id="SectionCircle">
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.description}>
            <i className={styles.chapeu1}>Serena Circle</i>
            <div className={styles.h2}>
              <span className={styles.joinThe}>{`Join the `}</span>
              <i className={styles.comMunity}>com munity.</i>
            </div>
            <div className={styles.p4}>
              Connect, collaborate, and share insights with other doctors using
              Serena Care. Together, we can lead the evolution of healthcare."
              Plus, we offer training on lifestyle medicine to help you make the
              most of our platform.
            </div>
          </div>
          <div className={styles.button} onClick={onButtonContainerClick}>
            <div className={styles.joinTheCommunity}>JOIN THE COMMUNITY</div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.subtractParent}>
            <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
            <div className={styles.logoSerenaCircle}>
              <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
              <img className={styles.groupIcon} alt="" src="/group1.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default SectionDoctorCircle;
