import type { NextPage } from "next";
import { memo } from "react";
import styles from "./section-doctor-free-trial.module.css";

const SectionDoctorFreeTrial: NextPage = memo(() => {
  return (
    <section className={styles.section} id="SectionScreening">
      <div className={styles.content}>
        <img className={styles.leftIcon} alt="" src="/left@2x.png" />
        <div className={styles.right}>
          <div className={styles.description}>
            <div className={styles.withSerenaScreeningContainer}>
              <span>{`With `}</span>
              <i className={styles.serenaScreening}>Serena Screening</i>
              <span>{`, you can unlock a comprehensive understanding of your patients health, helping you `}</span>
              <i
                className={styles.serenaScreening}
              >{`move from reactive treatments to proactive, `}</i>
              <span>preventive care.</span>
            </div>
            <div className={styles.button}>
              <div className={styles.startYourFree}>Start Your Free Trial</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default SectionDoctorFreeTrial;