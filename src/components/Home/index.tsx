import { HighlightHero } from "@/common/HighlightHero";
import CompaniesServed from "../CompaniesServed";
import { Hero } from "../Hero";
import { MovingCards } from "../MovingCards";
import { ServiceRequirements } from "../ServiceRequirements";
import Steps from "../Steps";
import { WorkShow } from "../WorkShow";
import { WorkSteps } from "../WorkSteps";
import { FAQ } from "../FAQ";

const Home = () => {
  return (
    <>
      <Hero />
      <CompaniesServed />
      <Steps />
      <ServiceRequirements />
      <MovingCards />
      <WorkSteps />
      <WorkShow />
      <HighlightHero />
      <FAQ />
    </>
  );
}

export default Home;