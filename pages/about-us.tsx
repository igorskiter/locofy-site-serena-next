import type { NextPage } from "next";
import Header from "../components/header";
import HeroAboutUs from "../components/hero-about-us";
import SectionVision from "../components/section-vision";
import SectionWhy from "../components/section-why";
import SectionHow from "../components/section-how";
import TeamSection from "../components/team-section";
import Footer from "../components/footer";
import SideMenu from "../components/side-menu";

const AboutUs: NextPage = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-start justify-start bg-[url('/aboutus@3x.png')] bg-cover bg-no-repeat bg-[top]">
      <Header
        menuBurger="/menuburger@2x.png"
        close1="/close@2x.png"
        logo="/logo1@2x.png"
        vector="/vector11@2x.png"
        iconLogin="/iconlogin1@2x.png"
        headerZIndex="0"
      />
      <HeroAboutUs />
      <SectionVision />
      <SectionWhy />
      <SectionHow />
      <TeamSection />
      <Footer
        lINE="/line1@2x.png"
        vector="/Logo51@2x.png"
        group="/LogoCare211@2x.png"
        buttonsSocial="/ButtonsSocial11@2x.png"
        iconLogin="/IconLogin41@2x.png"
        footerZIndex="6"
      />
      <SideMenu
        sideMenuBackgroundImage="url('/sidemenu@3x.png')"
        sideMenuZIndex="7"
        sERFOTOMOCKUPQUESTIONARIO="/ser-foto-mockup--questionario-1@2x.png"
        socialItens="/socialitens@2x.png"
        sideMenuMargin="0 !important"
        sideMenuPosition="absolute"
        sideMenuTop="9.31rem"
        sideMenuLeft="0.06rem"
      />
    </div>
  );
};

export default AboutUs;
