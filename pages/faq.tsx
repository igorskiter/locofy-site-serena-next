import type { NextPage } from "next";
import Footer from "../components/footer";
import Header from "../components/header";
import SectionAskedQUestionSearch from "../components/section-asked-question-search";
import SectionFrequentlyAskedQuestion from "../components/section-frequently-asked-question";
import SectionOtherArticleContact from "../components/section-other-article";
import styles from "./faq.module.css";

const Home: NextPage = () => {
  return (
    <main className={styles.faq}>
      <Header
        menuBurger="/menuburger1@2x.png"
        close1="/close.svg"
        logo="/logo3@2x.png"
        vector="/vector2.svg"
        iconLogin="/iconlogin2@2x.png"
        logoTablet="/logotablet1.svg"
        logoMobile="/logomobile1.svg"
      />
      <SectionAskedQUestionSearch />
      <SectionFrequentlyAskedQuestion />
      <SectionOtherArticleContact />
      <Footer
        lINE="/line1.svg"
        vector="/Logo71@2x.png"
        group="/LogoCare71@2x.png"
        buttonsSocial="/ButtonsSocial2@2x.png"
        iconLogin="/IconLogin1@2x.png"
        footerZIndex="5"
      />
    </main>
  );
};

export default Home;
