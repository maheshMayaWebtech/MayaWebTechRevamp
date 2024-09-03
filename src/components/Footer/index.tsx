import { MapPinIcon } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const sections = [
    {
      title: "Useful Links",
      links: [
        { name: "Home", to: "/" },
        { name: "About", to: "/about-us" },
        { name: "Contact", to: "contact-us" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Mobile Development", to: "/services/mobile-development" },
        { name: "Software Development", to: "/services/software-development" },
        { name: "Web Services", to: "/services/web-services" },
        { name: "Digital Marketing", to: "/services/digital-marketing" },
        { name: "Software Testing", to: "/services/software-testing" },
        { name: "Web Hosting", to: "/services/web-hosting" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Privacy Policy", to: "/privacy" },
        { name: "Terms and Conditions", to: "/tnc" },
        { name: "Disclaimer", to: "/disclaimer" },
      ],
    },
  ];

  return (
    <>
      <footer className="text-gray-800 pt-12 px-4 mt-16 pb-4 bg-gradient-to-t from-rose-100 via-white to-white ">
        <div className="mx-auto px-4 container overflow-hidden flex flex-col lg:flex-row justify-between">
          <Link to="/" className="block mr-4 ">
            <img
              src="/mayaWebTechLogoMain.png"
              alt="logo"
              width={150}
              className="mb-4"
            />
            <h4 className="py-4 text-gray-700 text-left w-64">
              T-04, A-44, near sector-15 Metro Station, <br />{" "}
              Sector 2, Noida, Uttar Pradesh <br /> 201301
            </h4>
            <Link
              to="https://maps.app.goo.gl/SpDLMcd91Xzaxha1A"
              target="_blank"
              className="flex items-center text-left gap-2 text-primary hover:underline mt-2"
            >
              <MapPinIcon className="w-4 h-4 text-red-700" />
              View on Map
            </Link>
          </Link>
          <div className="w-2/3 block sm:flex mt-6 lg:mt-0">
            {sections.map((section, index) => (
              <ul
                key={index}
                className="text-black list-none p-0 flex flex-col text-left w-full mb-8 sm:mb-0"
              >
                <li className="inline-block py-2 px-3 uppercase font-bold tracking-wide">
                  {section.title}
                </li>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.to}
                      className="inline-block py-2 px-3 hover:text-red-800 no-underline transition-all transition-400 hover:translate-x-2 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
            <div className="text-black flex flex-col w-full">
              <div className="inline-block py-2 px-3 text-black uppercase font-bold tracking-wide text-left">
                Follow Us
              </div>
              <div className="flex pl-4 justify-start mt-2">
                <Link
                  className="flex items-center text-black hover:text-[#106aff] mr-6 no-underline transition-all transition-400 hover:translate-y-[-4px]"
                  to="https://www.facebook.com/mayawebtech2"
                  target="_blank"
                  >
                  <FaFacebook fontSize={25} />
                </Link>
                <Link
                  className="flex items-center text-black hover:text-[#0a66c2] mr-6 no-underline transition-all transition-400 hover:translate-y-[-4px]"
                  to="https://www.linkedin.com/company/96414344/admin/dashboard/"
                  target="_blank"
                  >
                  <FaLinkedin fontSize={25} />
                </Link>
                <Link
                  className="flex items-center text-black hover:text-rose-600 no-underline transition-all transition-400 hover:translate-y-[-4px]"
                  to="https://www.instagram.com/mayawebtech"
                  target="_blank"
                >
                  <FaInstagram fontSize={25} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 mt-4 pt-6 text-gray-600 border-t border-gray-800 text-center">
          © {year} Maya Web Tech. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
