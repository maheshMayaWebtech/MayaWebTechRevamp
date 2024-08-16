import { HighlightHero } from "@/common/HighlightHero";
import CompaniesServed from "../CompaniesServed";
import { Hero } from "../Hero";
import { MovingCards } from "../MovingCards";
import { ServiceRequirements } from "../ServiceRequirements";
import Steps from "../Steps";
import { WorkShow } from "../WorkShow";
import { WorkSteps } from "../WorkSteps";
import { FAQ } from "../FAQ";
import LetsTalkFooter from "../LetsTalkFooter";
import { WorkFlows } from "../WorkFlows";
import WhyChooseUsHome from "../WhyChooseUsHome";
import ReviewHome from "../ReviewHome";

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
      {/* <WorkSteps /> */}
      <WorkShow />
      <HighlightHero />
      <ReviewHome />
      <FAQ />
      <LetsTalkFooter />
    </>
  );
}

export default Home;