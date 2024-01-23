import type { NextPage } from "next";
import { memo } from "react";
import styles from "./section-asked-question-search.module.css";

const SectionAskedQUestionSearch: NextPage = memo(() => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.h5}>How can we help you?</div>
        <input
          className={styles.searchbar}
          name="search"
          id="search"
          placeholder="Search for articles"
          type="text"
        />
      </div>
    </div>
  );
});

export default SectionAskedQUestionSearch;
