import React from "react";
import { useParams } from "react-router-dom";
import codingImage from "../../../public/coding.png";
import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaChartLine,
  FaCogs,
  FaRobot,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WhyChooseUsHome from "@/components/WhyChooseUsHome";

const services = [
  {
    title: "Mobile Development",
    description:
      "Conveniently promote transparent materials and stand-alone strategic theme areas.",
    number: "01",
    icon: <FaCode />,
    image: codingImage,
    whyChooseHeading: "Why Choose Mobile Development?",
    whyChooseUsItems: [
      "Experience",
      "Custom Solutions",
      "Agile Development",
      "Support",
    ],
  },
  {
    title: "Web Services",
    description:
      "Conveniently promote transparent materials and stand-alone strategic theme areas.",
    number: "02",
    icon: <FaPaintBrush />,
    image: codingImage,
    whyChooseHeading: "Why Choose Web Services?",
    whyChooseUsItems: [
      "User-Centric Design",
      "Prototyping",
      "Testing",
      "Responsive Design",
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "Conveniently promote transparent materials and stand-alone strategic theme areas.",
    number: "03",
    icon: <FaBullhorn />,
    image: codingImage,
    whyChooseHeading: "Why Choose Digital Marketing?",
    whyChooseUsItems: [
      "SEO Expertise",
      "Social Media Management",
      "Content Creation",
      "Analytics",
    ],
  },
  {
    title: "Software Development",
    description:
      "Conveniently promote transparent materials and stand-alone strategic theme areas.",
    number: "04",
    icon: <FaChartLine />,
    image: codingImage,
    whyChooseHeading: "Why Choose Software Development?",
    whyChooseUsItems: [
      "Data-Driven Insights",
      "Process Optimization",
      "Risk Management",
      "Consulting",
    ],
  },
  {
    title: "Software Testing",
    description:
      "Conveniently promote transparent materials and stand-alone strategic theme areas.",
    number: "05",
    icon: <FaCogs />,
    image: codingImage,
    whyChooseHeading: "Why Choose Software Testing?",
    whyChooseUsItems: [
      "Custom Software",
      "Maintenance",
      "Integration",
      "Security",
    ],
  },
  {
    title: "Web Hosting",
    description:
      "Conveniently promote transparent materials and stand-alone strategic theme areas.",
    number: "06",
    icon: <FaRobot />,
    image: codingImage,
    whyChooseHeading: "Why Choose Web Hosting?",
    whyChooseUsItems: [
      "Predictive Analytics",
      "Automation",
      "Data Science Expertise",
      "Scalability",
    ],
  },
];

const process = [
  {
    step: "Discovery",
    description:
      "We start by understanding your goals, target audience, and requirements.",
  },
  {
    step: "Planning",
    description:
      "We outline the project scope, timelines, and resources needed.",
  },
  {
    step: "Implementation",
    description:
      "Our team develops your app using the latest technologies and best practices.",
  },
  {
    step: "Testing",
    description:
      "We perform thorough testing to ensure the app is functional and bug-free.",
  },
  {
    step: "Support",
    description:
      "Post-launch support to address any issues and optimize performance.",
  },
];

const keyFeatures = [
  "Custom Solutions",
  "Cross-Platform Development",
  "Integration Capabilities",
  "Security First",
];

const ServicesLayout = () => {
  const { service } = useParams();
  const serviceContent =
    services.find(
      (s) => s.title.toLowerCase().replace(/\s+/g, "-") === service
    ) || services[0];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [inView, controls]);

  return (
    <div className="min-h-screen bg-white text-black">
      <div
        className="flex flex-col sm:flex-row items-center px-4 sm:px-28 py-16 pt-28 sm:pt-36 sm:gap-16 bg-dark-red"
      >
        <div className="flex-1 text-left">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">
            Unlock the Power of{" "}
            <span className="text-red-700 text-3xl sm:text-5xl">
              {" "}
              {serviceContent.title}{" "}
            </span>{" "}
            with Our Expertise
          </h1>
          <p className="text-sm text-gray-800 sm:text-xl mb-4">
            Welcome to MayaWebTech, your trusted partner for comprehensive{" "}
            {serviceContent.title} services. In today’s digital landscape,
            having a robust online presence is crucial for businesses of all
            sizes. With our {serviceContent.title} expertise, we empower you to
            harness the full potential of this versatile platform to create
            stunning websites that captivate your audience and drive results.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={serviceContent.image}
            alt={serviceContent.title}
            className="w-full h-auto"
          />
        </div>
      </div>

      <WhyChooseUsHome />

      <motion.div
        className="px-4 sm:px-28 py-16 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
        ref={ref}
      >
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex-shrink-0 text-3xl text-dark-red mr-4">
                <FaCode />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">
                  Detailed description or benefit of this feature can go here if
                  needed.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="px-4 sm:px-28 py-16 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.4 }}
        ref={ref}
      >
        <h2 className="text-3xl font-bold mb-8">Our Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
              <p className="text-gray-700">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesLayout;
