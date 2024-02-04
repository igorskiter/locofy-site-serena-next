import type { NextPage } from "next";
import { useRouter } from "next/router";
import { memo, useCallback } from "react";
import styles from "./section-faq-detail.module.css";

const SectionFaqDetail: NextPage = memo(() => {
  const router = useRouter();
  const onBack = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.backbutton} onClick={onBack}>
          <img
            className={styles.chevronleftIcon}
            alt=""
            src="/chevronleft.svg"
          />
          <div className={styles.p6}>Back</div>
        </div>
        <div className={styles.description}>
          <b className={styles.h6}>What is Serena Screening?</b>
          <img className={styles.lnIcon} alt="" src="/ln.svg" />
          <div className={styles.p4}>
            <p className={styles.serenaScreeningIs}>
              Serena Screening is a digital health platform that provides
              comprehensive insights into how lifestyle impacts health. It uses
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className={styles.serenaScreeningIs}>&nbsp;</p>
            <p className={styles.serenaScreeningIs}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SectionFaqDetail;
