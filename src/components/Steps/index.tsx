import { EvervaultCardDemo } from "@/common/HoverCard";
import "./index.css";
import { Cover } from "../ui/cover";

const Steps = () => {
  return (
    <div className="sm:py-10 max-w-5xl mx-auto my-24 mt-0">
      <div className="mb-10">
        <h1 className="titleSteps text-4xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Our Working Process in just <br /> <Cover>Three - Steps</Cover>
        </h1>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center place-items-center mx-auto">
        <EvervaultCardDemo
          title={"Design"}
          insideContent={"We Design"}
          description={
            "Ready to launch your next big idea? We've got you covered. With websites that grow as fast as your ambitions, impressing investors is just the beginning."
          }
          tagText={"Step 1"}
        />
        <EvervaultCardDemo
          title={"Development"}
          insideContent={"We Develop"}
          description={
            "Ready to launch your next big idea? We've got you covered. With websites that grow as fast as your ambitions, impressing investors is just the beginning."
          }
          tagText={"Step 2"}
        />
        <EvervaultCardDemo
          title={"Marketing"}
          insideContent={"We Do Marketing"}
          description={
            "Ready to launch your next big idea? We've got you covered. With websites that grow as fast as your ambitions, impressing investors is just the beginning."
          }
          tagText={"Step 3"}
        />
      </div>
    </div>
  );
};

export default Steps;
