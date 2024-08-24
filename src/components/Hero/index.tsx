import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/aurora-background";
import { FlipWords } from "../ui/flip-words";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import "./index.css";
import { Badge } from "../ui/badge";

export function Hero() {
  const words = ["Websites", "Apps", "SEO", "Marketing"];
  const wordsTypeWriter = [
    {
      text: "Build",
    },
    {
      text: "with",
    },
    {
      text: "Maya Web Tech.",
      className: "text-red-700 dark:text-red-700",
    },
  ];
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: -80 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="leadingTechHero">
          <Badge className="px-8 py-2" variant="secondary">Leading Tech</Badge>
        </div>
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Your one-stop solution
          <br />
          <div className="font-medium mt-2">
            <FlipWords words={words} />
          </div>
        </div>
        <div className="">
          <TypewriterEffectSmooth
            className="lg:text-sm lg:font-medium md:text-2xl md:font-medium"
            words={wordsTypeWriter}
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-red-700 border dark:border-white border-transparent text-white text-sm">
            Get Started
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-red-700 border border-red-700  text-sm">
            Contact Us
          </button>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
