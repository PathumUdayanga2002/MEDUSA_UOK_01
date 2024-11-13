import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import LOGO from '../../assets/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-green-900 to-black text-white font-techno py-6" id="contact">
      <div className="flex items-center justify-center ">
  <img
    src={LOGO}
    alt="Logo"
    className="object-contain w-32 h-32 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-32 lg:h-32"
  />
</div>
      <div className="container mx-auto flex flex-col items-center space-y-4 sm:space-y-6 lg:space-y-8">
        <div className="flex space-x-8">
          <a href="#" className="text-white text-xl sm:text-2xl"><FaFacebook className="text-green-400 w-6 h-6 sm:w-8 sm:h-8" /></a>
          <a href="#" className="text-white text-xl sm:text-2xl"><FaInstagram className="text-green-400 *:w-6 h-6 sm:w-8 sm:h-8" /></a>
          <a href="#" className="text-white text-xl sm:text-2xl"><FaLinkedin className="text-green-400 *:w-6 h-6 sm:w-8 sm:h-8" /></a>
          <a href="#" className="text-white text-xl sm:text-2xl"><FaYoutube className="text-green-400 w-6 h-6 sm:w-8 sm:h-8" /></a>
        </div>
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 lg:space-x-8">
          <a href="#home" className="text-white text-sm sm:text-base">HOME</a>
          <a href="#about" className="text-white text-sm sm:text-base">ABOUT</a>
          <a href="#timeline" className="text-white text-sm sm:text-base">TIMELINE</a>
          <a href="#pricepool" className="text-white text-sm sm:text-base">PRICEPOOL</a>
          <a href="#partners" className="text-white text-sm sm:text-base">PARTNERS</a>
          <a href="#contact" className="text-white text-sm sm:text-base">CONTACT US</a>
        </div>
        <hr className="w-full border-t-4 border-gray-550 my-4 sm:my-6 lg:my-8" />
        <div className="text-center">
          <p className="text-sm sm:text-base">© Copyright 2024 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
