import React from "react";
import LogoDark from "/src/assets/logo-dark.svg";

// icons
import { IoCartOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex justify-between container my-2 md:my-4 ">
        <img src={LogoDark} alt="logo-dark" />
        <ul className="flex items-center font-bold gap-7">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"#"}>Shop</Link>
          </li>
          <li>
            <Link to={"#"}>Categories</Link>
          </li>
          <li>
            <Link to={"#"}>Blog</Link>
          </li>
        </ul>
        <div className="flex gap-4">
          <div className=" flex justify-center items-center bg-secondary text-primary rounded-full p-3">
            <Badge badgeContent={4} color="error">
              {/* <MailIcon color="action" /> */}
              <IoCartOutline className=" size-6" />
            </Badge>
          </div>
          <div className=" flex justify-center items-center bg-primary text-secondary rounded-full p-3">
            Get Started
            <FaArrowRightLong className=" ps-2 size-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
