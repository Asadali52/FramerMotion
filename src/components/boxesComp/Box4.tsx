'use client'
import { motion } from "framer-motion";
import React from "react";

const Box4 = () => {

  return (
    <div>
      <motion.div className="h-[12rem] w-[12rem] bg-red-300"
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          rotate: [0, 0, 270, 270, 0]
        }}
        transition={{
          duration: 2
        }}
      ></motion.div>
    </div>
  );
};
export default Box4;