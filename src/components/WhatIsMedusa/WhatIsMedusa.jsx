import React from 'react';

const WhatIsMedusa = () => {
  return (
    <div className="h-screen bg-[#033004] relative">
      {/* Background image with transparent gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#033004]/60 to-black bg-cover bg-center"
        style={{ backgroundImage: "url('Background2.png')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 font-bold font-[TechnoNue]">
        
        {/* Medusa Section */}
        <div className="flex flex-col sm:gap-10 mb-[60px] md:flex-row mb-[-150px] items-center justify-center gap-8 mt-8 md:mt-16 lg:mt-[100px] mb-[-100px]">
          <img
            src="MedusaLogoStand.png"
            alt="Medusa Competition Logo"
            className="block hidden sm:hidden md:hidden w-64 lg:block w-[400px] xl:w-[500px] rounded-full"
          />
          <div>
            <h2 className="text-2xl sm:text-2xl md:text-2xl font-bold mb-4 text-left text-[#A6FD99]">
              WHAT IS MEDUSA?
            </h2>
            <p className="text-sm sm:text-base md:text-md lg:text-md mb-2">
              <span className="text-green-400 font-bold">Medusa</span> is an inter-university Capture The Flag (CTF) competition based on the field of cybersecurity, organized by the Electronics and Computer Science Club (ECSC) of the Faculty of Science, University of Kelaniya. The competition aims to enhance the skills and knowledge of participants in cybersecurity.
            </p>
            <p className="text-sm sm:text-base md:text-md lg:text-md">
              Our goal is to develop a platform that enables people to test and hone their hacking abilities in a secure setting while encouraging innovation, teamwork, and learning.
            </p>
          </div>
        </div>

        {/* ECSC Section */}
        <div className="flex flex-col-reverse sm:gap-10 mt-[-10px] md:flex-row mb-[50px] mt-[150px] lg:mt-[-100px] items-center justify-center gap-8 mt-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold mb-4 text-left text-[#A6FD99]">
              WHAT IS THE ECSC?
            </h2>
            <p className="text-sm sm:text-base md:text-md lg:text-md">
              The Electronics and Computer Science Club was established by the first batch of undergraduates of BSc (Hons) in Electronics and Computer Science. The club serves as a great platform to increase visibility for undergraduates and improve their skills through various workshops and competitions related to electronics and computer science.
            </p>
          </div>
          <img
            src="ECSCLogoStand.png"
            alt="ECSC Club Logo"
            className="block hidden sm:hidden md:hidden lg:block w-[400px] xl:w-[500px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatIsMedusa
