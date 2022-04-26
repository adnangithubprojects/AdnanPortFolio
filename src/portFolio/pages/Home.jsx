import React from "react";
import "../style/home.css";
import Button from "../component/Button";
export default function Home() {
  return (
    <>
      <div className="body h-screen flex flex-col justify-center ">
        <div className="Text__Container ">
          <h1 className=" text-3xl font-bold capitalize ">
            Fresh<span className="text-yellow-600"> food in the</span> morning
          </h1>
          <p>wake up early in the morning to eat Fresh food</p>
          <p>wake up early in the morning to eat Fresh food</p>
          {/* <button className="homeBtn">Order BreakFast</button> */}
          <Button btnName="Order BreakFast" width="extraLarge" />
        </div>
      </div>
    </>
  );
}
