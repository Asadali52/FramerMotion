'use client'
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen gap-8 flex-col bg-[teal]">

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
          transition={{ duration: 2,repeatDelay:1,repeat:Infinity }}> 
          <p className=" w-[100px] text-center">you can also Click me!</p>
          </motion.div>
      </Link>

    </div>
  );
}
