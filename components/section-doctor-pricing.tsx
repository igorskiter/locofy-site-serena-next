import type { NextPage } from "next";
import { memo, useCallback } from "react";
import styles from "./section-doctor-pricing.module.css";

const SectionDoctorPricing: NextPage = memo(() => {
  const onButtonContainerClick = useCallback(() => {
    window.location.href =
      "https://auth.serenacare.app/realms/serena-app-practitioner/protocol/openid-connect/registrations?client_id=practitioner-auth&response_type=code&scope=openid&redirect_uri=https%3A%2F%2Fpractitioner.serenacare.app?registration=true";
  }, []);

  const onButtonContainer2Click = useCallback(() => {
    window.location.href =
      "https://auth.serenacare.app/realms/serena-app-practitioner/protocol/openid-connect/registrations?client_id=practitioner-auth&response_type=code&scope=openid&redirect_uri=https%3A%2F%2Fpractitioner.serenacare.app?registration=true";
  }, []);

  const onButtonContainer3Click = useCallback(() => {
    window.location.href =
      "https://auth.serenacare.app/realms/serena-app-practitioner/protocol/openid-connect/registrations?client_id=practitioner-auth&response_type=code&scope=openid&redirect_uri=https%3A%2F%2Fpractitioner.serenacare.app?registration=true";
  }, []);

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
                <div className={styles.serenaScreeningsMonth}>
                  <div className={styles.serenaScreenings}>
                    Serena Screenings / month
                  </div>
                </div>
                <div className={styles.div}>
                  <div className={styles.serenaScreenings}>20</div>
                </div>
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
              <div className={styles.personalizedTreatmentPlansParent}>
                <div className={styles.patientScoreEvolutionMonito}>
                  <div className={styles.serenaScreenings}>
                    Patient score evolution monitoring
                  </div>
                </div>
                <img
                  className={styles.iconCheck}
                  alt=""
                  src="/icon-check.svg"
                />
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
              <div className={styles.personalizedTreatmentPlansParent}>
                <div className={styles.patientScoreEvolutionMonito}>
                  <div className={styles.serenaScreenings}>
                    Access to Serena Circle
                  </div>
                </div>
                <img
                  className={styles.iconCheck}
                  alt=""
                  src="/icon-check.svg"
                />
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
              <div className={styles.personalizedTreatmentPlansParent}>
                <div className={styles.patientScoreEvolutionMonito}>
                  <div className={styles.serenaScreenings}>
                    Group mentorship with Dr. Silvia Lagrotta
                  </div>
                </div>
                <img className={styles.iconCheck} alt="" src="/x.svg" />
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.button} onClick={onButtonContainerClick}>
              <div className={styles.buttonClic}>
                <div className={styles.boundingBox} />
                <b className={styles.ctaText}>DISCOVER</b>
              </div>
              <div className={styles.buttonHover}>
                <div className={styles.boundingBox1} />
                <b className={styles.ctaText}>DISCOVER</b>
              </div>
              <div className={styles.buttoprimary}>
                <b className={styles.ctaText2}>sign up</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card1}>
          <div className={styles.price}>
            <b className={styles.basic}>PREMIUM</b>
            <div className={styles.mo}>
              <b>$54</b>
              <span className={styles.mo1}>/mo</span>
            </div>
          </div>
          <div className={styles.list1}>
            <div className={styles.topics1}>
              <div className={styles.personalizedTreatmentPlansParent}>
                <div className={styles.patientScoreEvolutionMonito}>
                  <div className={styles.serenaScreenings}>
                    Serena Screenings / month
                  </div>
                </div>
                <div className={styles.div}>
                  <div className={styles.serenaScreenings}>20</div>
                </div>
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
              <div className={styles.personalizedTreatmentPlansParent}>
                <div className={styles.patientScoreEvolutionMonito}>
                  <div className={styles.serenaScreenings}>
                    Patient score evolution monitoring
                  </div>
                </div>
                <img
                  className={styles.iconCheck}
                  alt=""
                  src="/icon-check.svg"
                />
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
              <div className={styles.personalizedTreatmentPlansParent}>
                <div className={styles.patientScoreEvolutionMonito}>
                  <div className={styles.serenaScreenings}>
                    Access to Serena Circle
                  </div>
                </div>
                <img
                  className={styles.iconCheck}
                  alt=""
                  src="/icon-check.svg"
                />
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
              <div className={styles.personalizedTreatmentPlansParent}>
                <div className={styles.patientScoreEvolutionMonito}>
                  <div className={styles.serenaScreenings}>
                    Group mentorship with Dr. Silvia Lagrotta
                  </div>
                </div>
                <div className={styles.div}>
                  <div className={styles.serenaScreenings}>8</div>
                </div>
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
            </div>
          </div>
          <div className={styles.footer1}>
            <div className={styles.button} onClick={onButtonContainer2Click}>
              <div className={styles.buttonClic}>
                <div className={styles.boundingBox} />
                <b className={styles.ctaText}>DISCOVER</b>
              </div>
              <div className={styles.buttonHover}>
                <div className={styles.boundingBox1} />
                <b className={styles.ctaText}>DISCOVER</b>
              </div>
              <div className={styles.buttoprimary}>
                <b className={styles.ctaText2}>sign up</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card1}>
          <div className={styles.price2}>
            <b className={styles.vip}>VIP</b>
            <div className={styles.mo}>
              <b>$84</b>
              <span className={styles.mo1}>/mo</span>
            </div>
          </div>
          <div className={styles.list1}>
            <div className={styles.topics1}>
              <div className={styles.personalizedTreatmentPlansParent}>
                <div className={styles.patientScoreEvolutionMonito}>
                  <div className={styles.serenaScreenings}>
                    Serena Screenings / month
                  </div>
                </div>
                <div className={styles.div}>
                  <div className={styles.serenaScreenings}>20</div>
                </div>
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
              <div className={styles.personalizedTreatmentPlansParent}>
                <div className={styles.patientScoreEvolutionMonito}>
                  <div className={styles.serenaScreenings}>
                    Patient score evolution monitoring
                  </div>
                </div>
                <img
                  className={styles.iconCheck}
                  alt=""
                  src="/icon-check.svg"
                />
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
              <div className={styles.personalizedTreatmentPlansParent}>
                <div className={styles.patientScoreEvolutionMonito}>
                  <div className={styles.serenaScreenings}>
                    Access to Serena Circle
                  </div>
                </div>
                <img
                  className={styles.iconCheck}
                  alt=""
                  src="/icon-check.svg"
                />
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
              <div className={styles.personalizedTreatmentPlansParent}>
                <div className={styles.patientScoreEvolutionMonito}>
                  <div className={styles.serenaScreenings}>
                    Group mentorship with Dr. Silvia Lagrotta
                  </div>
                </div>
                <div className={styles.div}>
                  <div className={styles.serenaScreenings}>8</div>
                </div>
                <img className={styles.topic1Child} alt="" src="/line-1.svg" />
              </div>
            </div>
          </div>
          <div className={styles.footer2}>
            <div className={styles.button} onClick={onButtonContainer3Click}>
              <div className={styles.buttonClic2}>
                <div className={styles.boundingBox} />
                <b className={styles.ctaText}>DISCOVER</b>
              </div>
              <div className={styles.buttonClic}>
                <div className={styles.boundingBox1} />
                <b className={styles.ctaText}>DISCOVER</b>
              </div>
              <div className={styles.buttonprimary1}>
                <b className={styles.ctaText2}>sign up</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SectionDoctorPricing;
