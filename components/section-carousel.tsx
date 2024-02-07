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

  const pilarsDescription = {
    diet: "The food we consume directly impacts our physical health, affecting everything from our energy levels and body weight to our risk of developing chronic diseases.",
    social:
      "Strong social connections can improve our mental health and increase longevity, while loneliness and isolation can lead to a decline in mental and physical health.",
    controltoxic:
      "Excessive use of substances like alcohol, tobacco, or drugs can lead to a range of health problems, including heart disease, liver disease, respiratory problems, and mental health disorders.",
    stressmanagement:
      "Chronic stress can negatively affect both our physical and mental increase longevity leading to conditions and isolation can lead to a decline in mental and physical health.",
    sleepquality:
      "Quality sleep is essential for our body’s to repair processes, cognitive function, and overall well-being. Chronic sleep deprivation can lead to various health issues, including heart disease, obesity, and depression.",
    physicalactivities:
      "Regular physical activity strengthens our heart and muscles, improves mental health, and reduces the risk of many health conditions, including heart disease and diabetes.",
  };

  const moveIndicesToEnd = (arr: string[], index: number): string[] => {
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
        entries.forEach((entry) => {
          console.log(entry);
          const indexFirstPilar = pilars.indexOf(entry.target.id);
          const newOrderPilar = moveIndicesToEnd(pilars, indexFirstPilar);

          document
            .getElementById(newOrderPilar[0])
            ?.classList.add(styles["showHidden"]);
          newOrderPilar.forEach((res, index)=>{
            if(index !== 0){
              document
                .getElementById(res)
                ?.classList.remove(styles["showHidden"]);
            }
          })
          if (entry.intersectionRatio >= 0.7 && entry.isIntersecting) {
            newOrderPilar.forEach((res, index) => {
              if (entry.target.id !== res) {
                document
                  .getElementById(`${res}Icon`)
                  ?.classList.remove(styles["position0"]);
              }
              document
                .getElementById(`${res}Icon`)
                ?.classList.remove(styles["position2"]);
              document
                .getElementById(`${res}Icon`)
                ?.classList.remove(styles["position3"]);
              document
                .getElementById(`${res}Icon`)
                ?.classList.remove(styles["position4"]);
              document
                .getElementById(`${res}Icon`)
                ?.classList.remove(styles["position5"]);
              document
                .getElementById(`${res}Icon`)
                ?.classList.remove(styles["position6"]);

              document
                .getElementById(`${res}Icon`)
                ?.classList.add(styles[`position${index}`]);
            });

            entry.target.classList.add(styles["showHidden"]);
            return;
          }
          // entry.target.classList.remove(styles["showHidden"]);
        });
      },
      {
        threshold: 1,
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
              <i className={styles.p4}>Diet</i>
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
              <div className={styles.p4}>Social Connections</div>
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
              <div className={styles.p4}>Substance Use</div>
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
              <div className={styles.p4}>Sleep</div>
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
              <div className={styles.p4}>Stress Management</div>
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
              <div className={styles.p4}>Exercise</div>
            </div>
          </div>
        </div>
        <div className={styles.pilars}>
          {Object.keys(pilarsDescription).map((pilar) => (
            <div
              className={`${styles.box} ${styles.initHidden} `}
              key={pilar}
              id={pilar}
            >
              <div className={styles.fromNutritionAndContainer}>
                <p className={styles.understandAct}>
                  {pilarsDescription[pilar]}
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
