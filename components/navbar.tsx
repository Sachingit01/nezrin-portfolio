"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import clsx from "clsx";
import { motion } from "framer-motion";

const navItems = [
  { id: "home", href: "#home", label: "Home" },
  { id: "about", href: "#about", label: "About" },
  { id: "ventures", href: "#ventures", label: "Ventures" },
  { id: "events", href: "#events", label: "Events" },
  { id: "follow", href: "#follow", label: "Follow" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      navItems.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <div className="hidden md:block pt-4 pl-8 absolute z-50 top-6">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-gray-800"
        >
          Nezrin
        </Link>
      </div>
      {/* Desktop Navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden md:flex fixed top-3 left-1/2 -translate-x-1/2 z-50 px-10 py-4 w-full "
      >
        <div className="flex items-center justify-between gap-4 w-full">
          <div className="backdrop-blur-md bg-white/20 border border-white/30 shadow-sm rounded-full px-3 py-2 flex items-center justify-between max-w-3xl mx-auto">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-4">
                {navItems.map(({ id, href, label }) => (
                  <NavigationMenuItem key={id}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <NavigationMenuLink
                        href={href}
                        className={clsx(
                          "relative text-sm font-normal rounded-full transition-all duration-300 text-white text-blend",
                          activeSection === id
                            ? "bg-white text-black py-2 px-4"
                            : "py-1 px-3 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:py-2 hover:px-4"
                        )}
                      >
                        {label}
                      </NavigationMenuLink>
                    </motion.div>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex md:hidden fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-transparent px-4 py-3 bg-transparent"
      >
        <div className="flex justify-between items-center w-full">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-gray-800"
          >
            NM
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-black">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="top"
              className="w-full bg-white backdrop-blur-md"
            >
              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="mt-8 flex flex-col"
              >
                {navItems.map(({ id, href, label }, index) => (
                  <React.Fragment key={id}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex justify-start items-center px-4"
                    >
                      <Link
                        href={href}
                        className={clsx(
                          "text-lg font-normal py-3 w-full transition-all duration-300 text-[#b89b55]",
                          activeSection === id
                            ? "font-semibold pl-5 "
                            : "hover:text-[#b89b55]"
                        )}
                      >
                        {label}
                      </Link>
                    </motion.div>
                    {index !== navItems.length - 1 && (
                      <hr className="border-t border-gray-200 mx-4" />
                    )}
                  </React.Fragment>
                ))}
              </motion.nav>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>
    </>
  );
}
