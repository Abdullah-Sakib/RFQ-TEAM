import React from "react";
import { FaShip } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";

const Hero = () => {
  return (
    <div className="mt-10 mx-20  shadow-md min-h-screen pt-5">
      <div className="flex items-center justify-center ">
        <Link to="/sea">
          <button className="px-6 py-2 mr-4 flex items-center font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            <FaShip className="mr-2"></FaShip> SEA
          </button>
        </Link>
        <Link to="/sky">
          <button className="px-6 py-2 flex items-center font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            <IoIosAirplane className="mr-2"></IoIosAirplane>
            SKY
          </button>
        </Link>
      </div>
        <div className="mt-20">
        <Outlet></Outlet>
        </div>
    </div>
  );
};

export default Hero;
