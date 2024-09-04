'use client'
import React from "react";
import { motion } from "framer-motion";

const DiffPointsAnimation = () => {
  return (
    <div className="bg-[teal] h-screen flex justify-evenly items-center flex-col">

      <motion.h1 className=" text-[25px] font-bold relative"
       initial={{ right: 200, opacity: 0 }}
       animate={{
         right: [200, 0, 0],
         opacity: [0, 1, 1],
         color: ["red"],
       }}
       transition={{
         duration: 8,
         repeat: Infinity,
       }}
      >
        This text coming from right-side
      </motion.h1>

      <motion.div className="bg-red-500 h-[120px] w-[120px]"
        initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
        animate={{
          opacity: [0, 1, 0.5, 1],
          scale: [0.5, 2, 1.5, 2],
          rotate: [45, 360, 180, 360]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.h1 className="text-white text-[25px] font-bold relative"
       initial={{ left: 200, opacity: 0 }}
       animate={{
         left: [200, 0, 0],
         opacity: [0, 1, 1],
         color: ["white"],
       }}
       transition={{
         duration: 6,
         repeat: Infinity,
       }}
      >
        This text coming from left-side
      </motion.h1>

    </div>
  );
};

export default DiffPointsAnimation;
