import React from "react";
import logo from "../assets/logo.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import { Icon } from "@iconify/react";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Homepage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-center items-center">
        <img src={logo} alt="logo" className="w-[70%] md:w-1/3" />
      </div>
      <div className="flex flex-col font-serif items-center md:flex-row mx-2">
        <img src={one} className="w-1/3" />
        <div className="w-full md:w-2/3 px-4 py-2">
          <p className="font-semibold text-lg">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </p>
          <ul className="pl-10 pt-2 font-medium list-disc">
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src={two} className="my-4" />
          <p className="font-semibold">
            Government of India has awarded the{" "}
            <span className="font-bold">
              "National Energy Conservation Award 2018".{" "}
            </span>{" "}
            Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <p className="font-serif py-6 font-semibold text-lg mx-4">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <div className="w-full flex justify-center">
        <img src={three} className="p-8 md:w-4/5" />
      </div>
      <p className="text-sm py-3 font-serif text-center">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <div className="w-[96%] h-[1px] bg-[#EC3237] m-auto" />
      <p className="font-serif font-semibold text-center text-sm py-2">
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </p>
      <div className="mx-10 my-3 flex justify-center items-center text-center text-sm font-semibold">
        <p className="font-serif ">
          CHEMICALS & PROCESS <span className="text-red-500">|</span> POWER{" "}
          <span className="text-red-500">|</span> WATER & WASTE WATER{" "}
          <span className="text-red-500">|</span> OILS & GAS{" "}
          <span className="text-red-500">|</span> PHARMA{" "}
          <span className="text-red-500">|</span> SUGARS & DISTILLERIES{" "}
          <span className="text-red-500">|</span> PAPER & PULP{" "}
          <span className="text-red-500">|</span> MARINE & DEFENCE{" "}
          <span className="text-red-500">|</span> METAL & MINING{" "}
          <span className="text-red-500">|</span> FOOD & BEVERAGE{" "}
          <span className="text-red-500">|</span> PETROCHEMICAL & REFINERIES{" "}
          <span className="text-red-500">|</span> SOLAR{" "}
          <span className="text-red-500">|</span> BUILDING{" "}
          <span className="text-red-500">|</span> HVAC{" "}
          <span className="text-red-500">|</span> FIRE FIGHTING{" "}
          <span className="text-red-500">|</span> AGRICULTURE & RESIDENTIAL
        </p>
      </div>
      <div className="bg-[#EC3237] flex flex-col items-center md:items-start justify-center md:flex-row md:justify-around m-2 h-28 pt-4">
        <div className="text-white flex items-center">
          <FaPhone size="22" className="mr-1" />
          <span className="text-xs">Toll free 1800 200 1234</span>
        </div>
        <div className="text-white flex items-center">
          <FaFacebook size="22" className="mr-1" />
          <span className="text-xs">www.facebook.com/cripumps</span>
        </div>
        <div className="text-white flex items-center">
          <Icon icon="mdi:web" width="24" className="mr-1" />
          <span className="text-xs">www.crigroups.com</span>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
