'use client'
import { motion } from "framer-motion";
import React, { useState } from "react";

const expandableCard = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nice-gradient h-screen flex justify-center items-center">
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className="bg-white rounded-[15px] p-[2rem] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>

        <motion.h2 layout="position"
          className="text-[20px] font-medium">Framer Motion 🚀</motion.h2>

        {isOpen &&
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="w-[35rem]">
            <p className="pt-[.5rem]">umenda aliquiBeatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tempore unde ratione, dolore eos in?</p>
            <p className="pt-[.5rem]">Lorem, mpore debitistae corrupti provideis architecto quasi accusantium modi hic!</p>
            <button className="bg-[#0A96D4] text-white mt-[.5rem] px-2 py-1 ">Hello</button>
          </motion.div>
        }

      </motion.div>
    </div>

  );
};

export default expandableCard;