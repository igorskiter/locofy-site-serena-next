import type { NextPage } from "next";
import { memo, useCallback } from "react";
import styles from "./team-section.module.css";

const TeamSection: NextPage = memo(() => {
  const onButtonContainerClick = useCallback(() => {
    window.location.href = "https://www.serenacare.com.br/";
  }, []);

  return (
    <section className={styles.section} id="SectionOurTeam">
      <div className={styles.content}>
        <div className={styles.box}>
          <div className={styles.description}>
            <i className={styles.chapeu2}>Our Team</i>
            <div className={styles.p2}>
              We're proud of our talented and diverse team at Serena. We're
              scientists, designers, healthcare professionals, bringing diverse
              skills and experiences to the table to create an innovative
              solution that will help transform how we look at healthcare.
            </div>
          </div>
          <div className={styles.button} onClick={onButtonContainerClick}>
            <div className={styles.text}>Jobs at Serena</div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default TeamSection;
