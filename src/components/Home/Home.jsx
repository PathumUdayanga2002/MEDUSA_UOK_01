import React from "react";

import Button from "../Buttton/Button";

// import images

import background from "../../assets/images/Background2.jpg";
import mainlogo from "../../assets/images/MainLogo.jpg";
import mainImage from "../../assets/images/MainImage1.jpg"
import medusaimage from "../../assets/images/Medusa Img.svg";

const Home = () => {
  return (
    <div
      className=" mt-[64px] px-16 h-screen w-screen  bg-cover bg-center bg-no-repeat md:bg-cover md:bg-center md:bg-no-repeat bg-green-950   "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className=" flex flex-col justify-center items-center text-center lg:flex-row xl:flex xl:flex-row lg:flex lg:justify-between xl:justify-between">
        {/* medusa logo with buttons */}
        <div className="flex flex-col font-techno sm:items-center md:items-start md:justify-start lg:justify-start lg:items-start lg:mb-16">
          <div>
            <img
              className="lg:w-[300px] lg:h-[300px] w-[150px] h-[150px]"
              src={mainlogo}
            />
          </div>
          <div className=" text-white bg-green-800 text-center py-2 rounded-full px-4 bg-fixed">
            <p>DEFEND | DECODE | DOMINATE</p>
          </div>
          <div className=" text-white justify-center text-center  mt-5">
            <p>
              INTER-UNIVERSITY <br />
              CAPTURE THE FLAG (CTF) 2024
            </p>
          </div>
          <div className=" flex flex-col  ">
            <div className=" mt-5 lg:items-start lg:justify-start lg:text-left">
              <p className=" text-lime-300">GET IN TOUCH</p>
              <p className=" text-white">TO UNLEASH YOUR INNER HACKER</p>
            </div>
            <div className=" flex flex-row gap-5 mt-5">
              <div>
                <Button
                  text="REGISTRATION"
                  className=" bg-red-600 text-lg text-white font-poppins px-4 py-2 rounded-non cursor-pointer"
                />
              </div>
              <div>
                <Button
                  text="DELEGATE_BOOKLET"
                  className=" bg-green-800 text-lg text-white  px-4 py-2 rounded-non cursor-pointer bg-fixed"
                />
              </div>
            </div>
          </div>
        </div>

        {/* medusa image */}
        <div>
          <img src={medusaimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
