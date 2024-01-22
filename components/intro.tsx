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
          <p className={styles.redefining}>
            <span>
              <span className={styles.ourRelationship}>{`Redefining `}</span>
            </span>
          </p>
          <p className={styles.redefining}>
            <span>
              <span className={styles.ourRelationship}>our relationship</span>
              <i className={styles.i}>{` `}</i>
            </span>
            <i className={styles.withHealth}>with health</i>
          </p>
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
