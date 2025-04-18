'use client'
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen gap-8 flex-col bg-[teal]">
      <div className="space-x-5 text-red-500">
        <Link href="/cards" className="bg-white rounded-[5px] py-3 px-7 font-bold">Cards</Link>
        <Link href="/boxes" className="bg-white rounded-[5px] py-3 px-7 font-bold">Boxes</Link>
        <Link href="/reactSlider" className="bg-white rounded-[5px] py-3 px-7 font-bold">React Slider</Link>
        <Link href="/ballAnimation" className="bg-white rounded-[5px] py-3 px-7 font-bold">Ball Animation</Link>
        <Link href="/svgLineDrawing" className="bg-white rounded-[5px] py-3 px-7 font-bold">SVG Line Drawing</Link>
        <Link href="/expandableCard" className="bg-white rounded-[5px] py-3 px-7 font-bold">Expandable Card</Link>
        <Link href="/diffPointsAnimation" className="bg-white rounded-[5px] py-3 px-7 font-bold">Diff Points Animation</Link>
      </div>

      <motion.h2 className="text-[40px] font-[600] relative text-white"
        initial={{ left: -50, opacity: 0 }}
        animate={{ left: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Basic Framer Motion
      </motion.h2>

      <Link href="/drag">
        <motion.div className="h-[150px] w-[150px] bg-white flex justify-center items-center"
          initial={{ rotate: 0, scale: 1 }}
          animate={{ rotate: 360, scale: 1.3, borderRadius: 100 }}
          transition={{ duration: 2, repeatDelay: 1, repeat: Infinity }}>
          <p className=" w-[100px] text-center">you can also Click me!</p>
        </motion.div>
      </Link>

    </div>
  );
}
