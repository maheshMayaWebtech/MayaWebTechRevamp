import CompaniesServed from "../CompaniesServed";
import { Hero } from "../Hero";
import { MovingCards } from "../MovingCards";
import { ServiceRequirements } from "../ServiceRequirements";
import Steps from "../Steps";
import { WorkSteps } from "../WorkSteps";

const Home = () => {
  return (
    <>
      <Hero />
      <CompaniesServed />
      <Steps />
      <ServiceRequirements />
      <MovingCards />
      <WorkSteps />
    </>
  );
}

export default Home;