import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaTimes, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
function Navbar() {
  const [showHam, setShowHam] = useState(true);
  const onClickHandler = () => {
    setShowHam(!showHam);
  };
  return (
    <div>
      <div className="fixed top-0 text-xl left-0 text-white w-full bg-black h-16 flex justify-between p-4">
        <div className="">Abinash Samal</div>
        <ul className="hidden md:flex">
          <li className="pl-4 ml-6 mr-3">Home</li>
          <li className="pl-4 ml-6 mr-3">About</li>
          <li className="pl-4 ml-6 mr-3">Skills</li>
          <li className="pl-4 ml-6 mr-3">Projects</li>
          <li className="pl-4 ml-6 mr-3">Contact</li>
          <div className="fixed flex flex-col top-[35%] left-2">
          <ul>
            <li className="flex p-3 justify-between items-center w-[150px] h-[50px] bg-blue-600 hover:ml-[-10px] ml-[-110px] duration-300">
              LinkedIn <FaLinkedin size={25} />
            </li>
            <li className="flex p-3 justify-between items-center w-[150px] h-[50px] bg-gray-800 hover:ml-[-10px] ml-[-110px] duration-300">
              LeetCode <SiLeetcode size={25} />
            </li>
            <li className="flex p-3 justify-between items-center w-[150px] h-[50px] bg-pink-700 hover:ml-[-10px] ml-[-110px] duration-300">
              Instagram <FaInstagram size={25} />
            </li>
            <li className="flex p-3 justify-between items-center w-[150px] h-[50px] bg-gray-900 hover:ml-[-10px] ml-[-110px] duration-300">
              LinkedIn <FaGithub size={25} />
            </li>
            <li className="flex p-3 justify-between items-center w-[150px] h-[50px] bg-orange-600 hover:ml-[-10px] ml-[-110px] duration-300">
              Resume <RiContactsLine size={25} />
            </li>
          </ul>
        </div>
        </ul>
        
        <TiThMenu onClick={onClickHandler} className="md:hidden" />
        <ul
          className={
            showHam
              ? " hidden"
              : " absolute flex flex-col left-0 bg-black w-full h-screen justify-center text-center"
          }
        >
          <FaTimes
            onClick={onClickHandler}
            className="absolute right-3 top-0"
          />
          <li className="p-4 text-4xl">Home</li>
          <li className="p-4 text-4xl">About</li>
          <li className="p-4 text-4xl">Skills</li>
          <li className="p-4 text-4xl">Projects</li>
          <li className="p-4 text-4xl">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
