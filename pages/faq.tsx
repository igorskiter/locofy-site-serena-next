import type { NextPage } from "next";
import Header from "../components/header";
import SectionAskedQUestionSearch from "../components/section-asked-question-search";
import SectionFrequentlyAskedQuestion from "../components/section-frequently-asked-question";
import SectionOtherArticleContact from "../components/section-other-article-contact";
import SideMenu from "../components/side-menu";
import Footer from "../components/footer";
import styles from "./faq.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.faq}>
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
      <SectionAskedQUestionSearch />
      <SectionFrequentlyAskedQuestion />
      <SectionOtherArticleContact />
      <SideMenu
        sideMenuBackgroundImage="url('/sidemenu@3x.png')"
        sideMenuZIndex="4"
        sERFOTOMOCKUPQUESTIONARIO="/ser-foto-mockup--questionario-11@2x.png"
        socialItens="48x254x-1043458600"
        sideMenuMargin="0 !important"
        sideMenuPosition="absolute"
        sideMenuTop="9.31rem"
        sideMenuLeft="0.06rem"
      />
      <Footer
        lINE="/line1.svg"
        vector="/Logo71@2x.png"
        group="/LogoCare71@2x.png"
        buttonsSocial="/ButtonsSocial2@2x.png"
        iconLogin="/IconLogin1@2x.png"
        footerZIndex="5"
      />
    </div>
  );
};

export default Home;
