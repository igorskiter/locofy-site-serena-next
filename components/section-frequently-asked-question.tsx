import type { NextPage } from "next";
import { memo, useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./section-frequently-asked-question.module.css";

const SectionFrequentlyAskedQuestion: NextPage = memo(() => {
  const router = useRouter();

  const onP7TextClick = useCallback(() => {
    router.push("/faq-article");
  }, [router]);

  const onP7Text2Click = useCallback(() => {
    router.push("/faq-article");
  }, [router]);

  const onP7Text3Click = useCallback(() => {
    router.push("/faq-article");
  }, [router]);

  const onP7Text4Click = useCallback(() => {
    router.push("/faq-article");
  }, [router]);

  const onP7Text5Click = useCallback(() => {
    router.push("/faq-article");
  }, [router]);

  const onP7Text6Click = useCallback(() => {
    router.push("/faq-article");
  }, [router]);

  const onP7Text7Click = useCallback(() => {
    router.push("/faq-article");
  }, [router]);

  const onP7Text8Click = useCallback(() => {
    router.push("/faq-article");
  }, [router]);

  const onP7Text9Click = useCallback(() => {
    router.push("/faq-article");
  }, [router]);

  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.h5}>Frequently Asked Questions</div>
        <div className={styles.columns}>
          <div className={styles.article}>
            <div className={styles.chapeu2}>What is Serena Screening?</div>
            <div className={styles.p7} onClick={onP7TextClick}>
              <span>
                Serena Screening is a digital health platform that provides
                comprehensive insights into how lifestyle impacts health. It
                uses...
              </span>
              <span className={styles.readMore}>
                <b className={styles.b}>{`[ `}</b>
                <i className={styles.readMore1}>read more</i>
                <b className={styles.b}>{` ] `}</b>
              </span>
            </div>
          </div>
          <div className={styles.article}>
            <div className={styles.chapeu21}>
              How does Serena Screening work?
            </div>
            <div className={styles.p71} onClick={onP7Text2Click}>
              <span>
                It works by collecting and analyzing data related to lifestyle
                factors such as diet, exercise, sleep, and stress. This data is
                then...
              </span>
              <span className={styles.readMore}>
                <b className={styles.b}>{`[ `}</b>
                <i className={styles.readMore1}>read more</i>
                <b className={styles.b}>{` ] `}</b>
              </span>
            </div>
          </div>
          <div className={styles.article}>
            <div className={styles.chapeu22}>
              What scientific evidence supports Serena Screening?
            </div>
            <div className={styles.p72} onClick={onP7Text3Click}>
              <span>
                Serena Screening is based on the principles of lifestyle
                medicine, a field of healthcare backed by extensive scientific
                research...
              </span>
              <span className={styles.readMore}>
                <b className={styles.b}>{`[ `}</b>
                <i className={styles.readMore1}>read more</i>
                <b className={styles.b}>{` ] `}</b>
              </span>
            </div>
          </div>
          <div className={styles.article3}>
            <div className={styles.chapeu23}>
              How can Serena Screening help patients?
            </div>
            <div className={styles.p72} onClick={onP7Text4Click}>
              <span>
                It empowers doctors with actionable insights into their
                patients' health, allowing them to shift from reactive to
                proactive healthcare...
              </span>
              <span className={styles.readMore}>
                <b className={styles.b}>{`[ `}</b>
                <i className={styles.readMore1}>read more</i>
                <b className={styles.b}>{` ] `}</b>
              </span>
            </div>
          </div>
          <div className={styles.article}>
            <div className={styles.chapeu24}>
              How can Serena Screening help companies?
            </div>
            <div className={styles.p72} onClick={onP7Text5Click}>
              <span>
                Serena Screening can help companies create a healthier work
                environment by providing insights into the health of their
                employees...
              </span>
              <span className={styles.readMore}>
                <b className={styles.b}>{`[ `}</b>
                <i className={styles.readMore1}>read more</i>
                <b> ]</b>
              </span>
              <b>
                <span>{` `}</span>
              </b>
            </div>
          </div>
          <div className={styles.article}>
            <div className={styles.chapeu25}>
              How can this platform assist doctors and practitioners ?
            </div>
            <div className={styles.p75} onClick={onP7Text6Click}>
              <span>
                Our platform can save doctors time by providing them with a
                comprehensive overview of a patient's health before the visit.
                This allows...
              </span>
              <span className={styles.readMore}>
                <b className={styles.b}>{`[ `}</b>
                <i className={styles.readMore1}>read more</i>
                <b className={styles.b10}>{` ] `}</b>
              </span>
              <b className={styles.b10}>
                <span>{` `}</span>
              </b>
            </div>
          </div>
          <div className={styles.article6}>
            <div className={styles.chapeu26}>How is data privacy ensured?</div>
            <div className={styles.p72} onClick={onP7Text7Click}>
              <span>
                We take data privacy very seriously. We comply with all relevant
                data protection laws and regulations. All data is stored
                securely, and we do not...
              </span>
              <span className={styles.readMore}>
                <b className={styles.b}>{`[ `}</b>
                <i className={styles.readMore1}>read more</i>
                <b className={styles.b}>{` ] `}</b>
              </span>
            </div>
          </div>
          <div className={styles.article}>
            <div className={styles.chapeu27}>
              How accurate is the AI used in the platform?
            </div>
            <div className={styles.p72} onClick={onP7Text8Click}>
              <span>
                The AI in Serena Screening is highly accurate. It's based on
                advanced machine learning algorithms that have been trained on
                large...
              </span>
              <span className={styles.readMore}>
                <b className={styles.b}>{`[ `}</b>
                <i className={styles.readMore1}>read more</i>
                <b className={styles.b}>{` ] `}</b>
              </span>
            </div>
          </div>
          <div className={styles.article}>
            <div className={styles.chapeu27}>
              What support is available to users?
            </div>
            <div className={styles.p72} onClick={onP7Text9Click}>
              <span>
                We offer comprehensive support to all users. If you have any
                questions or need assistance, you can reach out to our support
                team...
              </span>
              <span className={styles.readMore}>
                <b className={styles.b}>{`[ `}</b>
                <i className={styles.readMore1}>read more</i>
                <b className={styles.b}>{` ] `}</b>
              </span>
            </div>
          </div>
          <div className={styles.column} />
          <div className={styles.column1} />
          <div className={styles.column2} />
        </div>
      </div>
    </div>
  );
});

export default SectionFrequentlyAskedQuestion;
