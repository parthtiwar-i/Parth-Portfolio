import React from "react";
import { loading } from "../assets";

const Creating = ({ className, title }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.5rem]  ${
        className || ""
      } text-base`}
    >
      <img src={loading} alt="" className="w-5 h-5 mr-4" />
      {title ? title : "Crafting Seamless Web Experiences"}
    </div>
  );
};

export default Creating;
