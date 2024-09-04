'use client'
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const drag = () => {
  return (
    <div className="bg-[teal] h-screen flex justify-evenly items-center flex-col">

      <motion.h1 className="text-white text-[25px] font-bold relative"
        initial={{ right: 200, opacity: 0 }}
        animate={{ right: 0, opacity: 1 }}
        transition={{ duration: 2, repeatDelay: 1, repeat: Infinity }}>
        This text coming from right-side
      </motion.h1>

      <motion.div className="bg-red-500 h-[120px] w-[120px]"
        initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
        animate={{ opacity: 1, scale: 2, rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <motion.h1 className="text-white text-[25px] font-bold relative"
        initial={{ left: 200, opacity: 0, color: "green" }}
        animate={{ left: 0, opacity: 1, color: "white" }}
        transition={{ duration: 2, repeatDelay: 1, repeat: Infinity }}>
        This text coming from left-side
      </motion.h1>

      <Link href="/diffPointsAnimation">
        <motion.p className="text-[teal] bg-white px-8 py-3 rounded-[50px] text-[18px] font-[600] relative" initial={{ right: 80, opacity: 0 }} animate={{ right: 0, opacity: 1 }} transition={{ duration: 2, }} >
          click me
        </motion.p>
      </Link>

      <Link href="/fruitsAnimation">
        <motion.p className="text-[teal] bg-white px-8 py-3 rounded-[50px] text-[18px] font-[600] relative" initial={{ left: 80, opacity: 0 }} animate={{ left: 0, opacity: 1 }} transition={{ duration: 2, }} >
          click me for more
        </motion.p>
      </Link>

    </div>
  );
};
export default drag;