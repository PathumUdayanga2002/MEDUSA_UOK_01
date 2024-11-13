import React from "react";
import img1 from "../../assets/0.png";
import img2 from "../../assets/1.png";
import img3 from "../../assets/2.png";
import "./pricepool.css";

export default function Pricepool() {
  return (
    <div className="price-container py-5" id="pricepool">
      <div className="text-center text-2xl font-semibold price-color py-5">
        <p>PRIZE POOL</p>
      </div>
      <div className="flex flex-col md:flex-row  ">
        <div className="flex-1 p-4 border-none flex items-center justify-center ">
          <img
            src={img2}
            alt="second price"
            className=" w-1/3    second-price-background"
          />
        </div>
        <div className="flex-1 p-4 border-none flex items-center justify-center  ">
          <img
            src={img1}
            alt="first price"
            className="  w-1/2  first-price-background  "
          />
        </div>
        <div className="flex-1 p-4 border-none flex items-center justify-center  ">
          <img
            src={img3}
            alt="third price"
            className=" w-1/3  third-price-background"
          />
        </div>
      </div>
    </div>
  );
}
