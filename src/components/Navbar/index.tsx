import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import "./index.css";
import { components } from "@/constants/navConstant";

export function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setActiveSubmenu(null);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    setIsDrawerOpen(false);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        scrollPosition > 150 ? "mainNavigationBarScrolled" : "mainNavigationBar"
      } sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60`}
    >
      <div className="leftNavLogo">
        <img
          src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1723439646/mayaWebTechLogoMain_wyrfzt.png"
          alt="logo"
          height={45}
        />
      </div>
      <div className="navItemsMid">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent hover:text-slate-500`}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-slate-500">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr] ">
                  <li className="row-span-3 ">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div className="mb-2 mt-4 text-lg font-medium">
                          MayaWebTech
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Transform your business with our expert software
                          development services, delivering innovative solutions
                          tailored to your unique needs.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <div className="flex">
                    <div>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Typography"
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </div>
                    <div>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Typography"
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </div>
                  </div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-slate-500">
                Industries
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="relative grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component, ind) => (
                    <div className="industriesNavItems" key={ind}>
                      <span className="industriesNavItemLogo">
                        {component.icon && <component.icon fontSize={50} />}
                      </span>

                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    </div>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/docs"
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent hover:text-slate-500`}
              >
                Blogs
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/docs"
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent hover:text-slate-500`}
              >
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/docs"
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent hover:text-slate-500`}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
        <ul>
          <li
            style={{
              padding: "0 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img
              src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1723439646/mayaWebTechLogoMain_wyrfzt.png"
              alt="logo"
              width={100}
              className="mb-4"
            />
          </li>
          <li>
            <Link onClick={toggleDrawer} to="/">
              Home
            </Link>
          </li>
          <li>
            <button
              className="submenuTrigger"
              onClick={() => toggleSubmenu("drawer-services")}
            >
              Services{" "}
              <span>
                {activeSubmenu === "drawer-services" ? (
                  <FaMinus fontSize={10} />
                ) : (
                  <FaPlus fontSize={10} />
                )}
              </span>
            </button>
            {activeSubmenu === "drawer-services" && (
              <ul className="submenu">
                {components.map((component) => (
                  <li key={component.title} onClick={toggleDrawer}>
                    <Link to={component.href}>{component.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <button
              className="submenuTrigger"
              onClick={() => toggleSubmenu("drawer-industries")}
            >
              Industries{" "}
              <span>
                {activeSubmenu === "drawer-industries" ? (
                  <FaMinus fontSize={10} />
                ) : (
                  <FaPlus fontSize={10} />
                )}
              </span>
            </button>
            {activeSubmenu === "drawer-industries" && (
              <ul className="submenu">
                {components.map((component) => (
                  <li key={component.title} onClick={toggleDrawer}>
                    <Link to={component.href}>{component.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link onClick={toggleDrawer} to="/blogs">
              Blogs
            </Link>
          </li>
          <li>
            <Link onClick={toggleDrawer} to="/about-us">
              About Us
            </Link>
          </li>
          <li>
            <Link onClick={toggleDrawer} to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="rightButtonNav">
        <button className=" rightMenuButton flex items-center gap-1 shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-6 py-1 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
          Book Demo
          <MdArrowOutward />
        </button>
        {isDrawerOpen ? (
          <IoMdClose
            fontSize={25}
            className="mSiteMenu"
            onClick={toggleDrawer}
          />
        ) : (
          <HiMenuAlt3
            className="mSiteMenu"
            fontSize={25}
            onClick={toggleDrawer}
          />
        )}
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
