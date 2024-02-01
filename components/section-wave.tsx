import type { NextPage } from "next";
import { memo } from "react";
import styles from "./section-wave.module.css";

const SectionWave: NextPage = memo(() => {
  return (
    <section className={styles.sectionwave} id="SectionWave">
      <div className={styles.wave}>
        <img className={styles.groupIcon} alt="" src="/group2.svg" />
        <div className={styles.waveChild}>
          <div className={styles.waveInner}>
            <div className={styles.parent}>
              <div className={styles.div}>93%</div>
              <div className={styles.ofPatientsWith}>
                of patients with improved quality of life.
              </div>
            </div>
          </div>
          <div className={styles.waveItem} />
        </div>
        <div className={styles.ellipseDiv} />
        <div className={styles.waveChild1} />
        <div className={styles.waveChild2} />
        <div className={styles.waveChild3} />
        <div className={styles.waveChild4} />
        <div className={styles.waveChild5} />
        <div className={styles.waveChild6} />
        <div className={styles.waveChild7} />
      </div>
      <div className={styles.wavetablet}>
        <img className={styles.groupIcon1} alt="" src="/group3.svg" />
        <div className={styles.waveChild}>
          <div className={styles.waveInner}>
            <div className={styles.parent}>
              <div className={styles.div}>93%</div>
              <div className={styles.ofPatientsWith}>
                of patients with improved quality of life.
              </div>
            </div>
          </div>
          <div className={styles.waveItem} />
        </div>
        <img className={styles.wavetabletItem} alt="" src="/group-187.svg" />
        <img className={styles.wavetabletChild1} alt="" src="/group-187.svg" />
        <img className={styles.wavetabletChild2} alt="" src="/group-190.svg" />
        <img className={styles.wavetabletChild3} alt="" src="/group-187.svg" />
        <div className={styles.waveChild1} />
        <div className={styles.waveChild2} />
        <div className={styles.waveChild6} />
        <div className={styles.waveChild7} />
      </div>
      <div className={styles.wavemobile}>
        <img className={styles.groupIcon2} alt="" src="/group1.svg" />
        <div className={styles.ellipseParent}>
          <div className={styles.groupChild} />
          <div className={styles.rectangleParent}>
            <div className={styles.groupItem} />
            <div className={styles.container}>
              <div className={styles.div2}>93%</div>
              <div className={styles.ofPatientsWith2}>
                of patients with improved quality of life.
              </div>
            </div>
          </div>
          <div className={styles.groupInner} />
        </div>
        <img className={styles.wavemobileChild} alt="" src="/group-191.svg" />
        <img className={styles.wavemobileItem} alt="" src="/group-191.svg" />
        <img className={styles.wavemobileInner} alt="" src="/group-191.svg" />
        <img className={styles.wavemobileChild1} alt="" src="/group-193.svg" />
      </div>
    </section>
  );
});

export default SectionWave;
