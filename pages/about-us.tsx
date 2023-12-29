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
        vector="/vector1@2x.png"
        iconLogin="/iconlogin1@2x.png"
      />
      <HeroAboutUs />
      <SectionVision />
      <SectionWhy />
      <SectionHow />
      <TeamSection />
      <Footer
        lINE="/line1@2x.png"
        vector="/Logo51@2x.png"
        group="/LogoCare2@2x.png"
        buttonsSocial="/ButtonsSocial11@2x.png"
        iconLogin="/IconLogin41@2x.png"
      />
      <SideMenu />
    </div>
  );
};

export default AboutUs;
