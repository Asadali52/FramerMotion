'use client'
import { motion, useAnimation } from "framer-motion";
import React from "react";

const Box1 = () => {

  const control = useAnimation();

  return (
    <div>
      <button className="text-white bg-[#0A96D4] px-6 py-1 mr-[1rem] mb-[3rem]"
        onClick={() => {
          control.start({
            x: 1000,
            transition: { duration: 2 }
          })
        }}
      >Move Right</button>
      <button className="text-white bg-[#0A96D4] px-6 py-1 mr-[1rem] mb-[3rem]"
        onClick={() => {
          control.start({
            x: 0,
            transition: { duration: 2 }
          })
        }}
      >Move Left</button>
      <button className="text-white bg-[#0A96D4] px-6 py-1 mr-[1rem] mb-[3rem]"
        onClick={() => {
          control.start({
            borderRadius: "50%",
            transition: { duration: 1 }
          })
        }}
      >Circle</button>
      <button className="text-white bg-[#0A96D4] px-6 py-1 mr-[1rem] mb-[3rem]"
        onClick={() => {
          control.start({
            borderRadius: 0,
            transition: { duration: 1 }
          })
        }}
      >Square</button>
      <button className="text-white bg-[#0A96D4] px-6 py-1 mr-[1rem] mb-[3rem]"
        onClick={() => {
          control.stop()
        }}
      >Stop</button>

      <motion.div className="h-[12rem] w-[12rem] bg-red-400"
        animate={control}
      />
    </div>

  );
};
export default Box1;