import type { NextPage } from "next";
import Header from "../components/header";
import SectionFaqDetail from "../components/section-faq-detail";
import SectionOtherArticle from "../components/section-other-article";
import SideMenu from "../components/side-menu";
import Footer from "../components/footer";
import styles from "./faq-article.module.css";

const FAQARTICLE: NextPage = () => {
  return (
    <div className={styles.faqarticle}>
      <Header
        menuBurger="/menuburger1@2x.png"
        close1="/close.svg"
        logo="/logo1@2x.png"
        vector="/vector.svg"
        iconLogin="/IconLogin51@2x.png"
        logoTablet="/logotablet.svg"
        logoMobile="/logomobile.svg"
      />
      <SectionFaqDetail />
      <SectionOtherArticle />
      <SideMenu
        sideMenuBackgroundImage="url('/sidemenu@3x.png')"
        sideMenuZIndex="3"
        sERFOTOMOCKUPQUESTIONARIO="/ser-foto-mockup--questionario-11@2x.png"
        socialItens="48x254x-1043458600"
        sideMenuMargin="0 !important"
        sideMenuPosition="absolute"
        sideMenuTop="9.31rem"
        sideMenuLeft="0.06rem"
      />
      <Footer
        lINE="/line.svg"
        vector="/Logo31@2x.png"
        group="/LogoCare5@2x.png"
        buttonsSocial="/ButtonsSocial1@2x.png"
        iconLogin="/iconlogin1@2x.png"
        footerZIndex="4"
      />
    </div>
  );
};

export default FAQARTICLE;
