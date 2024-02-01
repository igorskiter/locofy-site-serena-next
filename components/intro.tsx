import type { NextPage } from "next";
import { memo } from "react";
import Link from "next/link";
import Property1BUTTONPRIMARY from "./button-primary";
import styles from "./intro.module.css";

const Intro: NextPage = memo(() => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.title2}>
            <p className={styles.redefining}>{`Redefining `}</p>
            <p className={styles.redefining}>our relationship</p>
          </div>
          <i className={styles.title1}>with health</i>
        </div>
        <div className={styles.buttons}>
          <Property1BUTTONPRIMARY
            doctorSpecialty="FOR doctorS"
            property1BUTTONPRIMARYBoxSizing="border-box"
            property1BUTTONPRIMARYPadding="var(--padding-2xl) var(--padding-35xl)"
            property1BUTTONPRIMARYCursor="pointer"
            property1BUTTONPRIMARYFlexShrink="unset"
            cTATEXTFontSize="18px"
            cTATEXTDisplay="inline-block"
          />
          <Property1BUTTONPRIMARY
            doctorSpecialty="FOR COMPANIES"
            property1BUTTONPRIMARYBoxSizing="border-box"
            property1BUTTONPRIMARYPadding="var(--padding-2xl) var(--padding-35xl)"
            property1BUTTONPRIMARYCursor="pointer"
            property1BUTTONPRIMARYFlexShrink="unset"
            cTATEXTFontSize="18px"
            cTATEXTDisplay="inline-block"
          />
        </div>
      </div>
    </section>
  );
});

export default Intro;
