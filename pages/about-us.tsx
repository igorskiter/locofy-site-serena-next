import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import HeroAboutUs from "../components/hero-about-us";
import SectionVision from "../components/section-vision";
import SectionWhy from "../components/section-why";
import SectionHow from "../components/section-how";
import TeamSection from "../components/team-section";
import Footer from "../components/footer";
import styles from "./about-us.module.css";

const AboutUs: NextPage = () => {
  return (
    <div className={styles.aboutus}>
      <Header
        menuBurger="/menuburger1@2x.png"
        close1="/close.svg"
        logo="/logo1@2x.png"
        vector="/vector.svg"
        iconLogin="/iconlogin1@2x.png"
        logoTablet="/logotablet.svg"
        logoMobile="/logomobile.svg"
      />
      <HeroAboutUs />
      <SectionVision />
      <SectionWhy />
      <SectionHow />
      <TeamSection />
      <Footer
        lINE="/line.svg"
        vector="/Logo31@2x.png"
        group="/LogoCare9@2x.png"
        buttonsSocial="250.46x34.61x-1305795371"
        iconLogin="/iconlogin1@2x.png"
        footerZIndex="unset"
      />
    </div>
  );
};

export default AboutUs;
