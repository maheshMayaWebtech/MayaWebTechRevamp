import reviewImage from "../../../public/reviews.png";
import greatPlace from "../../../public/greatPlace.png";
import glassdoor from "../../../public/glassdoor.png";
import "./index.css";
import { FaStar } from "react-icons/fa";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { motion } from "framer-motion";

const ReviewHome = () => {
  const reviews = [
    "I feel a sense of pride working at Simform.",
    "Simform is a great place to work with a supportive team.",
    "The work culture at Simform encourages growth and learning.",
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-28 gap-16 py-16 sm:py-16">
      <motion.div
        initial={{ opacity: 0, x: -90 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
      >
        <div >
          <img
            src={reviewImage}
            alt="Review Image"
            className="reviewImageSection"
          />
          <div className="reviewImageReviews absolute text-left top-8 right-0 sm:right-[-50px] w-[70%] text-sm bg-[#ffffffda] shadow-lg flex flex-col gap-2 px-8 py-4 rounded-md pr-4">
            <div className="absolute top-[-10px] text-xs font-semibold left-2 sm:left-[-40px] w-16 p-1">
              <img src={greatPlace} alt="greatplace" className="rounded-md" />
            </div>
            <div className="text-lg font-semibold text-right">
              Great Place to Work reviews
            </div>
            {reviews.map((review, index) => (
              <div key={index} className="text-xs italic text-gray-500">
                {review}
                <br />
                <span className="flex gap-2 not-italic font-semibold mt-1">
                  DevOps Engineer
                  <span className="flex gap-[1.5px]">
                    {[...Array(5).keys()].map((item) => (
                      <FaStar key={item} className="text-yellow-500" />
                    ))}
                  </span>
                </span>
              </div>
            ))}
          </div>
          <div className="reviewImageReviews absolute text-left bottom-[-30px] left-0 w-[70%] text-sm bg-[#ffffffda] shadow-lg flex flex-col gap-2 px-8 py-4 rounded-md pr-4">
            <div className="absolute top-[-10px] text-xs font-semibold right-[-10px] sm:right-[-30px] w-16 p-1">
              <img src={glassdoor} alt="greatplace" className="rounded-md" />
            </div>
            <div className="text-lg font-semibold">Glassdoor Reviews</div>
            {reviews.map((review, index) => (
              <div key={index} className="text-xs italic text-gray-500">
                {review}
                <br />
                <span className="flex gap-2 not-italic font-semibold mt-1">
                  DevOps Engineer
                  <span className="flex gap-[1.5px]">
                    {[...Array(5).keys()].map((item) => (
                      <FaStar key={item} className="text-green-500" />
                    ))}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 90 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="ratingRightContent flex flex-col gap-8 w-auto text-left justify-center px-2 sm:pl-12"
      >
        <div className="space-y-8" >
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Culture <span className="font-bold text-red-700">crafted</span> and{" "}
            <span className="font-bold text-red-700"> loved</span> by engineers
          </h1>
          <p className="sm:text-base font-extralight">
            The Simform culture is crafted to create a truly rewarding
            experience for engineers,{" "}
            <span className="font-medium">
              {" "}
              meaning your team will be made up of highly motivated people.{" "}
            </span>{" "}
            As a result our teams are tightly integrated with yours. And that is
            shown by the love they shower back on us.
          </p>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span>Learn More</span>
          </HoverBorderGradient>
        </div>
      </motion.div>
    </div>
  );
};

export default ReviewHome;
