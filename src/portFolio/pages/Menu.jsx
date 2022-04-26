import React from "react";
import { data } from "../asset/config";
import Card from "../component/Card";
export default function Menu() {
  return (
    <>
      <div className=" flex flex-col gap-12 mt-24 items-center">
        <h1 className="text-4xl text-yellow-600 font-bold uppercase">
          <span className="text-white">Our</span> Menu
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {data.map((it) => {
            return (
              <>
                <Card dish={it.name} price={it.price} image={it.image} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
