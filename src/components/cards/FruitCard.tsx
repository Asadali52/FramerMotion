import React from "react";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 600
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 0.8,
      // repeat: Infinity,
    }
  }
};

type props = {
  emoji: any;
  hueA: number;
  hueB: number;
}

// const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

const FruitCard =({ emoji, hueA, hueB }: props) => {
  // const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (

    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      {/* <div className="splash" style={{ background }} /> */}
      <motion.div className="card" variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>

  );
}

export default FruitCard;