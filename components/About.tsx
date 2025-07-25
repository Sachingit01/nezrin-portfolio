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
    className: "sm:col-span-2 sm:row-start-3 ",
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
    <div className="px-6 md:px-20 py-20 h-auto bg-amber-50 ">
      <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-5 items-start h-auto">
        {/* Left Side with animated grid */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-3 w-full h-auto sm:grid-cols-2 md:grid-cols-5 sm:grid-rows-0 sm:gap-y-3 md:w-[80vw]"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="order-first sm:col-span-2 h-auto rounded-lg w-full flex flex-col justify-center"
          >
            <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#b89b55] to-[#f2d273] break-words">
              Leading with <br /> Vision, Impacting <br /> the World
            </h1>
          </motion.div>

          {/* Animated Images */}
          {data.map((item, i) => (
            <motion.div
              key={i}
              className={`${item.className} h-50 rounded-lg w-full`}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: item.delay }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={item.image}
                alt="Gallery"
                width={300}
                height={300}
                className="w-full h-full object-cover grayscale rounded-lg transition duration-300 hover:scale-[1.02] hover:grayscale-0"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side with animated text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
          className="flex flex-col gap-6 items-center justify-center h-full"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            commodi, provident magnam, in, ab nulla animi quod recusandae
            mollitia totam odit. Quod neque sint, cupiditate magni vero numquam.
            Expedita, facere! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Minima commodi, provident magnam, in, ab nulla animi quod
            recusandae mollitia totam odit.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            commodi, provident magnam, in, ab nulla animi quod recusandae
            mollitia totam odit. Quod neque sint, cupiditate magni vero numquam.
            Expedita, facere! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Minima commodi, provident magnam, in, ab nulla animi quod
            recusandae mollitia totam odit.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
