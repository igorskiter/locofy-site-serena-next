import type { NextPage } from "next";
import { useRouter } from "next/router";
import { memo, useCallback } from "react";
import Card from "./card";
import styles from "./section-cards.module.css";

const SectionCards: NextPage = memo(() => {
  const router = useRouter();

  const onCardDoctorClick = useCallback(() => {
    window.open("https://screening.serenacare.app/");
  }, []);

  const onCardPatientsClick = useCallback(() => {
    window.open("https://screening.serenacare.app/");
  }, []);

  const onCardCompaniesClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <section className={styles.sectioncards} id="SectionCards">
      <div className={styles.cards}>
        <Card
          onCardClick={onCardDoctorClick}
          title={"DOCTORS"}
          subTitle={"upgraded"}
          subTitleEmphasis={`Your practice,`}
          description={`Experience Serena Screening, a tool that provides instant understanding on how lifestyle factors impact your patients' health.`}
          buttonText={"learn more"}
          imageCard={"/doctors1@2x.png"}
        />
        <Card
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
    </section>
  );
});

export default SectionCards;
