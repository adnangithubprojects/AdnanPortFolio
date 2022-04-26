import React from "react";
import img1 from "../asset/images/1.jpg";
import "../style/card.css";
import { FaEye, FaHeart, FaStar, FaStarHalf } from "react-icons/fa";
export default function Card({ image, dish, price }) {
  return (
    <div className="Card">
      <div className="Card__image">{image}</div>
      <div className="Card__menu">
        <p className="w-[110px]">{dish}</p>
        <p className="w-[110px]">{price}</p>
        <button className="Card__menu__btn">Order Now</button>
      </div>
    </div>
  );
}

export function Product_Card({ image, dish, price }) {
  return (
    <div className="Product__Card">
      <div className="Product__Card__icon">
        <span className="Icon__heart border-[1px] p-2">
          <FaHeart />
        </span>
        <span className=" Icon__big border-[1px] p-2">
          <FaEye />
        </span>
        <span className=" Icon__eye border-[1px] p-2">
          <FaEye />
        </span>
      </div>
      <div className="Product__Card__image">{image}</div>
      <div className="Product__Card__menu">
        <p className="w-[110px]">{dish}</p>
        <p className="w-[110px]">{price}</p>
        <div className="Product__Card__reveiw">
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span className="bg-white rounded-[50px]">
            <FaStarHalf />
          </span>
        </div>
      </div>
    </div>
  );
}
export function Review_Card({ image, name, message }) {
  return (
    <div className="Review__Card">
      <p className="text-white text-lg w-[250px]">{message}</p>
      <div className="Review__Card__image">{image}</div>
      <div className="Review__Card__menu">
        <p className="text-lg">{name}</p>
        <div className="Review__Card__reveiw">
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span className="bg-white rounded-[50px]">
            <FaStarHalf />
          </span>
        </div>
      </div>
    </div>
  );
}
