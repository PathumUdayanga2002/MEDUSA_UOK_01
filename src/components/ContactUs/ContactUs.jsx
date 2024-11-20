import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import waruna from "../../assets/waruna.png";
import sithum from "../../assets/sithum.png";
import anuka from "../../assets/anuka.png";
import dishan from "../../assets/dishan.png";
import chamoda from "../../assets/chamoda.png";
import vishwa from "../../assets/vishwa.png";

const ContactUs = () => {
  const teamMembers = [
    {
      name: "WARUNA DISSANAYAKE",
      role: "President (ECSC)",
      phone: "+(94) 71 063 1468",
      email: "warunad-ec2069@stu.kln.ac.lk",
      photo: waruna,
    },
    {
      name: "SITHUM JAYATHILAKA",
      role: "Chief Coordinator",
      phone: "+(94) 71 924 4680",
      email: "jayathi-ec21034@kln.ac.lk",
      photo: sithum,
    },
    {
      name: "ANUKA AKSHANA",
      role: "Chief Coordinator",
      phone: "+(94) 76 285 5861",
      email: "akshana-ec21053@stu.kln.ac.lk",
      photo: anuka,
    },
    {
      name: "DISHAN RANASINGHE",
      role: "Technical Coordinator",
      phone: "+(94) 76 32 61558",
      email: "ranasin-ec21077@stu.kln.ac.lk",
      photo: dishan,
    },
    {
      name: "CHAMODA DASANAYAKE",
      role: "Partnership Coordinator",
      phone: "+(94) 70 494 9802",
      email: "dasanay-ec21074@stu.kln.ac.lk",
      photo: chamoda,
    },
    {
      name: "VISHWA RAJARATHNE",
      role: "Partnership Coordinator",
      phone: "+(94) 71 076 9883",
      email: "rajarat-ec21009@stu.kln.ac.lk",
      photo: vishwa,
    },
  ];

  const TeamCard = ({ member, className }) => (
    <div
      className={`text-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center ${className}`}
    >
      <img
        src={member.photo}
        alt={`Photo of ${member.name}`}
        className="w-24 h-24 mb-4 rounded-full"
      />
      <h3 className="mb-2 text-3xl font-bold">{member.role}</h3>
      <p className="mb-2">{member.name}</p>
      <div className="text-sm">
        <div className="flex items-center mb-2">
          <FaPhoneAlt color="green" className="mr-2" />
          <span>{member.phone}</span>
        </div>
        <div className="flex items-center">
          <MdEmail color="green" className="mr-2" />
          <span>{member.email}</span>
        </div>
      </div>
    </div>
  );

  const Team = () => (
    <div className="bg-black min-h-screen flex flex-col items-center">
      <h2 className="pt-20 pb-6 text-3xl font-bold text-center text-green-500 md:text-4xl font-krona">
        CONTACT US
      </h2>
      <div className="flex flex-wrap justify-center gap-6 px-6 py-10">
        {teamMembers.map((member) => (
          <TeamCard
            key={member.name}
            member={member}
            className="w-full h-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          />
        ))}
      </div>
    </div>
  );

  return <Team />;
};

export default ContactUs;
