import type { NextPage } from "next";
import { memo } from "react";
import styles from "./section-asked-question-search.module.css";

const SectionAskedQUestionSearch: NextPage = memo(() => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.h5}>How can we help you?</div>
        <div className={styles.searchbar}>
          <img className={styles.iconsearch} alt="" src="/iconsearch.svg" />
          <div className={styles.p5}>Search for articles</div>
        </div>
      </div>
    </div>
  );
});

export default SectionAskedQUestionSearch;
