/** @format */

import React from "react";
import "./TopBar.css";
import { BiSearch } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="logo">
        <p>aluku</p>
      </div>
      <div className="icons">
        <p>
          <FaFacebookF />
        </p>
        <p>
          <AiOutlineTwitter />
        </p>
        <p>
          <BiSearch />
        </p>
      </div>
    </div>
  );
};

export default TopBar;
