import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Menu from "./Menu";
import NavBar from "./Navbar";
import Product from "./Product";
import Review from "./Review";

export default function Indexx() {
  return (
    <>
      <div className="bg-slate-800">
        <NavBar />
        <Home />
        <About />
        <Menu />
        <Product />
        <Review />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
