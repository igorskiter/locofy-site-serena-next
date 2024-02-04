import type { NextPage } from "next";
import Footer from "../components/footer";
import Header from "../components/header";
import SectionContact from "../components/section-contact";
import styles from "./contact.module.css";

const Contact: NextPage = () => {
  return (
    <main className={styles.contact}>
      <Header
        menuBurger="/menuburger1@2x.png"
        close1="/close.svg"
        logo="/logo1@2x.png"
        vector="/vector.svg"
        iconLogin="/IconLogin51@2x.png"
        logoTablet="/logotablet.svg"
        logoMobile="/logomobile.svg"
      />
      <SectionContact />
      <Footer
        lINE="/line.svg"
        vector="/Logo31@2x.png"
        group="/LogoCare311@2x.png"
        buttonsSocial="/ButtonsSocial1@2x.png"
        iconLogin="/iconlogin1@2x.png"
        footerZIndex="3"
      />
    </main>
  );
};

export default Contact;
