import React from "react";
import Button from "../component/Button";
import img from "../asset/images/contact.jpg";
import "../style/contact.css";

export default function Contact() {
  return (
    <>
      <div className=" flex flex-col gap-12 items-center mt-24 ">
        <h1 className="text-4xl text-yellow-600 font-bold uppercase">
          Contact <span className="text-white">us</span>
        </h1>
        <div className="Contact ">
          <div className="Contact__left">
            <img src={img} alt="upload image" className="w-full h-[400px]" />
          </div>
          <div className="Contact__right">
            <h1 className="text-4xl text-yellow-600 font-bold">
              <span className="text-white"> Get in </span> touch
            </h1>
            <form className="Contact__right__form">
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder="Email Name" />
              <input type="number" placeholder="Number Name" />
              <span>
                <Button btnName="Submit" width="medium" />
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
