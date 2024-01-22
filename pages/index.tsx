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
        showMenuBurgerIcon
        closeIcon={false}
        logoTablet="/logotablet.svg"
        logoMobile="/logomobile.svg"
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
        sERFOTOMOCKUPQUESTIONARIO="/ser-foto-mockup--questionario-11@2x.png"
        socialItens={`https://d1xzdqg8s8ggsr.cloudfront.net/65848457d41eacf61c1ef770/b630606d-4051-45ad-94d2-3ded2cce1d13_1703613179981854472?Expires=-62135596800&Signature=q-SsJXdIj6yqLNr32Dgh08s-l2mbxZQ1XjLjfFzfeMXvUnI1rwHQfK22SsGGnnvdDeOE~GKwLsa-scCGA~A3HLFN3spsD4dsyZ~Tyxvn1EWg7ykZ8viy8RRhYT3F-ZtKk3Rdb5gTaak6v-wy7F0zrAOLoZy3L2AV7HvxcxfaW9SrALyjrRyeBmT-h-LcAMHL3kTRkozhTMemg0-ATrLPEQqetO82FFoea3je-jc2hdmwFHq-43842kXd6~XwoZxypY0Qsu9yDqLUFXdgLoMDNSo3gLhsa9f9ikewRfkr5hjcMIlk15Im~1Y0vIo6jA7NC955-5XnBeyw~cWPSJNjAg__&Key-Pair-Id=K1P54FZWCHCL6J`}
      />
    </div>
  );
};

export default Home;
