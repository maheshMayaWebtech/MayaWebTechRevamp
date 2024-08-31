import { FaBuilding, FaLaptop, FaBullhorn, FaLeaf } from "react-icons/fa";
import { WobbleCard } from "../../components/ui/wobble-card";
import { motion } from "framer-motion";
import "./index.css";
import { useState } from "react";
import { ContactDrawer } from "@/common/ContactDrawer";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutUs = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const teamMembers = [
    {
      src: "/placeholder-user.jpg",
      name: "Jaggu Bhai",
      shortName: "JD",
      position: "CEO",
      message:
        "Jaggu is the visionary leader behind MayaWebTech. With over 15 years of industry experience, she is passionate about driving innovation and empowering businesses to reach new heights.",
      linkedin: "https://www.linkedin.com/in/jaggu-bhai",
      twitter: "https://twitter.com/jaggu-bhai",
      email: "mailto:jaggu.bhai@example.com",
    },
    {
      src: "/placeholder-user.jpg",
      name: "Java Script",
      shortName: "JS",
      position: "CTO",
      message:
        "Java Script is the technical mastermind behind Acme Software. With a deep understanding of cutting-edge technologies, he leads our engineering team to deliver innovative",
      linkedin: "https://www.linkedin.com/in/java-script",
      twitter: "https://twitter.com/java-script",
      email: "mailto:java.script@example.com",
    },
    {
      src: "/placeholder-user.jpg",
      name: "Ramu Bhai",
      shortName: "RB",
      position: "Product Manager",
      message:
        "Ramu Bhai is the driving force behind our product strategy. With her keen eye for user experience and market trends, she ensures that our solutions are tailored to meet the evolving needs",
      linkedin: "https://www.linkedin.com/in/ramu-bhai",
      twitter: "https://twitter.com/ramu-bhai",
      email: "mailto:ramu.bhai@example.com",
    },
    {
      src: "/placeholder-user.jpg",
      name: "Pappu Bhai",
      shortName: "PB",
      position: "Lead Developer",
      message:
        "Pappu Bhai is the technical lead of our engineering team. With his exceptional problem-solving skills and deep expertise in software development, he ensures that our solutions are robust, scalable, and secure.",
      linkedin: "https://www.linkedin.com/in/pappu-bhai",
      twitter: "https://twitter.com/pappu-bhai",
      email: "mailto:pappu.bhai@example.com",
    },
  ];

  const services = [
    {
      icon: <FaBuilding className="text-purple-500 text-3xl" />,
      title: "Corporate Strategy",
      description:
        "Together we transform your business from the people to the processes.",
      bgColor: "bg-purple-100",
    },
    {
      icon: <FaLaptop className="text-yellow-500 text-3xl" />,
      title: "Technology Services",
      description:
        "Together we transform your business from the people to the processes.",
      bgColor: "bg-yellow-100",
    },
    {
      icon: <FaBullhorn className="text-blue-500 text-3xl" />,
      title: "Business Consulting",
      description:
        "Together we transform your business from the people to the processes.",
      bgColor: "bg-blue-100",
    },
    {
      icon: <FaLeaf className="text-green-500 text-3xl" />,
      title: "Excellence",
      description:
        "Together we transform your business from the people to the processes.",
      bgColor: "bg-green-100",
    },
  ];

  return (
    <div className="flex flex-col gap-4 sm:gap-20">
      <div className="heroAboutSection relative flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 min-h-screen overflow-hidden pt-28 sm:pt-8">
        <img
          src="/about_blob.svg"
          className="absolute right-[-300px] top-0 h-full max-w-none object-cover transform "
          height={1100}
          width={1100}
          alt="Decorative Blob"
        />
        <motion.div
          className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left w-full sm:w-6/12"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl lg:text-5xl text-red-800 mb-4 sm:mb-8">
            We’re Your Digital Technological Partner
          </h1>
          <p className="text-gray-500 mb-6 sm:text-xl">
            Since 2023, we’ve been helping businesses like yours accelerate
            their journey to success, backed by the right transformative
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-red-700 text-white py-2 px-6 rounded-full hover:bg-red-800 transition">
              Read More
            </button>
            <button
              onClick={() => setOpenDrawer(true)}
              className="text-red-700 py-2 px-6 rounded-full border-[1px] border-red-700 transition"
            >
              Contact Us
            </button>
          </div>
        </motion.div>

        <div className="relative z-10 mt-8 lg:mt-0">
          <img
            src="/about_info.svg"
            alt="Business Illustration"
            className="w-full max-w-sm"
          />
        </div>
      </div>

      <section className="bg-[url('/light-pink.jpg')] bg-no-repeat bg-cover w-full py-12 md:py-24 lg:py-32 sm:px-16 text-left">
        <div className="container px-4 md:px-6">
          <div className="sm:grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  About <span className="text-red-700"> Maya Web Tech</span>
                </h2>
                <p className=" text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Maya Web Tech Software is a leading provider of innovative
                  software solutions. Our mission is to empower businesses of
                  all sizes with cutting-edge technology that drives efficiency,
                  productivity, and growth.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are guided by a set of core values that shape our approach
                  to every project: innovation, integrity, and
                  customer-centricity. Our team of passionate experts is
                  dedicated to delivering exceptional results and building
                  long-lasting partnerships with our clients.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                </div>
              </motion.div>
            </div>
            <motion.img
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              src="/about-team.svg"
              alt="Contact Us"
              className="mx-auto overflow-hidden rounded-xl object-cover object-center"
            />
          </div>
        </div>
      </section>

      <div className="allItemsCircle relative flex flex-col items-center justify-center bg-cover bg-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <motion.h1
            className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 capitalize"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A workplace focused on experience and enabling teams to work
            together better
          </motion.h1>
          <motion.p
            className="text-gray-600 mb-6"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            How we work is changing, and businesses must find new and better
            ways to communicate.
          </motion.p>
          <motion.button
            className="bg-red-700 text-white py-2 px-6 rounded-lg hover:bg-red-800 transition"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get Started
          </motion.button>
        </div>
      </div>

      <div className="whyChooseUsCards">
        <div className="flex flex-col px-4 sm:px-28">
          <p className="text-red-700 text-xs sm:text-lg">
            Your Trusted Partner in Digital World{" "}
          </p>
          <h1 className="text-xl sm:text-5xl mt-2 font-bold">Why choose us?</h1>
        </div>
        <div className="container mx-auto py-10 px-4 sm:px-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: index * 0.5, delay: 0.2 * index }}
                viewport={{ once: true }}
                key={index}
                className="whyChooseUsCardItems bg-white p-6 rounded-lg shadow-md text-center border  hover:translate-y-[-10px] hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <div
                  className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full ${service.bgColor} mb-4`}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-500 mt-2">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="ourExpertiseAbout">
        <div className="flex flex-col px-4 sm:px-28 pt-16 py-8 sm:py-16">
          <p className="text-red-700 text-xs sm:text-lg">
            Elevating Standards Through Expert Craftsmanship
          </p>
          <h1 className="text-3xl sm:text-5xl mt-2 font-bold">Our Expertise</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-4 sm:px-28">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Excellence in Craftsmanship
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                With over 100,000 mothly active bot users, Gippity AI is the
                most popular AI platform for developers.
              </p>
            </div>
            <img
              src="/linear.webp"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px]">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Innovation and Creativity
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              If someone yells “stop!”, goes limp, or taps out, the fight is
              over.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Empowerment Through Technology
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                With over 100,000 mothly active bot users, Gippity AI is the
                most popular AI platform for developers.
              </p>
            </div>
            <img
              src="/linear.webp"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
        </div>
      </div>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Meet the Team
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our talented team of experts is dedicated to delivering
              exceptional software solutions that help our clients succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[url('/light-pink.jpg')] bg-no-repeat rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={member.src} alt={member.name} />
                    <AvatarFallback>{member.shortName}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold">{member.name}</h4>
                    <p className="text-muted-foreground text-sm">
                      {member.position}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground text-sm">
                  {member.message}
                </p>
                <div className="mt-4 flex items-center justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                  >
                    <LinkedinIcon className="w-5 h-5 hover:text-sky-600" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                  >
                    <TwitterIcon className="w-5 h-5 hover:text-sky-400" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                  >
                    <MailIcon className="w-5 h-5 hover:text-rose-500" />
                    <span className="sr-only">Email</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactDrawer isOpen={openDrawer} handleChange={setOpenDrawer} />
    </div>
  );
};

export default AboutUs;
