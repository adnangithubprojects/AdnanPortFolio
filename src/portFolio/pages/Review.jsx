import React from "react";
import { ReviewData } from "../asset/config";
import Card, { Review_Card } from "../component/Card";
export default function Review() {
  return (
    <>
      <div className=" flex flex-col gap-12 items-center mt-24 ">
        <h1 className="text-4xl text-yellow-600 font-bold uppercase">
          <span className="text-white"> Customer</span> Reivew
        </h1>
        <div className="flex flex-wrap items-center gap-6 justify-center">
          {ReviewData.map((it) => {
            return (
              <>
                <Review_Card
                  name={it.name}
                  image={it.image}
                  message={it.message}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
