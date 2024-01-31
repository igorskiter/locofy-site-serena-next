import type { NextPage } from "next";
import Footer from "../components/footer";
import Header from "../components/header";
import SectionContactCompany from "../components/section-contact-company";
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
        iconLogin="/IconLogin51@2x.png"
        logoTablet="/logotablet.svg"
        logoMobile="/logomobile.svg"
      />
      <SideMenu
        sideMenuBackgroundImage="url('/sidemenu1@3x.png')"
        sideMenuZIndex="1"
        sERFOTOMOCKUPQUESTIONARIO="/ser-foto-mockup--questionario-11@2x.png"
        socialItens="/socialitens.svg"

      />
      <SectionContactCompany />
      <Footer
        lINE="/line.svg"
        vector="/Logo31@2x.png"
        group="/LogoCare311@2x.png"
        buttonsSocial="/ButtonsSocial1@2x.png"
        iconLogin="/IconLogin51@2x.png"
        footerZIndex="3"
      />
    </div>
  );
};

export default Home;
