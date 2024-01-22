import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import HeroAboutUs from "../components/hero-about-us";
import SectionVision from "../components/section-vision";
import SectionWhy from "../components/section-why";
import SectionHow from "../components/section-how";
import TeamSection from "../components/team-section";
import Footer from "../components/footer";
import SideMenu from "../components/side-menu";
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
        headerZIndex="0"
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
        buttonsSocial="/ButtonsSocial@2x.png"
        iconLogin="/iconlogin1@2x.png"
        footerZIndex="6"
      />
      <SideMenu
        sideMenuBackgroundImage="url('/sidemenu@3x.png')"
        sideMenuZIndex="7"
        sERFOTOMOCKUPQUESTIONARIO="/ser-foto-mockup--questionario-1@2x.png"
        socialItens="/socialitens.svg"
        sideMenuMargin="0 !important"
        sideMenuPosition="absolute"
        sideMenuTop="9.31rem"
        sideMenuLeft="0.06rem"
      />
    </div>
  );
};

export default AboutUs;
