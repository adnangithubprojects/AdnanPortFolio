import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className=" flex flex-col gap-12 items-center mt-24 ">
        <h1 className="text-4xl text-yellow-600 font-bold uppercase">
          <span className="text-white"> User</span> Info
        </h1>
        <div className="bg-slate-900  flex flex-col  justify-center w-full items-center gap-8 h-[200px]">
          <div className="flex gap-8 text-gray-500">
            <span className="border-2 p-2 border-yellow-700 rounded-[50px] text-4xl">
              <FaInstagram />
            </span>
            <span className="border-2 p-2  border-yellow-700 rounded-[50px] text-4xl">
              <FaFacebook />
            </span>
            <span className="border-2 p-2 border-yellow-700 rounded-[50px] text-4xl">
              <FaWhatsapp />
            </span>
            <span className="border-2 p-2 border-yellow-700 rounded-[50px] text-4xl">
              <FaLinkedin />
            </span>
          </div>
          <div>
            <p className="text-white">&copy; All right reserved by AADI</p>
          </div>
        </div>
      </div>
    </>
  );
}
