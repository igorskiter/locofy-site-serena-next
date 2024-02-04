import type { NextPage } from "next";
import Footer from "../components/footer";
import Header from "../components/header";
import SectionFaqDetail from "../components/section-faq-detail";
import SectionOtherArticle from "../components/section-other-article";
import styles from "./faq-article.module.css";

const FAQARTICLE: NextPage = () => {
  return (
    <main className={styles.faqarticle}>
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
      <SectionOtherArticle hasCantFindWhat={false} />
      <Footer
        lINE="/line.svg"
        vector="/Logo31@2x.png"
        group="/LogoCare5@2x.png"
        buttonsSocial="/ButtonsSocial1@2x.png"
        iconLogin="/iconlogin1@2x.png"
        footerZIndex="4"
      />
    </main>
  );
};

export default FAQARTICLE;
