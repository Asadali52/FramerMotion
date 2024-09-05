'use client'
import { motion } from "framer-motion";
import React, { useState } from "react";

const Box2 = () => {

  return (
    <div>
      <motion.div className="h-[12rem] w-[12rem] bg-red-300"
        drag
        dragConstraints={{
          right: 20,
          left: -20,
          top: 5,
          bottom: 5
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
    </div>
  );
};
export default Box2;