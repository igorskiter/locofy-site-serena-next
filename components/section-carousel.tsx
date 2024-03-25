"use client";
import type { NextPage } from "next";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import styles from "./section-carousel.module.css";

const SectionCarousel: NextPage = memo(() => {
  const pilarsRef = useRef([]);
  const [beforePosition, setBeforePosition] = useState(-1);
  const [position, setPosition] = useState(0);
  const [nextPosition, setNextPosition] = useState(1);
  const [initialPosition, setInitialPosition] = useState({});
  const pilars = [
    "diet",
    "social",
    "controltoxic",
    "stressmanagement",
    "sleepquality",
    "physicalactivities",
  ];

  const pilarsDescription = {
    diet: {
      description:
        "The food we consume directly impacts our physical health, affecting everything from our energy levels and body weight to our risk of developing chronic diseases.",
    },
    social: {
      description:
        "Strong social connections can improve our mental health and increase longevity, while loneliness and isolation can lead to a decline in mental and physical health.",
    },
    controltoxic: {
      description:
        "Use of substances like alcohol, tobacco, or drugs can lead to a range of health problems, including heart disease, liver disease, respiratory problems, and mental health disorders.",
    },
    stressmanagement: {
      description:
        "Chronic stress can negatively affect both our physical and mental increase longevity leading to conditions and isolation can lead to a decline in mental and physical health.",
    },
    sleepquality: {
      description:
        "Quality sleep is essential for our body’s to repair processes, cognitive function, and overall well-being. Chronic sleep deprivation can lead to various health issues, including heart disease, obesity, and depression.",
    },
    physicalactivities: {
      description:
        "Regular physical activity strengthens our heart and muscles, improves mental health, and reduces the risk of many health conditions, including heart disease and diabetes.",
    },
  };

  const moveIndicesToEnd = (arr: string[], index: number): string[] => {
    if (index < 0 || index >= arr.length) {
      console.log(index, "moveIndicesToEnd");
      index = 0;
    }

    const firstPart = arr.slice(0, index);
    const secondPart = arr.slice(index);
    const newArray = [...secondPart, ...firstPart];

    return newArray;
  };

  useEffect(() => {
    pilars.forEach((res, index) => {
      const elmnt = pilarsRef[index];
      console.log(elmnt.offsetTop, ".offsetTop");
      setInitialPosition((prevState) => ({
        ...prevState,
        [res]: elmnt.offsetTop,
      }));
    });
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      if (
        typeof window !== "undefined" &&
        pilarsRef[0] &&
        pilarsRef[0].getBoundingClientRect
      ) {
        let { top, height } = pilarsRef[0].getBoundingClientRect();
        let direction = lastScrollY < window.scrollY ? "down" : "up";
        lastScrollY = window.scrollY;

        const positionDown =
          -(top / height) <= 0 ? 0 : -(top / height) > 5 ? 5 : -(top / height);

        const positionRound = +Math.round(positionDown);

        console.log(
          top,
          height,
          beforePosition,
          positionRound,
          nextPosition,
          "direction"
        );

        if (
          window.innerWidth < 1024 &&
          top >= 0 &&
          top <= 300 &&
          beforePosition === -1 &&
          positionRound === 0 &&
          nextPosition === 1 &&
          direction === "down"
        ) {
          console.log("GO TO DIEAT");
          window.scrollTo({
            behavior: "smooth",
            top: initialPosition["diet"],
          });
        }

        if (
          window.innerWidth < 1024 &&
          top >= 0 &&
          top <= 130 &&
          beforePosition === -1 &&
          positionRound === 0 &&
          nextPosition === 1 &&
          direction === "up"
        ) {
          console.log("GO TO DIEAT");
          window.scrollTo({
            behavior: "smooth",
            top: initialPosition["diet"] - height,
          });
        }

        if (
          positionRound !== nextPosition ||
          positionRound !== beforePosition
        ) {
          console.log("direction CHANGE");
          setPosition((prevState) => {
            if (positionRound === prevState) {
              return prevState;
            }
            return positionRound;
          });
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [beforePosition, position, nextPosition]);

  useEffect(() => {
    console.log("enter position", beforePosition, position, nextPosition);
    changePosition(position);
    setBeforePosition(position - 1 >= -1 ? position - 1 : -1);
    setNextPosition(position + 1 <= 5 ? position + 1 : 5);
  }, [position]);

  const changePosition = useCallback(
    (position: number) => {
      const newOrderPilar = moveIndicesToEnd(pilars, position);

      newOrderPilar.forEach((res, index) => {
        document.getElementById(`${res}`)?.classList.add(styles["showHidden"]);
        document
          .getElementById(`${res}Icon`)
          ?.classList.remove(styles["position0"]);
        document
          .getElementById(`${res}Icon`)
          ?.classList.remove(styles["position1"]);
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

        document
          .getElementById(`${res}`)
          ?.classList.remove(styles["showHidden"]);

        if (index === 0) {
          document
            .getElementById(`${res}`)
            ?.classList.add(styles["showHidden"]);

          window.scrollTo({
            behavior: "smooth",
            top: initialPosition[res],
          });
        }
      });
    },
    [initialPosition]
  );

  return (
    <section className={styles.sectioncarousel} id={"SectionCarousel"}>
      <div className={styles.content}>
        <div className={styles.carousel}>
          <div className={styles.p1} id="p1">
            <span className={styles.understandAct}>
              <span className={styles.understand}>{`Understand. `}</span>
              <br />
              <i className={styles.act}>Act.</i>
              <i className={styles.i}>{` `}</i>
              <br />
              <span className={styles.prevent}>Prevent.</span>
            </span>
          </div>
          <div className={styles.pilares} id="pilares">
            <div
              id="dietIcon"
              className={`${styles.boxPilar}  ${styles.position0} ${styles.diet}`}
            >
              <img
                className={styles.icondiet}
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
                className={styles.iconsocialconnections}
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
              id="stressmanagementIcon"
              className={`${styles.boxPilar} ${styles.position3} ${styles.stressmanagement}`}
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
              id="sleepqualityIcon"
              className={`${styles.boxPilar} ${styles.position4} ${styles.sleepquality}`}
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
        <div className={styles.pilars} id="pilars">
          <div
            className={`${styles.box} ${styles.initHidden} ${styles.pilarContainerIntro}`}
          >
            <div className={`${styles.pilarContainer}`}>
              <p
                className={`${styles.understandAct} ${styles.understandActTitle}`}
              >
                From nutrition and physical activity to sleep patterns and
                stress management, we delve into various aspects of your daily
                life
              </p>
              <p className={styles.understandAct}>
                With this knowledge, it is possible to identify potential risks
                early, make informed decisions, and transition from reactive
                healthcare to proactive, preventive care.
              </p>
            </div>
          </div>
          {Object.keys(pilarsDescription).map((pilar, index) => (
            <div
              ref={(ref) => (pilarsRef[index] = ref)}
              className={`${styles.box} ${styles.initHidden}`}
              key={pilar}
              id={pilar}
            >
              <div className={styles.pilarContainer}>
                {pilarsDescription[pilar].title && (
                  <p
                    className={`${styles.understandAct} ${styles.understandActTitle}`}
                  >
                    {pilarsDescription[pilar].title}
                  </p>
                )}
                <p className={styles.understandAct}>
                  {pilarsDescription[pilar].description}
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
