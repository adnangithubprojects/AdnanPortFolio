import React from "react";
import "../style/button.css";
export default function Button({ btnName, width = "w-[500px]" }) {
  const widthClass = {
    small: "w-[100px]",
    medium: "w-[200px]",
    large: "lg:w-[350px] md:w-[280px]",
    extraLarge: "w-[500px]",
  };

  return (
    <div>
      <button className={`btn ${widthClass[width]}`}>{btnName}</button>
    </div>
  );
}
