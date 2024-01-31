import type { NextPage } from "next";
import Header from "../components/header";
import SideMenu from "../components/side-menu";
import SectionContactCompany from "../components/section-contact-company";
import Footer from "../components/footer";
import styles from "./index.module.css";

const ContactCompany: NextPage = () => {
  return (
    <div className={styles.contactcompany}>
      <Header
        menuBurger="/menuburger1@2x.png"
        close1="/close.svg"
        logo="/logo1@2x.png"
        vector="/vector.svg"
        iconLogin="/IconLogin51@2x.png"
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
      <SectionContactCompany />
      <Footer
        lINE="/line.svg"
        vector="/Logo3@2x.png"
        group="/LogoCare3@2x.png"
        buttonsSocial="/ButtonsSocial1@2x.png"
        iconLogin="/IconLogin51@2x.png"
        footerZIndex="3"
      />
    </div>
  );
};

export default ContactCompany;
