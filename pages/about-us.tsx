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
        showMenuBurgerIcon
        closeIcon={false}
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
        footerZIndex="6"
      />
      <SideMenu
        sERFOTOMOCKUPQUESTIONARIO="/ser-foto-mockup--questionario-11@2x.png"
        socialItens={`https://d1xzdqg8s8ggsr.cloudfront.net/65848457d41eacf61c1ef770/b630606d-4051-45ad-94d2-3ded2cce1d13_1703613179981854472?Expires=-62135596800&Signature=q-SsJXdIj6yqLNr32Dgh08s-l2mbxZQ1XjLjfFzfeMXvUnI1rwHQfK22SsGGnnvdDeOE~GKwLsa-scCGA~A3HLFN3spsD4dsyZ~Tyxvn1EWg7ykZ8viy8RRhYT3F-ZtKk3Rdb5gTaak6v-wy7F0zrAOLoZy3L2AV7HvxcxfaW9SrALyjrRyeBmT-h-LcAMHL3kTRkozhTMemg0-ATrLPEQqetO82FFoea3je-jc2hdmwFHq-43842kXd6~XwoZxypY0Qsu9yDqLUFXdgLoMDNSo3gLhsa9f9ikewRfkr5hjcMIlk15Im~1Y0vIo6jA7NC955-5XnBeyw~cWPSJNjAg__&Key-Pair-Id=K1P54FZWCHCL6J`}
      />
    </div>
  );
};

export default AboutUs;
