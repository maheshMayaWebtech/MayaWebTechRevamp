import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdCastForEducation, MdOutlineTravelExplore } from "react-icons/md";
import { FaShoppingCart, FaMoneyCheckAlt } from "react-icons/fa";
import { BsBank } from "react-icons/bs";

export const components: {
  title: string;
  href: string;
  description: string;
  icon?: any;
}[] = [
  {
    title: "Healthcare",
    href: "/industries/healthcare",
    icon: MdOutlineHealthAndSafety,
    description:
      "Empowering healthcare solutions with secure, user-friendly interfaces for critical decision-making.",
  },
  {
    title: "Education",
    href: "/industries/education",
    icon: MdCastForEducation,
    description:
      "Innovative educational platforms designed to enhance learning experiences and engagement.",
  },
  {
    title: "Hospitality & Tourism",
    href: "/industries/hospitality",
    icon: MdOutlineTravelExplore,
    description:
      "Streamlining operations and enhancing customer experiences in the hospitality and tourism sectors.",
  },
  {
    title: "E-Commerce",
    href: "/industries/ecommerce",
    icon: FaShoppingCart,
    description:
      "Robust e-commerce solutions that drive sales and improve customer journeys.",
  },
  {
    title: "Banking",
    href: "/industries/banking",
    icon: BsBank,
    description:
      "Secure banking applications that offer seamless, user-friendly financial services.",
  },
  {
    title: "Fintech",
    href: "/industries/fintech",
    icon: FaMoneyCheckAlt,
    description:
      "Cutting-edge fintech solutions that provide insightful, real-time financial data and analytics.",
  },
];
