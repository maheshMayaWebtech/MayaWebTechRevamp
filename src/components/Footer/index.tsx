import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <footer className="text-gray-800 pt-12 px-4 mt-16 pb-4">
        <div className="mx-auto px-4 container overflow-hidden flex flex-col lg:flex-row justify-between">
          <a href="/" className="block mr-4 w-1/3">
            <img
              src="/mayaWebTechLogoMain.png"
              alt="logo"
              width={150}
              className="mb-4"
            />
          </a>
          <div className="w-2/3 block sm:flex mt-6 lg:mt-0">
            <ul className="text-black list-none p-0 flex flex-col text-left w-full mb-8 sm:mb-0">
              <li className="inline-block py-2 px-3 uppercase font-bold tracking-wide">
                Services
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 hover:text-red-800 no-underline transition-all transition-400 hover:translate-x-2"
                >
                  Industries
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 hover:text-red-800 no-underline transition-all transition-400 hover:translate-x-2"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 hover:text-red-800 no-underline transition-all transition-400 hover:translate-x-2"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 hover:text-red-800 no-underline transition-all transition-400 hover:translate-x-2"
                >
                  FAQ
                </a>
              </li>
            </ul>
            <ul className="text-black list-none p-0 flex flex-col text-left w-full mb-8 sm:mb-0">
              <li className="inline-block py-2 px-3 text-black uppercase font-bold tracking-wide">
                Company
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 hover:text-red-800 no-underline transition-all transition-400 hover:translate-x-2"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 hover:text-red-800 no-underline transition-all transition-400 hover:translate-x-2"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
            <ul className="text-black list-none p-0 flex flex-col text-left w-full mb-8 sm:mb-0">
              <li className="inline-block py-2 px-3 text-black uppercase font-bold tracking-wide">
                Blogs
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 hover:text-red-800 no-underline transition-all transition-400 hover:translate-x-2"
                >
                  Customer Stories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 hover:text-red-800 no-underline transition-all transition-400 hover:translate-x-2"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 hover:text-red-800 no-underline transition-all transition-400 hover:translate-x-2"
                >
                  Guides
                </a>
              </li>
            </ul>
            <div className="text-black flex flex-col w-full">
              <div className="inline-block py-2 px-3 text-black uppercase font-bold tracking-wide text-left">
                Follow Us
              </div>
              <div className="flex pl-4 justify-start mt-2">
                <a
                  className="flex items-center text-black hover:text-[#106aff] mr-6 no-underline transition-all transition-400 hover:translate-y-[-4px]"
                  href="#"
                >
                  <FaFacebook fontSize={25} />
                </a>
                <a
                  className="flex items-center text-black hover:text-[#0a66c2] mr-6 no-underline transition-all transition-400 hover:translate-y-[-4px]"
                  href="#"
                >
                  <FaLinkedin fontSize={25} />
                </a>
                <a
                  className="flex items-center text-black hover:text-rose-600 no-underline transition-all transition-400 hover:translate-y-[-4px]"
                  href="#"
                >
                  <FaInstagram fontSize={25} />
                </a>
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
