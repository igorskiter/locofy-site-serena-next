import type { NextPage } from "next";
import { memo } from "react";
import styles from "./section-carousel.module.css";

const SectionCarousel: NextPage = memo(() => {
  return (
    <section className={styles.sectioncarousel} id="SectionCarousel">
      <div className={styles.pilars}>
        <div className={styles.carousel}>
          <div className={styles.p1}>
            <p className={styles.understandAct}>
              <span className={styles.understand}>{`Understand. `}</span>
              <i className={styles.act}>Act.</i>
              <i className={styles.i}>{` `}</i>
            </p>
            <p className={styles.prevent}>Prevent.</p>
          </div>
          <div className={styles.pilares}>
            <div className={styles.stressmanagement}>
              <div className={styles.blur}>
                <img
                  className={styles.iconstressmanagement}
                  alt="IconStressManagement"
                  id="IconStressManagement"
                  src="/IconStressManagement@2x.png"
                />
              </div>
              <div className={styles.manejoDoEstresse}>Manejo do estresse</div>
            </div>
            <div className={styles.sleepquality}>
              <div className={styles.blur1}>
                <img
                  className={styles.iconsleepquality}
                  alt="IconSleepQuality"
                  id="IconSleepQuality"
                  src="/IconSleepQuality@2x.png"
                />
              </div>
              <div className={styles.p4}>Sono de qualidade</div>
            </div>
            <div className={styles.physicalactivities}>
              <div className={styles.blur2}>
                <img
                  className={styles.iconphysicalactivities}
                  alt="IconPhysicalActivities"
                  id="IconPhysicalActivities"
                  src="/IconPhysicalActivities@2x.png"
                />
              </div>
              <div className={styles.p41}>Atividades físicas</div>
            </div>
            <div className={styles.social}>
              <img
                className={styles.blurIcon}
                alt="IconSocial"
                id="IconSocial"
                src="/IconSocial@2x.png"
              />
              <div className={styles.p42}>Conexões emocionais</div>
            </div>
            <div className={styles.diet}>
              <img
                className={styles.blurIcon1}
                alt="IconDiet"
                id="IconDiet"
                src="/IconDiet@2x.png"
              />
              <i className={styles.p43}>Diet</i>
            </div>
            <div className={styles.controltoxic}>
              <div className={styles.blur3}>
                <img
                  className={styles.iconcontroltoxic}
                  alt=""
                  src="/iconcontroltoxic.svg"
                />
              </div>
              <div className={styles.p44}>Controle de tóxicos</div>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.fromNutritionAndContainer}>
            <p className={styles.understandAct}>
              From nutrition and physical activity to sleep
            </p>
            <p
              className={styles.understandAct}
            >{`patterns and stress management, we delve `}</p>
            <p className={styles.understandAct}>
              into various aspects of your daily life.
            </p>
          </div>
          <div className={styles.withThisKnowledgeContainer}>
            <p className={styles.understandAct}>
              With this knowledge, it is possible to identify
            </p>
            <p className={styles.understandAct}>
              potential risks early, make informed decisions,
            </p>
            <p className={styles.understandAct}>
              and transition from reactive healthcare to
            </p>
            <p className={styles.understandAct}>proactive, preventive care.</p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default SectionCarousel;
