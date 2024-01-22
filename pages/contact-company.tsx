import type { NextPage } from "next";
import Header from "../components/header";
import Intro from "../components/intro";
import HeroUnderstandLifestyle from "../components/hero-understand-lifestyle";
import SectionWave from "../components/section-wave";
import SectionCarousel from "../components/section-carousel";
import SectionCards from "../components/section-cards";
import Footer from "../components/footer";
import SideMenu from "../components/side-menu";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Header
        menuBurger="/menuburger1@2x.png"
        close1="/close.svg"
        logo="/logo1@2x.png"
        vector="/vector.svg"
        iconLogin="/iconlogin1@2x.png"
      />
      <Intro />
      <HeroUnderstandLifestyle />
      <SectionWave />
      <SectionCarousel />
      <SectionCards />
      <Footer
        lINE="/line.svg"
        vector="/Logo21@2x.png"
        group="/LogoCare11@2x.png"
        buttonsSocial="/ButtonsSocial3@2x.png"
        iconLogin="/IconLogin1@2x.png"
      />
      <SideMenu
        sERFOTOMOCKUPQUESTIONARIO="/ser-foto-mockup--questionario-1@2x.png"
        socialItens="/socialitens.svg"
      />
      <SectionContactCompany />
      <Footer
        lINE="/line.svg"
        vector="/Logo31@2x.png"
        group="/LogoCare3@2x.png"
        buttonsSocial="/ButtonsSocial1@2x.png"
        iconLogin="/IconLogin51@2x.png"
        footerZIndex="3"
      />
    </div>
  );
};

export default Home;
