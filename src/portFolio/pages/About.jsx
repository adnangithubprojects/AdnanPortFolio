import React, { useEffect } from "react";
import aboutImg from "../asset/images/6.jpg";
import Button from "../component/Button";
import "../style/about.css";
// import { aos } from "aos";
// import ".../aos/dist/aos.css";

export default function About() {
  //   useEffect(() => {
  //     aos.init();
  //   }, []);
  // data-aos="fade-up"
  return (
    <>
      <div className="mt-24 gap-12 flex flex-col items-center">
        <h1 className="text-4xl text-yellow-600 font-bold uppercase ">
          About <span className="text-white">us</span>
        </h1>
        <div className="Container">
          <div className="Image__Container">
            <img src={aboutImg} alt="upload image" className="Image" />
          </div>
          <div className="Text__Containerr">
            <h1 className="text-3xl pt-4 md:pt-8 font-bold text-yellow-600">
              What About Our Foods!
            </h1>
            <p className="text-white text-md md:py-4 ">
              Excepteur eu ex culpa mollit minim. Labore ipsum dolore eu qui et
              exercitation eiusmod esse laborum anim. Excepteur irure amet sunt
              culpa cupidatat anim aute. In proident cillum aliqua anim sint
              cupidatat. Cupidatat aute proident commodo consequat tempor Lorem
              ad id reprehenderit amet consectetur pariatur Lorem ullamco. Anim
              dolore magna duis dolor magna laboris ea pariatur ad excepteur.
            </p>
            <div>
              <Button btnName="read more" width="large" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
