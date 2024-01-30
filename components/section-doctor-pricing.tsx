import type { NextPage } from "next";
import { memo } from "react";
import styles from "./section-doctor-pricing.module.css";

const SectionDoctorPricing: NextPage = memo(() => {
  return (
    <div className={styles.section}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.price}>
            <b className={styles.basic}>BASIC</b>
            <div className={styles.mo}>
              <b>$29</b>
              <span className={styles.mo1}>/mo</span>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.topics}>
              <div className={styles.topic1}>
                <div className={styles.item}>
                  <div className={styles.serenaScreeningsMonth}>
                    <div className={styles.serenaScreenings}>
                      Serena Screenings / month
                    </div>
                  </div>
                  <div className={styles.div}>
                    <div className={styles.serenaScreenings}>20</div>
                  </div>
                </div>
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
              <div className={styles.topic1}>
                <div className={styles.item}>
                  <div className={styles.serenaScreeningsMonth}>
                    <div className={styles.serenaScreenings}>
                      Patient score evolution monitoring
                    </div>
                  </div>
                  <img
                    className={styles.iconCheck}
                    alt=""
                    src="/icon-check.svg"
                  />
                </div>
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
              <div className={styles.topic1}>
                <div className={styles.item}>
                  <div className={styles.serenaScreeningsMonth}>
                    <div className={styles.serenaScreenings}>
                      Access to Serena Circle
                    </div>
                  </div>
                  <img
                    className={styles.iconCheck}
                    alt=""
                    src="/icon-check.svg"
                  />
                </div>
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
              <div className={styles.topic1}>
                <div className={styles.item}>
                  <div className={styles.serenaScreeningsMonth}>
                    <div className={styles.serenaScreenings}>
                      Group mentorship with Dr. Silvia Lagrotta
                    </div>
                  </div>
                  <img className={styles.iconCheck} alt="" src="/x.svg" />
                </div>
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.buttoprimary}>
              <b className={styles.ctaText}>sign up</b>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.price}>
            <b className={styles.basic}>PREMIUM</b>
            <div className={styles.mo}>
              <b>$54</b>
              <span className={styles.mo1}>/mo</span>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.topics}>
              <div className={styles.topic1}>
                <div className={styles.item}>
                  <div className={styles.serenaScreeningsMonth}>
                    <div className={styles.serenaScreenings}>
                      Serena Screenings / month
                    </div>
                  </div>
                  <div className={styles.div}>
                    <div className={styles.serenaScreenings}>20</div>
                  </div>
                </div>
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
              <div className={styles.topic1}>
                <div className={styles.item}>
                  <div className={styles.serenaScreeningsMonth}>
                    <div className={styles.serenaScreenings}>
                      Patient score evolution monitoring
                    </div>
                  </div>
                  <img
                    className={styles.iconCheck}
                    alt=""
                    src="/icon-check.svg"
                  />
                </div>
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
              <div className={styles.topic1}>
                <div className={styles.item}>
                  <div className={styles.serenaScreeningsMonth}>
                    <div className={styles.serenaScreenings}>
                      Access to Serena Circle
                    </div>
                  </div>
                  <img
                    className={styles.iconCheck}
                    alt=""
                    src="/icon-check.svg"
                  />
                </div>
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
              <div className={styles.topic1}>
                <div className={styles.item}>
                  <div className={styles.serenaScreeningsMonth}>
                    <div className={styles.serenaScreenings}>
                      Group mentorship with Dr. Silvia Lagrotta
                    </div>
                  </div>
                  <div className={styles.div}>
                    <div className={styles.serenaScreenings}>8</div>
                  </div>
                </div>
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.buttoprimary}>
              <b className={styles.ctaText}>sign up</b>
            </div>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.price2}>
            <b className={styles.vip}>VIP</b>
            <div className={styles.mo}>
              <b>$84</b>
              <span className={styles.mo1}>/mo</span>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.topics}>
              <div className={styles.topic1}>
                <div className={styles.item}>
                  <div className={styles.serenaScreeningsMonth}>
                    <div className={styles.serenaScreenings}>
                      Serena Screenings / month
                    </div>
                  </div>
                  <div className={styles.div}>
                    <div className={styles.serenaScreenings}>20</div>
                  </div>
                </div>
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
              <div className={styles.topic1}>
                <div className={styles.item}>
                  <div className={styles.serenaScreeningsMonth}>
                    <div className={styles.serenaScreenings}>
                      Patient score evolution monitoring
                    </div>
                  </div>
                  <img
                    className={styles.iconCheck}
                    alt=""
                    src="/icon-check.svg"
                  />
                </div>
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
              <div className={styles.topic1}>
                <div className={styles.item}>
                  <div className={styles.serenaScreeningsMonth}>
                    <div className={styles.serenaScreenings}>
                      Access to Serena Circle
                    </div>
                  </div>
                  <img
                    className={styles.iconCheck}
                    alt=""
                    src="/icon-check.svg"
                  />
                </div>
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
              <div className={styles.topic1}>
                <div className={styles.item}>
                  <div className={styles.serenaScreeningsMonth}>
                    <div className={styles.serenaScreenings}>
                      Group mentorship with Dr. Silvia Lagrotta
                    </div>
                  </div>
                  <div className={styles.div}>
                    <div className={styles.serenaScreenings}>8</div>
                  </div>
                </div>
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
            </div>
          </div>
          <div className={styles.footer2}>
            <div className={styles.buttonprimary}>
              <b className={styles.ctaText}>sign up</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.counter}>
        <button className={styles.circlebutton}>
          <img
            className={styles.iconSelectedElipse}
            alt=""
            src="/iconcirclenonselected.svg"
          />
        </button>
        <button className={styles.circlebutton1}>
          <img
            className={styles.iconSelectedElipse}
            alt=""
            src="/iconcircleselected.svg"
          />
        </button>
        <button className={styles.circlebutton2}>
          <img
            className={styles.iconSelectedElipse}
            alt=""
            src="/iconcirclenonselected.svg"
          />
        </button>
      </div>
    </div>
  );
});

export default SectionDoctorPricing;
