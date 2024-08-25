import React from "react";
import { FaCartArrowDown, FaClock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Container from "../../Container/Container";
import Marquee from "./Marquee/Marquee";

const TopNavbar = () => {
  return (
    <div className=" hidden lg:block">
      <div>
        <div className="h-12 bg-[#00725A] flex items-center justify-between px-6">
          <div className="flex items-center gap-4 text-white">
            <div className="flex items-center gap-2">
              <IoMail /> nazmulhasan.shadin3@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <FaClock /> Mon -Tu - 7:00pm -8:00 pm
            </div>
          </div>
          <div className="">
            <Marquee text="Facility Booking system is ongoing with big discount! Hurryp up" />
          </div>
          <div className="flex items-center gap-2 text-white">
            <FaCartArrowDown /> cart ; 0 items - $00
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
