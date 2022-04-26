import React from "react";
import { ProductData } from "../asset/config";
import Card, { Product_Card } from "../component/Card";
export default function Product() {
  return (
    <>
      <div className=" flex flex-col gap-12 items-center mt-24 ">
        <h1 className="text-4xl text-yellow-600 font-bold uppercase">
          <span className="text-white">Our</span> Product
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {ProductData.map((it) => {
            return (
              <>
                <Product_Card
                  dish={it.name}
                  price={it.price}
                  image={it.image}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
