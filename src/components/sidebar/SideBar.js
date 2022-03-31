/** @format */

import React, { useState } from "react";
import "./SideBar.css";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";
import {
  sidebarVariant,
  sidebarchildrenVariants,
} from "../animation/Animation";

const SideBar = () => {
  const [isHovered, setHovered] = useState(false);
  const toggler = () => {
    setHovered(!isHovered);
  };
  return (
    <motion.div
      className="sideBar"
      onMouseEnter={toggler}
      onMouseLeave={toggler}
      animate={{
        width: isHovered ? 500 : 50,
        backgroundColor: isHovered ? "rgb(2,30,49)" : "rgb(3,17,37)",
      }}
      transition={{ duration: 1 }}>
      {!isHovered ? (
        <p>
          <HiOutlineMenuAlt4 />
        </p>
      ) : (
        <p>
          <MdOutlineClose />
        </p>
      )}
      {isHovered && (
        <motion.div
          className="sideBarList"
          variants={sidebarVariant}
          initial="hidden"
          animate="show">
          <motion.p variants={sidebarchildrenVariants}>home</motion.p>
          <motion.p variants={sidebarchildrenVariants}>about</motion.p>
          <motion.p variants={sidebarchildrenVariants}>contact</motion.p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SideBar;
