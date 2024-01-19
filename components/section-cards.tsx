import type { NextPage } from "next";
import { memo } from "react";
import styles from "./section-cards.module.css";

const SectionCards: NextPage = memo(() => {
  return (
    <section className={styles.sectioncards} id="SectionCards">
      <div className={styles.cards}>
        <div className={styles.carddoctor}>
          <div className={styles.cardcontent}>
            <div className={styles.gradient}>
              <div className={styles.imagegradient} />
            </div>
            <img className={styles.doctorsIcon} alt="" src="/doctors1@2x.png" />
            <div className={styles.cardtitle}>
              <div className={styles.subtitle}>
                <b className={styles.p6}>PATIENTS</b>
              </div>
              <div className={styles.h4}>
                <span>{`Take control of `}</span>
                <i className={styles.yourHealth}>your health.</i>
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.experienceSerenaScreening}>
                Experience Serena Screening, a tool that provides instant
                understanding on how lifestyle factors impact your patients'
                health.
              </div>
            </div>
            <div className={styles.button}>
              <button className={styles.buttonprimary} id="ButtonPrimary">
                <b className={styles.ctaText}>learn more</b>
              </button>
              <div className={styles.buttonClic}>
                <div className={styles.boundingBox} />
                <b className={styles.ctaText1}>DISCOVER</b>
              </div>
              <div className={styles.buttonHover}>
                <div className={styles.boundingBox1} />
                <b className={styles.ctaText1}>DISCOVER</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.carddoctor}>
          <div className={styles.cardcontent}>
            <div className={styles.gradient}>
              <div className={styles.imagegradient} />
            </div>
            <div className={styles.patients}>
              <img
                className={styles.imagepatientsIcon}
                alt=""
                src="/imagepatients@2x.png"
              />
            </div>
            <div className={styles.cardtitle}>
              <div className={styles.subtitle}>
                <b className={styles.p6}>PATIENTS</b>
              </div>
              <div className={styles.h4}>
                <span>{`Take control of `}</span>
                <i className={styles.yourHealth}>your health.</i>
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.experienceSerenaScreening}>
                Experience Serena Screening, a tool that provides instant
                understanding on how lifestyle factors impact your patients'
                health.
              </div>
            </div>
            <div className={styles.button1}>
              <button className={styles.buttonprimary} id="ButtonPrimary">
                <b className={styles.ctaText}>learn more</b>
              </button>
              <div className={styles.buttonClic}>
                <div className={styles.boundingBox} />
                <b className={styles.ctaText1}>DISCOVER</b>
              </div>
              <div className={styles.buttonHover}>
                <div className={styles.boundingBox1} />
                <b className={styles.ctaText1}>DISCOVER</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.carddoctor}>
          <div className={styles.cardcontent}>
            <div className={styles.gradient}>
              <div className={styles.imagegradient} />
            </div>
            <img
              className={styles.companiesIcon}
              alt=""
              src="/companies@2x.png"
            />
            <div className={styles.cardtitle}>
              <div className={styles.subtitle}>
                <b className={styles.p6}>COMPANIES</b>
              </div>
              <div className={styles.h4}>
                <p className={styles.fromReactive}>From reactive</p>
                <p className={styles.toProactive}>
                  <i className={styles.toProactive1}>to proactive.</i>
                </p>
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.experienceSerenaScreening}>
                Experience Serena Screening, a tool that provides instant
                understanding on how lifestyle factors impact your patients'
                health.
              </div>
            </div>
            <div className={styles.button1}>
              <button className={styles.buttonprimary} id="ButtonPrimary">
                <b className={styles.ctaText}>learn more</b>
              </button>
              <div className={styles.buttonClic}>
                <div className={styles.boundingBox} />
                <b className={styles.ctaText1}>DISCOVER</b>
              </div>
              <div className={styles.buttonHover}>
                <div className={styles.boundingBox1} />
                <b className={styles.ctaText1}>DISCOVER</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default SectionCards;
