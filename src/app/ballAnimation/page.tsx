'use client'
import { easeInOut, motion } from "framer-motion";
import React from "react";

const BallAnimation = () => {

  return (
    <div className="flex justify-center items-center gap-16 h-screen bg-[teal]">

      <motion.div className="border-b-[2px] border-white w-[8rem] h-[40%] flex justify-center items-end">
        <motion.div
          initial={{ y: 0 }}
          animate={{
            y: [0, -200, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeIn"
          }}
          className="h-[60px] w-[60px] rounded-full border-[2px] border-white white-shadow"
        />
      </motion.div>

      <div className="border-b-[2px] border-white w-[8rem] h-[40%] flex justify-center items-end">
        <motion.div
          initial={{ y: 0 }}
          animate={{
            y: [0, -200, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="h-[60px] w-[60px] rounded-full border-[2px] border-white white-shadow"
        />
      </div>

      <div className="border-b-[2px] border-white w-[8rem] h-[40%] flex justify-center items-end">
        <motion.div
          initial={{ y: 0 }}
          animate={{
            y: [0, -200, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut"
          }}
          className="h-[60px] w-[60px] rounded-full border-[2px] border-white white-shadow"
        />
      </div>

    </div>
  );
};

export default BallAnimation;
