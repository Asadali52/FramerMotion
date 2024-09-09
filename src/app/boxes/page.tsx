'use client'
import React from "react";

import Box3 from "@/components/boxesComp/Box3";
import Box1 from "@/components/boxesComp/Box1";
import Box2 from "@/components/boxesComp/Box2";
import Box4 from "@/components/boxesComp/Box4";
import Box5 from "@/components/boxesComp/Box5";

const boxes = () => {


  return (
      <div className="p-12 space-y-32 mx-auto">
       <Box1 />
       <Box2 />
       <Box3 />
       <Box4 />
       <Box5 />
      </div>
  );
};

export default boxes;