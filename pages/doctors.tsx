import type { NextPage } from "next";
import Header from "../components/header";
import HeroDoctors from "../components/hero-doctors";
import SectionDoctorFreeTrial from "../components/section-doctor-free-trial";
import SectionDoctorBenefits from "../components/section-doctor-benefits";
import SectionDoctorPricing from "../components/section-doctor-pricing";
import SectionDoctorCircle from "../components/section-doctor-circle";
import SideMenu from "../components/side-menu";
import Footer from "../components/footer";
import styles from "./doctors.module.css";

const FAQ: NextPage = () => {
  return (
    <div className={styles.doctors}>
      <Header
        menuBurger="/menuburger1@2x.png"
        close1="/close.svg"
        logo="/logo3@2x.png"
        vector="/vector2.svg"
        iconLogin="/iconlogin2@2x.png"
        headerZIndex="0"
        showMenuBurgerIcon
        closeIcon={false}
        logoTablet="/logotablet1.svg"
        logoMobile="/logomobile1.svg"
      />
      <HeroDoctors />
      <SectionDoctorFreeTrial />
      <SectionDoctorBenefits />
      <SectionDoctorPricing />
      <SectionDoctorCircle />
      <SideMenu
        sideMenuBackgroundImage="url('/sidemenu@3x.png')"
        sideMenuZIndex="6"
        sERFOTOMOCKUPQUESTIONARIO="/ser-foto-mockup--questionario-11@2x.png"
        socialItens="/socialitens.svg"
        sideMenuMargin="0 !important"
        sideMenuPosition="absolute"
        sideMenuTop="9.31rem"
        sideMenuLeft="0.06rem"
      />
      <Footer
        lINE="/line1.svg"
        vector="/Logo31@2x.png"
        group="/LogoCare5@2x.png"
        buttonsSocial="/ButtonsSocial1@2x.png"
        iconLogin="/iconlogin2@2x.png"
        footerZIndex="7"
      />
    </div>
  );
};

export default FAQ;
