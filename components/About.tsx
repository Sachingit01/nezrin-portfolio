"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    className: "order-last sm:col-start-3",
    delay: 0.3,
    image: "/Nezrin (1).jpeg",
  },
  {
    className: "sm:row-start-2 ",
    delay: 0.4,
    image: "/Nezrin (2).jpeg",
  },
  {
    className: "sm:col-span-2 sm:row-start-2 ",
    delay: 0.5,
    image: "/Nezrin (3).jpeg",
  },
  {
    className: " sm:col-span-2 sm:row-start-3 ",
    delay: 0.6,
    image: "/Nezrin (4).jpeg",
  },
  {
    className: "sm:col-start-3 sm:row-start-3 ",
    delay: 0.7,
    image: "/Nezrin (5).jpeg",
  },
];

export default function About() {
  return (
    <div className="px-6 md:px-20 py-20 h-auto bg-amber-50">
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-5 items-start h-auto">
        {/* Desktop Grid Layout (lg and above) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          // className="hidden lg:grid grid-cols-5 gap-3 w-full h-auto grid-rows-0 gap-y-3"
          className="hidden lg:grid grid-cols-1 gap-3 w-full h-auto sm:grid-cols-2 md:grid-cols-5 sm:grid-rows-0 sm:gap-y-3 md:w-[80vw]"
        >
          {/* Left Heading Block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="col-span-2 h-auto rounded-lg w-full flex flex-col justify-center"
          >
            <h1 className="text-4xl font-semibold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#b89b55] to-[#f2d273] break-words">
              Leading with <br /> Vision, Impacting <br /> the World
            </h1>
          </motion.div>

          {/* Grid Images */}
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`${item.className} h-50 rounded-lg w-full`}
            >
              <Image
                src={item.image}
                alt={`Gallery ${i}`}
                width={300}
                height={300}
                className="w-full h-full object-cover grayscale rounded-lg transition duration-300 hover:scale-[1.02] hover:grayscale-0"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Layout */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="block lg:hidden w-full"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl font-semibold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#b89b55] to-[#f2d273] break-words mb-6"
          >
            Leading with <br /> Vision, Impacting <br /> the World
          </motion.h1>

          {/* Text Section */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[#2D2203] text-base font-normal mb-4"
            style={{ fontSize: "1.2rem" }}
          >
            I am a serial entrepreneur driven by a deep passion for innovation
            and meaningful impact. As the Founder of Neznco and Co-Founder of
            PBS, I have had the privilege of leading ventures across diverse
            sectors, including healthcare, education, fashion, and social
            impact, through initiatives such as Inova Education Foundation,
            Ayushman Ayurveda and Gemss Arabia.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[#2D2203] text-base font-normal mb-6"
            style={{ fontSize: "1.2rem" }}
          >
            With a strong belief in the power of strategic vision and
            collaborative leadership, I have dedicated my journey to
            transforming ideas into purpose-driven enterprises. My mission is to
            empower individuals and communities while building a future where
            innovation serves as a catalyst for lasting change.
          </motion.p>

          {/* Custom Image Grid on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid grid-cols-3 gap-2"
          >
            {/* First row: bigger + smaller */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="col-span-2 rounded-lg overflow-hidden"
            >
              <Image
                src={data[1].image}
                alt="Mobile Image 1"
                width={100}
                height={100}
                className="w-full h-[150px] object-cover grayscale rounded-lg transition duration-300 hover:scale-[1.02] hover:grayscale-0"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="col-span-1 rounded-lg overflow-hidden"
            >
              <Image
                src={data[2].image}
                alt="Mobile Image 2"
                width={100}
                height={100}
                className="w-full h-[150px] object-cover grayscale rounded-lg transition duration-300 hover:scale-[1.02] hover:grayscale-0"
              />
            </motion.div>

            {/* Second row: smaller + bigger */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="col-span-1 rounded-lg overflow-hidden"
            >
              <Image
                src={data[3].image}
                alt="Mobile Image 3"
                width={100}
                height={100}
                className="w-full h-[150px] object-cover grayscale rounded-lg transition duration-300 hover:scale-[1.02] hover:grayscale-0"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="col-span-2 rounded-lg overflow-hidden"
            >
              <Image
                src={data[4].image}
                alt="Mobile Image 4"
                width={100}
                height={100}
                className="w-full h-[150px] object-cover grayscale rounded-lg transition duration-300 hover:scale-[1.02] hover:grayscale-0"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side Text (only for lg+) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="hidden lg:flex flex-col gap-6 items-center justify-center h-full"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[#2D2203] text-base font-normal font-body"
            style={{ fontSize: "1.2rem" }}
          >
            I am a serial entrepreneur driven by a deep passion for innovation
            and meaningful impact. As the Founder of Neznco and Co-Founder of
            PBS, I have had the privilege of leading ventures across diverse
            sectors, including healthcare, education, fashion, and social
            impact, through initiatives such as Inova Education Foundation,
            Ayushman Ayurveda and Gemss Arabia.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[#2D2203] text-base font-normal"
            style={{ fontSize: "1.2rem" }}
          >
            With a strong belief in the power of strategic vision and
            collaborative leadership, I have dedicated my journey to
            transforming ideas into purpose-driven enterprises. My mission is to
            empower individuals and communities while building a future where
            innovation serves as a catalyst for lasting change.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
