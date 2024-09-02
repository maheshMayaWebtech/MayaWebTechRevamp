import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { motion } from "framer-motion";
const cardData = [
  {
    title: "Mission",
    description:
      "Continua scale empowered metrics with cost effective innovation.",
    logo: "/mission.svg",
  },
  {
    title: "Vision",
    description:
      "Continua scale empowered metrics with cost effective innovation.",
    logo: "/vision.svg",
  },
  {
    title: "Value",
    description:
      "Continua scale empowered metrics with cost effective innovation.",
    logo: "/value.svg"
  },
];

const Vision = () => {
  return (
    <div className="flex justify-evenly gap-8 flex-wrap sm:flex-nowrap w-full mt-8">
      {cardData.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index* 0.2 }}
          viewport={{ once: true }}
        >
          <ThreeDCard
            title={item.title}
            description={item.description}
            logo={item.logo}
            key={index}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Vision;

function ThreeDCard({
  title,
  description,
  logo,
}: {
  title: string;
  description: string;
  logo: any;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#ffffffb9] relative group/card shadow-xl w-auto h-auto rounded-xl p-6 ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white w-full"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem
          translateZ="100"
          className="w-full mt-4 flex justify-center h-60"
        >
          <img src={logo} />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
