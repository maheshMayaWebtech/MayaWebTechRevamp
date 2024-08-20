import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../components/ui/hero-highlight";
import ServiceCards from "@/common/ServiceCards";
import "./index.css";
import { MovingCards } from "@/components/MovingCards";
import LetsTalkFooter from "@/components/LetsTalkFooter";

export function HighlightHero() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, -5, 0] }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug text-center mx-auto sm:px-28 py-20"
      >
        <div className="text-2xl sm:text-8xl mb-8">
          Our Services
        </div>
        Transformative Solutions for Your Success: <br />
        <Highlight className="text-black dark:text-white">
          Discover Our Core Offerings
        </Highlight>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
        </motion.div>
      </motion.h1>
    </HeroHighlight>
  );
}

const ServicesPage: React.FC = () => {
  return (
    <div className=" min-h-screen">
      <section className="relative bg-gradient-to-r from-purple-500 to-blue-500 text-white">
          <HighlightHero />
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
            Our Expertise, Your Growth
          </h2>
          <ServiceCards />
        </div>
      </section>

      <MovingCards />

      <LetsTalkFooter />
    </div>
  );
};

export default ServicesPage;
