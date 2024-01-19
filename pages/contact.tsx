import type { NextPage } from "next";
import Header from "../components/header";
import SideMenu from "../components/side-menu";
import SectionContact from "../components/section-contact";
import Footer from "../components/footer";
import styles from "./contact.module.css";

const Contact: NextPage = () => {
  return (
    <div className={styles.contact}>
      <Header
        menuBurger="/menuburger1@2x.png"
        close1="/close.svg"
        logo="/logo1@2x.png"
        vector="/vector.svg"
        iconLogin="/IconLogin51@2x.png"
        headerZIndex="0"
      />
      <SideMenu
        sideMenuBackgroundImage="url('/sidemenu@3x.png')"
        sideMenuZIndex="1"
        sERFOTOMOCKUPQUESTIONARIO="/ser-foto-mockup--questionario-1@2x.png"
        socialItens="/socialitens.svg"
        sideMenuMargin="0 !important"
        sideMenuPosition="absolute"
        sideMenuTop="9.31rem"
        sideMenuLeft="0.06rem"
      />
      <SectionContact />
      <Footer
        lINE="/line.svg"
        vector="/Logo3@2x.png"
        group="/LogoCare3@2x.png"
        buttonsSocial="/ButtonsSocial1@2x.png"
        iconLogin="/iconlogin1@2x.png"
        footerZIndex="3"
      />
    </div>
  );
};

export default Contact;
