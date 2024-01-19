import type { NextPage } from "next";
import { memo } from "react";
import styles from "./section-contact-company.module.css";

const SectionContactCompany: NextPage = memo(() => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.h1}>
            <span className={styles.weWantTo}>{`We want to `}</span>
            <i className={styles.hearFromYou}>hear from you</i>
            <i className={styles.i}>.</i>
          </div>
          <div className={styles.p3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.form}>
            <div className={styles.line}>
              <div className={styles.input}>
                <div className={styles.name}>Name*</div>
              </div>
              <div className={styles.input}>
                <div className={styles.name}>Surname*</div>
              </div>
            </div>
            <div className={styles.line1}>
              <div className={styles.input2}>
                <div className={styles.name}>E-mail*</div>
              </div>
            </div>
            <div className={styles.line1}>
              <div className={styles.input2}>
                <div className={styles.name}>Phone number (Optional)</div>
              </div>
            </div>
            <div className={styles.line1}>
              <div className={styles.input2}>
                <div className={styles.name}>Company Name*</div>
              </div>
            </div>
            <div className={styles.line1}>
              <div className={styles.input5}>
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="/chevrondown.svg"
                />
                <div className={styles.name}>Subject*</div>
              </div>
            </div>
            <div className={styles.line1}>
              <div className={styles.input6}>
                <div className={styles.name}>Type your message here.*</div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.send}>Send</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SectionContactCompany;
