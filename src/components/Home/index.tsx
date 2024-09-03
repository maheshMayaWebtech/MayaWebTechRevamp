import { HighlightHero } from "@/common/HighlightHero";
import CompaniesServed from "../CompaniesServed";
import { FAQ } from "../FAQ";
import { Hero } from "../Hero";
import LetsTalkFooter from "../LetsTalkFooter";
import { MovingCards } from "../MovingCards";
import ReviewHome from "../ReviewHome";
import { ServiceRequirements } from "../ServiceRequirements";
import Steps from "../Steps";
import WhyChooseUsHome from "../WhyChooseUsHome";
import { WorkFlows } from "../WorkFlows";
import { WorkShow } from "../WorkShow";

const Home = () => {
  return (
    <>
      <Hero />
      <CompaniesServed />
      <WhyChooseUsHome />
      <Steps />
      <WorkFlows />
      <ServiceRequirements />
      <MovingCards />
      <WorkShow />
      <HighlightHero />
      <ReviewHome />
      <FAQ />
      <LetsTalkFooter />
    </>
  );
}

export default Home;