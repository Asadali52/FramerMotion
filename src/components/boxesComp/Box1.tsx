'use client'
import { motion } from "framer-motion";
import React, { useState } from "react";

const Box1 = () => {

  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div>
      <motion.div className="h-[12rem] w-[12rem] bg-red-200"
        initial={{
          opacity: 0.1,
        }}
        animate={{
          x: isAnimating ? "70rem" : 0,
          opacity: isAnimating ? 1 : 0.5,
          rotate: isAnimating ? 360 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 60,
        }}
        onClick={() => setIsAnimating(!isAnimating)}
      />
    </div>

  );
};
export default Box1;