import type { NextPage } from "next";
import { memo } from "react";
import styles from "./section-doctor-benefits.module.css";

const SectionDoctorBenefits: NextPage = memo(() => {
  return (
    <section className={styles.section} id="SectionBenefits">
      <div className={styles.content}>
        <i className={styles.chapeu1}>Benefits</i>
        <div className={styles.content1}>
          <div className={styles.tile}>
            <img className={styles.iconplans} alt="" src="/iconplans.svg" />
            <div className={styles.chapeu2}>
              <p className={styles.personalized}>{`Personalized `}</p>
              <p className={styles.personalized}>Treatment</p>
              <p className={styles.personalized}>Plans</p>
            </div>
            <div className={styles.p5}>
              Understanding how lifestyle factors affect health allows you to
              create personalized treatment plans. With Serena Screening, you
              can guide your patients towards healthier choices, helping them to
              treat and prevent chronic conditions before they start.
            </div>
          </div>
          <div className={styles.tile1}>
            <img
              className={styles.iconplans}
              alt=""
              src="/iconrelationships.svg"
            />
            <div className={styles.chapeu2}>
              <p className={styles.personalized}>{`Strengthen `}</p>
              <p className={styles.personalized}>
                Doctor-Patient Relationships
              </p>
            </div>
            <div className={styles.p5}>
              Serena Screening not only improves health outcomes but also
              strengthens the doctor-patient relationship. By providing a
              comprehensive understanding of each patient's health, you can
              engage in more meaningful and productive conversations, fostering
              trust and collaboration.
            </div>
          </div>
          <div className={styles.tile2}>
            <img className={styles.iconplans} alt="" src="/iconproactive.svg" />
            <div className={styles.chapeu2}>
              <p className={styles.personalized}>{`From `}</p>
              <p className={styles.personalized}>Reactive to</p>
              <p className={styles.personalized}>Proactive</p>
            </div>
            <div className={styles.p5}>
              Serena Screening empowers you to shift from reactive to proactive
              healthcare. By identifying potential health risks early, you can
              intervene before they become serious issues, promoting overall
              wellness and preventive care.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default SectionDoctorBenefits;
