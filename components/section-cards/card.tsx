import { forwardRef } from "react";
import styles from "./section-cards.module.scss";

interface CardProps {
  onCardClick: () => void;
  title: string;
  subTitle: string;
  subTitleEmphasis: string;
  description: string;
  buttonText: string;
  imageCard: string;
}

const card = forwardRef(
  (
    {
      onCardClick,
      title,
      subTitle,
      subTitleEmphasis,
      description,
      buttonText,
      imageCard,
    }: CardProps,
    ref: any
  ) => {
    const backgroundStyle = {
      borderRadius: "var(--br-xl)",
      maxHeight: "51.13rem",
    };
    /**
   * max-height: 51.13rem;
    background-color: #00000082;
    border-radius: var(--br-xl);
   */
    return (
      <div ref={ref} className={styles.card} onClick={onCardClick}>
        <div className={styles.cardcontent}>
          <div className={styles.gradient} style={backgroundStyle}>
            <img className={styles.imagegradient} alt="" src={imageCard} />
          </div>
          <div className={styles.cardtitle}>
            <div className={styles.subtitle}>
              <b className={styles.p6}>{title}</b>
            </div>
            <div className={styles.h4}>
              <span>{subTitleEmphasis}</span>
              <i className={styles.subTitleEmphasis}>{subTitle}</i>
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.descriptionText}>{description}</div>
          </div>
          <div className={styles.button}>
            <button className={styles.buttonprimary} id="ButtonPrimary">
              <b className={styles.ctaText}>{buttonText}</b>
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default card;
