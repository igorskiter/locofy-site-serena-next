"use client";
import type { NextPage } from "next";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import ReactPageScroller from "../react-page-scroller-igorskiter/src";
import styles from "./section-carousel.module.css";

const SectionCarousel: NextPage = memo(() => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobileResponsive, setIsMobileResponsive] = useState(false);
  const [isCentered, setIsCentered] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const pilars = [
    "diet",
    "social",
    "controltoxic",
    "stressmanagement",
    "sleepquality",
    "physicalactivities",
  ];

  const pilarsDescription = {
    diet: "From nutrition and physical activity to sleep patterns and stress management, we delve  into various aspects of your daily life.",
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

  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("resize", () =>
        setIsMobileResponsive(window.innerWidth < 768)
      );
    }
    const handleScroll = () => {
      if (divRef.current && !isMobileResponsive) {
        const rect = divRef.current.getBoundingClientRect();
        const centerY = rect.height / 2;
        console.log(isCentered, rect.top, rect.bottom, centerY, centerY + 380);
        if (rect.top <= 0 && rect.bottom >= centerY + 380 && !isCentered) {
          console.log("setIsCentered true");
          setIsCentered(true);
          document.body.style.overflow = "hidden";
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const newOrderPilar = moveIndicesToEnd(pilars, currentPage);

    newOrderPilar.forEach((res, index) => {
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
    });
  }, [currentPage]);

  const handleScrollUnavailable = useCallback(() => {
    document.body.style.overflow = "auto";

    if (divRef) {
      const rect = divRef?.current?.getBoundingClientRect();
      if (rect && currentPage === 0) {
        document.body.scrollTo(0, rect.height + 2000);
        setIsCentered(false);
      }
      if (rect && currentPage === 5) {
        document.body.scrollTo(0, rect.height + 2000);
        setIsCentered(false);
      }
      document.body.style.overflow = "auto";

      console.log(currentPage, "isMobileResponsive");
    }
  }, [currentPage]);

  return (
    <section className={styles.sectioncarousel}>
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
        <div
          ref={divRef}
          id={"SectionCarousel"}
          className={styles.sectioncarouselcontent}
          style={{
            position: "sticky",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            minWidth: isMobileResponsive ? "100vw" : "100%",
            zIndex: 1000,
          }}
        >
          <ReactPageScroller
            pageOnChange={handlePageChange}
            customPageNumber={currentPage}
            renderAllPagesOnFirstRender={false}
            containerHeight="100vh"
            containerWidth={isMobileResponsive ? "100vw" : "100%"}
            animationTimer={500}
            animationTimerBuffer={100}
            handleScrollUnavailable={handleScrollUnavailable}
            blockScrollUp={!isCentered}
            blockScrollDown={!isCentered}
            onBeforePageScroll={() => {
              document.getElementById("SectionCarousel")?.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "center",
              });
              // if (currentPage > 0 && currentPage < 5) {
              //   document.body.style.overflow = "hidden";
              //   return;
              // }
            }}
          >
            <div className={`${styles.box}`} id={"diet"}>
              <div className={styles.fromNutritionAndContainer}>
                <p className={styles.understandAct}>
                  {pilarsDescription["diet"]}
                </p>
              </div>
            </div>
            <div className={`${styles.box}`} id={"social"}>
              <div className={styles.fromNutritionAndContainer}>
                <p className={styles.understandAct}>
                  {pilarsDescription["social"]}
                </p>
              </div>
            </div>
            <div className={`${styles.box}`} id={"controltoxic"}>
              <div className={styles.fromNutritionAndContainer}>
                <p className={styles.understandAct}>
                  {pilarsDescription["controltoxic"]}
                </p>
              </div>
            </div>
            <div className={`${styles.box}`} id={"stressmanagement"}>
              <div className={styles.fromNutritionAndContainer}>
                <p className={styles.understandAct}>
                  {pilarsDescription["stressmanagement"]}
                </p>
              </div>
            </div>
            <div className={`${styles.box}`} id={"sleepquality"}>
              <div className={styles.fromNutritionAndContainer}>
                <p className={styles.understandAct}>
                  {pilarsDescription["sleepquality"]}
                </p>
              </div>
            </div>
            <div className={`${styles.box}`} id={"physicalactivities"}>
              <div className={styles.fromNutritionAndContainer}>
                <p className={styles.understandAct}>
                  {pilarsDescription["physicalactivities"]}
                </p>
              </div>
            </div>
          </ReactPageScroller>
        </div>
      </div>
    </section>
  );
});

export default SectionCarousel;
