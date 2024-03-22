"use client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import Card from "./card";
import styles from "./section-cards.module.scss";

const SectionCards: NextPage = memo(() => {
  const router = useRouter();
  let cardRef = useRef();
  let cardsRef = useRef();
  const [cardSelection, setCarSelection] = useState(1);

  const onCardDoctorClick = useCallback(() => {
    router.push("/doctors");
  }, []);

  const onCardPatientsClick = useCallback(() => {
    window.open("https://screening.serenacare.app/");
  }, []);

  const onCardCompaniesClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  // const scrollCard = useCallback((card) => {
  //   console.log(card, cardRef[card].scrollTo, " ref.current");
  //   cardRef[card].scrollTo(0, 0);
  // }, []);

  const scrollCard = (index: number) => {
    if (cardsRef[0]) {
      const containerWidth = cardsRef[0].clientWidth;
      const cardWidth = cardsRef[0].children[0].clientWidth;

      cardsRef[0].scrollTo({
        left: +(
          index * cardWidth -
          (containerWidth - cardWidth) / 2 +
          26
        ).toFixed(0),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollCard(1);
  }, []);

  return (
    <section className={styles.sectioncards} id="SectionCards">
      <div
        ref={(ref) => (cardsRef[0] = ref)}
        className={styles.cards}
        onScroll={(e) => {
          const containerWidth = cardsRef[0].clientWidth;
          const cardWidth = cardsRef[0].children[0].clientWidth;
          const position = +(
            e.currentTarget.scrollLeft /
            (cardWidth - (containerWidth - cardWidth) / 2 + 26)
          ).toFixed(0);

          setCarSelection(position);
        }}
      >
        <Card
          ref={(ref) => (cardRef[0] = ref)}
          onCardClick={onCardPatientsClick}
          title={"PATIENTS"}
          subTitle={"your health."}
          subTitleEmphasis={`Take control of `}
          description={`Experience Serena Screening, a tool that provides instant
          understanding on how lifestyle factors impact your patients'
          health.`}
          buttonText={"learn more"}
          imageCard={"/imagepatients@2x.png"}
        />
        <Card
          ref={(ref) => (cardRef[1] = ref)}
          onCardClick={onCardDoctorClick}
          title={"DOCTORS"}
          subTitle={"upgraded"}
          subTitleEmphasis={`Your practice,`}
          description={`Experience Serena Screening, a tool that provides instant understanding on how lifestyle factors impact your patients' health.`}
          buttonText={"learn more"}
          imageCard={"/doctors1@2x.png"}
        />
        <Card
          ref={(ref) => (cardRef[2] = ref)}
          onCardClick={onCardCompaniesClick}
          title={"COMPANIES"}
          subTitle={"to proactive."}
          subTitleEmphasis={`From reactive `}
          description={`Experience Serena Screening, a tool that provides instant
          understanding on how lifestyle factors impact your patients'
          health.`}
          buttonText={"learn more"}
          imageCard={"/companies@2x.png"}
        />
      </div>
      <div className={styles.bullets}>
        <div
          data-selection={cardSelection === 0}
          className={styles.bullet}
          onClick={() => {
            scrollCard(0);
            setCarSelection(0);
          }}
        ></div>
        <div
          data-selection={cardSelection === 1}
          className={styles.bullet}
          onClick={() => {
            scrollCard(1);
            setCarSelection(1);
          }}
        ></div>
        <div
          data-selection={cardSelection === 2}
          className={styles.bullet}
          onClick={() => {
            scrollCard(2);
            setCarSelection(2);
          }}
        ></div>
      </div>
    </section>
  );
});

export default SectionCards;
