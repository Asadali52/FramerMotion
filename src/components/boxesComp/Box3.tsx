'use client'
import { motion } from "framer-motion";
import React from "react";

const Box3 = () => {

  const boxVariant = {
    hidden: {
      x: "-100vw"
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    }
  }

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
    }
  }

  return (
    <div>
      <motion.div className="h-[12rem] w-[12rem] bg-red-300 flex flex-col justify-center items-center gap-2"
        variants={boxVariant}
        initial="hidden"
        animate="visible"
      >
        {[1, 2, 3, 4].map(box => {
          return (
            <motion.li key={box} className="h-[1rem] w-[1rem] bg-white list-none p-[1rem]"
              variants={listVariant}
            ></motion.li>
          )
        })}

      </motion.div>
    </div>
  );
};
export default Box3;
