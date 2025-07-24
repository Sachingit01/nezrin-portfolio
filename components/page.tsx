"use client";

import { motion, useInView } from "framer-motion";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useRef } from "react";

import { BsArrowUpRightCircle } from "react-icons/bs";
import SvgNoise from "@/public/noise.svg";

const socialLinks = [
  {
    platform: "Instagram",
    username: "@dr.nezrin_midhilaj",
    icon: <FaInstagram className="text-[#b89b55]" size={30} />,
    url: "https://instagram.com/dr.nezrin_midhilaj",
  },
  {
    platform: "LinkedIn",
    username: "Nezrin Midhlaj",
    icon: <RxLinkedinLogo className="text-[#b89b55]" size={30} />,
    url: "https://www.linkedin.com/in/nezrinmidhlaj",
  },
  {
    platform: "YouTube",
    username: "@nezrinmidhlaj2496",
    icon: <FaYoutube className="text-[#b89b55]" size={30} />,
    url: "https://www.youtube.com/@nezrinmidhlaj2496",
  },
];

export default function FollowJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // animate only once

  return (
    <section id="follow" className="bg-[#f8f4ea] py-20 px-5 md:px-20">
      <div ref={ref} className="text-start mb-12">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#b89b55] to-[#f2d273]"
        >
          Follow <span>My Journey</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-4 text-[#2D2203] text-md md:text-lg"
        >
          See what I’m building, sharing, and inspiring across social media
          platforms.
        </motion.p>
      </div>

      {/* Social Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.4 + index * 0.2,
            }}
            className="flex gap-6 p-6 bg-[#f2ebdc] bg-noise bg-[length:400px_400px] bg-[image:url('/grains.png')] hover:shadow-md rounded-md h-40 transition duration-300 relative"
          >
            <SvgNoise className="absolute inset-0" />
            <div className="flex flex-col gap-14 w-full justify-between">
              <div className="flex justify-between">
                {link.icon}
                <BsArrowUpRightCircle className="text-[#b89b55] text-3xl" />
                  
              </div>
              <span className="text-[#b89b55] text-xl">{link.username}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

