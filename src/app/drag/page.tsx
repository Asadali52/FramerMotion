'use client'
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const drag = () => {
  return (
    <div className="bg-[teal] h-screen">
      <motion.div className="bg-red-500 h-[120px] w-[120px] mx-auto"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >

      </motion.div>
    </div>
  );
};
export default drag;