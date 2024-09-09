'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const images = [
  { id: 1, img: require("@/images/others/pic2.jpg") },
  { id: 2, img: require("@/images/others/pic3.jpg") },
  { id: 3, img: require("@/images/others/pic4.jpg") },
  { id: 4, img: require("@/images/others/pic7.jpg") },
  { id: 5, img: require("@/images/others/pic5.jpg") },
  { id: 6, img: require("@/images/others/pic6.jpg") },
  { id: 7, img: require("@/images/others/pic7.jpg") },
  { id: 8, img: require("@/images/others/pic7.jpg") },
  { id: 9, img: require("@/images/others/pic2.jpg") },
];

const ReactSlider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carousel.current) {
      const totalWidth = carousel.current.scrollWidth - carousel.current.offsetWidth;
      setWidth(totalWidth);
    }
  }, []);

  return (
    <div>
      <motion.div ref={carousel} className="carousel cursor-grab overflow-hidden my-[4%] mx-[20%]" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.05}
          className="flex"
        >
          {images.map((item) => (
            <motion.div className="min-h-[25rem] min-w-[25rem] p-[20px]" key={item.id}>
              <Image
                src={item.img}
                alt="images"
                className="rounded-[2rem] pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ReactSlider;
