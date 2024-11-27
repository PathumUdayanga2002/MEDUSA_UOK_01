import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Buttton/Button";

// import images
import background from "../../assets/images/Background.svg";
import mainlogo from "../../assets/images/Main Logo.svg";
import medusaimage from "../../assets/images/Medusa Img.svg";

const Home = () => {
  return (
    <div
      className="  px-16 h-screen w-screen  bg-cover bg-center bg-no-repeat md:bg-cover md:bg-center md:bg-no-repeat bg-green-950 "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className=" flex flex-col justify-center items-center text-center lg:flex-row xl:flex xl:flex-row lg:flex lg:justify-between xl:justify-between text-sm mt-[64px]">
        {/* medusa logo with buttons */}
        <div className="flex flex-col font-techno items-center text-sm md:items-start md:justify-start lg:justify-start lg:items-start lg:mb-16 md:mr-10 ">
          <div>
            <motion.img
              className="lg:w-[300px] lg:h-[300px] w-[150px] h-[150px]"
              src={mainlogo}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
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
            <div className=" flex flex-col md:flex md:flex-row gap-5 mt-5 px-5 md:px-0 ">
              <motion.div
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                <Link to={"/hacker"} >
                <Button
                  text="REGISTRATION"
                  className=" bg-red-600 text-lg text-white font-poppins px-4 py-2 rounded-non cursor-pointer"
                /></Link>
                
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                <Link to={"https://drive.google.com/file/d/1Rhp0MhQI4Z4VulT_m8-KDawFiVLKzGog/view?usp=drivesdk"} target="_blank">
                <Button
                  text="DELEGATE_BOOKLET"
                  className=" bg-green-800 text-lg text-white  px-4 py-2 rounded-non cursor-pointer bg-fixed"
                />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* medusa image */}
        <div className="flex justify-center items-center w-[300px] h-[300px] mt-14 md:mt-0 md:w-max md:h-max ">
          <motion.img
            src={medusaimage}
            alt=""
            animate={{
              y: [0, -20, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
