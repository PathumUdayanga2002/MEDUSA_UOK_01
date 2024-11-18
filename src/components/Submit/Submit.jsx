import React from "react";
import { useNavigate } from "react-router";
import hacker from "../../assets/images/hacker.png";

const Submit = () => {
  const binaryText = "1010100101010110010101010110101010100101";

  const [code, setCode] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (code === "Medusa{Th1$_1$_th3_$cr3tC0d3}") {
      navigate("/register");
    } else {
      alert("Incorrect Secret Key.Try agin!");
    }
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden ">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-full h-screen text-green-500 font-mono text-lg opacity-75 ${
            i % 2 === 0 ? "animate-hacker-up" : "animate-hacker-down"
          }`}
          style={{
            top: `${i * 5}vh`,
            textShadow: "0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00",
          }}
        >
          {binaryText.repeat(10)}
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col   h-full text-center text-white font-techno py-20 px-20 mt-[30px]">
        <div className=" md:flex md:flex-row flex flex-col space-y-4 md:justify-between mb-4">
          {/* image */}
          <div className=" ">
            <img
              className=" object-cover md:w-[600px] md:h-[520px] md:items-center md:justify-center md:text-center md:mt-[-40px] w-[300px] h-[250px] shadow-xl shadow-green-400 rounded-xl mt-[-20px] "
              src={hacker}
              alt="hacker image"
            />
          </div>
          {/* content */}
          <div>
            <div>
              <h1 className="md:text-6xl text-4xl font-bold mb-4 shadow-xl ">
                Welcome to the Hacker Zone
              </h1>
              <p className="md:text-xl text-lg max-w-2xl mb-5">
                If you want to register MEDUSA CTF 2024, you must find the
                Secret Key In Below task...!!
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center md:mt-10">
              <div>
                <input
                  className=" border-2 border-green-400  md:w-[300px] md:h-[50px] w-[300px] h-[50px] rounded-xl p-4 text-black "
                  type="text"
                  placeholder="Enter the Secret Key"
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                />
              </div>
              <div className="md:flex  md:justify-between flex flex-col space-y-4">
                <div className="  ">
                  <button
                    onClick={handleSubmit}
                    className="w-[300px] bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </div>
                {/* <div>
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-[300px]">
                    Task
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          {/* end content */}
        </div>
      </div>
    </div>

    //     const text = "1010100101010110010101010110101010100101";
    //     // const text = "1010100101010110010101010110101010100101";
    //   return (
    //     <div className="relative w-full h-screen bg-black overflow-hidden">
    //       {/* Repeating rows of green text */}
    //       {[...Array(20)].map((_, i) => (
    //         <div
    //           key={i}
    //           className="absolute w-full text-green-600 font-mono text-lg opacity-75 animate-hacker shadow-glow-green"
    //           style={{ top: `${i * 5}vh` }}
    //         >
    //           {text.repeat(10)}
    //         </div>
    //       ))}
    //     </div>
  );
};

export default Submit;
