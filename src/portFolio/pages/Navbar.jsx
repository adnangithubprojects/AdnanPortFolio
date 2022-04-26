import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import Logo from "../asset/images/logo.png";
import "../style/NavBar.css";
export default function NavBar() {
  const [Icon, setIcon] = useState(false);
  return (
    <>
      {/* <div>NavBar</div> */}

      <nav>
        <div className="Logo">
          <div className="Logo__container">
            <h1>PortFolio</h1>
          </div>
          <div className="Icon__container" onClick={() => setIcon(!Icon)}>
            {!Icon ? <FaBars /> : <FaTimes />}
          </div>
        </div>
        <div>
          <ul
            onClick={() => setIcon(!Icon)}
            className={!Icon ? "menu active " : "menu"}
          >
            <a href="#" className="focus:text-gray-300 mt-4 ab md:mt-0 ">
              <li>home</li>
            </a>
            <a href="#" className="focus:text-gray-300 ab ">
              <li>about</li>
            </a>
            <a href="#" className="focus:text-gray-300 ab">
              <li>menu</li>
            </a>
            <a href="#" className="focus:text-gray-300 ab">
              <li>products</li>
            </a>
            <a href="#" className="focus:text-gray-300 ab">
              <li>Review</li>
            </a>
            <a href="#" className="focus:text-gray-300 ab">
              <li>contact</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}
