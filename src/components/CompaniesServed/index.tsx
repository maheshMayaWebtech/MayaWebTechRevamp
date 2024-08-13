import { motion } from 'framer-motion';

const logos = [
  "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1723447253/Fincafe_dnp2zl.png",
  "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1723447253/image_ld5cqs.png",
  "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1723447385/1000059971-removebg-preview_tgsgve.png",
  "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1723447254/logo-removebg-preview_jn0b09.png",
  "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1723447254/WEBWISH__LOGO_2_PNG-removebg-preview_l6hizl.png",
];

const CompaniesServed = () => {
  return (
    <div className="relative bottom-32 sm:bottom-24">
      <h2 className="mb-10 sm:mb-5 text-xl text-center sm:text-3xl font-normal dark:text-white text-black">
        Brands trust the expertise of{" "}
        <span className="font-medium text-red-700"> Maya WebTech</span>
      </h2>
      <div className="flex w-4/5 backdrop-blur-lg justify-center mx-auto rounded-lg bg-transparent border-2 border-gray-300/20 shadow-lg py-4 overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
          }}
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center justify-center flex-none h-24">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="mix-blend-overlay w-24 sm:w-32 h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CompaniesServed;
