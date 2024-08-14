import "./index.css";
import Logo from "../../../public/whyChooseUs.png";
import { Button } from "../ui/moving-border";

const WhyChooseUsHome = () => {
  return (
    <div className="whyChooseHome px-4 sm:px-28 py-24 gap-16">
      <div className="">
        <div className="text-3xl md:text-6xl font-semibold dark:text-white text-center sm:text-left">
          Why <span className="text-red-700">Choose Us?</span>
          <div className="text-3xl mt-8">
            More Than 24+ Years Experience We Provide IT Services
          </div>
          <div className="text-xl mt-4 md:text-xl">
            <div className="text-base font-light pr-4 mt-8">
              Collaboratively envisioneer user friendly supply chains and cross
              unit imperative. Authoritativel fabricate competitive resource and
              holistic. Holisticly restore real time resources whereas
              standardized networks.
            </div>
          </div>
          <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-zinc-600 dark:text-white border-neutral-200 dark:border-slate-800 text-large sm:text-xl font-semibold"
        containerClassName="h-12 sm:h-16 text-zinc-600 mt-16"
      >
        Let's Connect
      </Button>
        </div>
      </div>
      <div className="">
        <img src={Logo} alt="whyChooseUs" className="whyChooseUsLogo" />
      </div>
    </div>
  );
};

export default WhyChooseUsHome;
