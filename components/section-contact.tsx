import type { NextPage } from "next";
import { memo } from "react";
import styles from "./section-contact.module.css";

const SectionContact: NextPage = memo(() => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.h1}>
            <span className={styles.weWantTo}>{`We want to `}</span>
            <br/>
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
            <input
              className={styles.line1}
              name="name"
              id="name"
              placeholder="Name*"
              type="text"
              required={true}
            />
            <input
              className={styles.line1}
              name="surname"
              id="surname"
              placeholder="Surname*"
              type="text"
              required={true}
            />
            <input
              className={styles.line1}
              name="email"
              id="email"
              placeholder="E-mail*"
              type="email"
              required={true}
            />
            <input
              className={styles.line1}
              name="phone"
              id="phone"
              placeholder="Phone number (Optional)"
              type="text"
              required={true}
            />
            <div className={styles.line3}>
              <div className={styles.input2}>
                <div className={styles.companyName}>Company Name*</div>
              </div>
            </div>
            <div className={styles.select}>
              <select className={styles.line4} required={true}>
                <option value="" disabled selected>
                  Subject*
                </option>
                <option value="teste1">teste1</option>
                <option value="teste2">teste2</option>
              </select>
            </div>
            <textarea
              className={styles.line5}
              placeholder="Type your message here.*"
              required={true}
            />
            <button className={styles.button}>
              <div className={styles.send}>Send</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SectionContact;
