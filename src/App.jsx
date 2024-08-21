import "./App.css";
import { CardStackDemo } from "./components/CardStack";
import { AuroraHero } from "./components/DescSection";
import { RevealLinks } from "./components/FooterBig";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HeroScrollDemo from "./components/ScrollImageSection";
import Services from "./components/Services";
import { CoverDemo } from "./components/SpeedSparkle";
import { InfiniteMovingCardsDemo } from "./components/TestimonialScroll";
import TextParallaxContentExample from "./components/TypesOfAgreement";
import { BouncyCardsFeatures } from "./components/TypesOfAgreement2";
import { TypewriterEffectSmoothDemo } from "./components/TypeWriterText";

function App() {
  return (
    <>

      <Header />
      <HeroSection />
      <Services />
      <HeroScrollDemo />
      <AuroraHero />
      {/* <InfiniteMovingCardsDemo/> */}
      <div className="flex bg-gradient-to-r justify-between items-center gap-10 h-96  from-slate-900 to-gray-400">
        <div className="w-5/12 flex justify-center">
          <CardStackDemo className="w-4/12" />
        </div>
        <div className="w-7/12">
          <CoverDemo />
        </div>
      </div>
      <BouncyCardsFeatures className="w-8/12" />
      {/* <TextParallaxContentExample/> */}
      <TypewriterEffectSmoothDemo/>
      <RevealLinks />
    </>
  );
}

export default App;
