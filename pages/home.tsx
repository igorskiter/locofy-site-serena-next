import type { NextPage } from "next";

const Doctors: NextPage = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-start justify-start bg-[url('/home@3x.png')] bg-cover bg-no-repeat bg-[top]">
      <Header
        menuBurger="/menuburger@2x.png"
        close1="/close@2x.png"
        logo="/logo1@2x.png"
        vector="/vector11@2x.png"
        iconLogin="/iconlogin1@2x.png"
      />
      <Intro />
      <HeroUnderstandLifestyle />
      <SectionWave />
      <SectionCarousel />
      <SectionCards />
      <Footer
        lINE="/line2@2x.png"
        vector="/vector21@2x.png"
        group="/group11@2x.png"
        buttonsSocial="/buttons-social@2x.png"
        iconLogin="/IconLogin11@2x.png"
      />
      <SideMenu
        sERFOTOMOCKUPQUESTIONARIO="/ser-foto-mockup--questionario-1@2x.png"
        socialItens="/socialitens@2x.png"
      />
    </div>
  );
};

export default Doctors;
