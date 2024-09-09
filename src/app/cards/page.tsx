'use client'
import { motion } from "framer-motion";
import React from "react";

const articles = [
  { id: 1, title: "Great Times", para: "Lorem ipsumfacere explicabo omnis in laboriosam assumenda provident perferendis debitis ea ratione suscipit non, quo voluptatibus aperiam impedit. Sunt officia perspiciatis sequi?" },
  { id: 1, title: "Great Times", para: "Lorem ipsum acere explicabo omnis in laboriosam assumenda provident perferendis debitis ea ratione suscipit non, quo voluptatibus aperiam impedit. Sunt officia perspiciatis sequi?" },
  { id: 1, title: "Great Times", para: "Lorem ipsum acere explicabo omnis in laboriosam assumenda provident perferendis debitis ea ratione suscipit non, quo voluptatibus aperiam impedit. Sunt officia perspiciatis sequi?" },
  { id: 1, title: "Great Times", para: "Lorem ipsum acere explicabo omnis in laboriosam assumenda provident perferendis debitis ea ratione suscipit non, quo voluptatibus aperiam impedit. Sunt officia perspiciatis sequi?" },
  { id: 1, title: "Great Times", para: "Lorem ipsumfacere explicabo omnis in laboriosam assumenda provident perferendis debitis ea ratione suscipit non, quo voluptatibus aperiam impedit. Sunt officia perspiciatis sequi?" },
  { id: 1, title: "Great Times", para: "Lorem facere explicabo omnis in laboriosam assumenda provident perferendis debitis ea ratione suscipit non, quo voluptatibus aperiam impedit. Sunt officia perspiciatis sequi?" },
  { id: 1, title: "Great Times", para: "Lorem ipsum dolor sxplicabo omnis in laboriosam assumenda provident perferendis debitis ea ratione suscipit non, quo voluptatibus aperiam impedit. Sunt officia perspiciatis sequi?" },

];

const cards = () => {

  return (

    <div className="flex flex-wrap gap-4">

      {articles.map((article, i) => (

        <motion.div key={article.id} className="bg-[#0A96D4] text-white p-4 m-2 w-[250px] rounded-[10px]"
          initial={{
            opacity: 0,
            translateX: i % 2 === 0 ? -50 : 50,
            translateY: -50
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            translateY: 0
          }}
          transition={{ duration: 0.3, delay: i * 0.2 }}
        >
          <h1 className="text-[25px] font-medium">{article.title}</h1>
          <p className="text-[14px]">{article.para}</p>

        </motion.div>
      ))}

    </div>

  );
};

export default cards;