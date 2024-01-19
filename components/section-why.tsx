import type { NextPage } from "next";
import { memo } from "react";
import styles from "./section-why.module.css";

const SectionWhy: NextPage = memo(() => {
  return (
    <section className={styles.section} id="SectionWhy">
      <div className={styles.content}>
        <div className={styles.description}>
          <i className={styles.chapeu2}>Why</i>
          <div className={styles.h1}>
            <span
              className={styles.empowerDoctorsAnd}
            >{`Empower doctors and patients with `}</span>
            <i className={styles.valuableData}>
              <span className={styles.valuableData1}>valuable data</span>
              <span className={styles.span}>{` `}</span>
            </i>
            <span className={styles.span}>
              <span className={styles.and1}>{`and `}</span>
            </span>
            <i className={styles.information}>information</i>
            <span className={styles.empowerDoctorsAnd}>.</span>
          </div>
          <div className={styles.p3}>
            Our current healthcare system, established decades ago, has
            primarily operated under a reactive framework, emphasizing the
            treatment of diseases and the management of symptoms. A paradigm
            shift towards preventative health interventions could significantly
            improve outcomes, reduce healthcare costs, and enhance overall
            well-being.
          </div>
        </div>
        <img
          className={styles.imageabouturwhyIcon}
          alt=""
          src="/imageabouturwhy@2x.png"
        />
      </div>
    </section>
  );
});

export default SectionWhy;
