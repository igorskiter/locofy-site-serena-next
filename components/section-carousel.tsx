"use client";
import type { NextPage } from "next";
import { memo } from "react";
import styles from "./section-carousel.module.css";

const SectionCarousel: NextPage = memo(() => {
  const pilars = [
    "diet",
    "social",
    "controltoxic",
    "stressmanagement",
    "sleepquality",
    "physicalactivities",
  ];

  type MyArray = string[];

  const moveIndicesToEnd = (arr: MyArray, index: number): MyArray => {
    if (index < 0 || index >= arr.length) {
      console.error("Índice inválido");
      return arr;
    }

    const firstPart = arr.slice(0, index);
    const secondPart = arr.slice(index);
    const newArray = [...secondPart, ...firstPart];

    return newArray;
  };

  if (typeof window !== "undefined" && window.IntersectionObserver) {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries[0].target.id);

        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.6 && entry.isIntersecting) {
            const indexFirstPilar = pilars.indexOf(entry.target.id);
            const newOrderPilar = moveIndicesToEnd(pilars, indexFirstPilar);
            console.log(
              newOrderPilar,
              document.getElementById(entry.target.id)
            );

            newOrderPilar.forEach((res, index) => {
              console.log(res)
              if(entry.target.id !== res){
                document.getElementById(`${res}Icon`)?.classList.remove(styles["position0"]);
              }
              document.getElementById(`${res}Icon`)?.classList.remove(styles["position2"]);
              document.getElementById(`${res}Icon`)?.classList.remove(styles["position3"]);
              document.getElementById(`${res}Icon`)?.classList.remove(styles["position4"]);
              document.getElementById(`${res}Icon`)?.classList.remove(styles["position5"]);
              document.getElementById(`${res}Icon`)?.classList.remove(styles["position6"]);

              document.getElementById(`${res}Icon`)?.classList.add(styles[`position${index}`]);
            });
            entry.target.classList.add(styles["showHidden"]);
            return;
          }

          entry.target.classList.remove(styles["showHidden"]);
        });
      },
      {
        threshold: [0, 0.6, 1],
      }
    );
    pilars.forEach((pilar) => {
      observer.observe(document.getElementById(pilar) as HTMLElement);
    });
  }

  return (
    <section className={styles.sectioncarousel} id={"SectionCarousel"}>
      <div className={styles.content}>
        <div className={styles.carousel}>
          <div className={styles.p1} id="p1">
            <p className={styles.understandAct}>
              <span className={styles.understand}>{`Understand. `}</span>
              <i className={styles.act}>Act.</i>
              <i className={styles.i}>{` `}</i>
            </p>
            <p className={styles.prevent}>Prevent.</p>
          </div>
          <div className={styles.pilares} id="pilares">
            <div
              id="dietIcon"
              className={`${styles.boxPilar}  ${styles.position0} ${styles.diet}`}
            >
              <img
                className={styles.blurIcon1}
                alt="IconDiet"
                id="IconDiet"
                src="/IconDiet@2x.png"
              />
              <i className={styles.p43}>Diet</i>
            </div>
            <div
              id="socialIcon"
              className={`${styles.boxPilar}  ${styles.position1} ${styles.social}`}
            >
              <img
                className={styles.blurIcon}
                alt="IconSocial"
                id="IconSocial"
                src="/IconSocial@2x.png"
              />
              <div className={styles.p42}>Conexões emocionais</div>
            </div>
            <div
              id="controltoxicIcon"
              className={`${styles.boxPilar}  ${styles.position2} ${styles.controltoxic}`}
            >
              <div className={styles.blur3}>
                <img
                  className={styles.iconcontroltoxic}
                  alt=""
                  src="/iconcontroltoxic.svg"
                />
              </div>
              <div className={styles.p44}>Controle de tóxicos</div>
            </div>
            <div
              id="sleepqualityIcon"
              className={`${styles.boxPilar} ${styles.position3} ${styles.sleepquality}`}
            >
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
            <div
              id="stressmanagementIcon"
              className={`${styles.boxPilar} ${styles.position4} ${styles.stressmanagement}`}
            >
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
            <div
              id="physicalactivitiesIcon"
              className={`${styles.boxPilar}  ${styles.position5} ${styles.physicalactivities}`}
            >
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
          </div>
        </div>
        <div className={styles.pilars}>
          {pilars.map((pilar) => (
            <div
              className={`${styles.box} ${styles.initHidden} `}
              key={pilar}
              id={pilar}
            >
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
                <p className={styles.understandAct}>
                  proactive, preventive care.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default SectionCarousel;
