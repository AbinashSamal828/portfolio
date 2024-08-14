import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaTimes, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-scroll";
function Navbar() {
  const [showHam, setShowHam] = useState(true);
  const onClickHandler = () => {
    // console.log(showHam);
    setShowHam(!showHam);
  };
  return (
    <div>
      <div className="fixed top-0 text-xl left-0 text-white w-full bg-black h-16 flex justify-between p-4">
        <div className="">Abinash Samal</div>
        <ul className="hidden md:flex">
          <li className="pl-4 ml-6 mr-3">
            <Link  to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="pl-4 ml-6 mr-3">
            <Link  to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="pl-4 ml-6 mr-3">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="pl-4 ml-6 mr-3">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="pl-4 ml-6 mr-3">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <div className="fixed flex flex-col top-[35%] left-2">
            <ul>
              <li className="flex p-3 justify-between items-center w-[150px] h-[50px] bg-blue-600 hover:ml-[-10px] ml-[-110px] duration-300">
                <a href="https://www.linkedin.com/in/abinash-samal-9810a220b/">
                  LinkedIn{" "}
                </a>
                <FaLinkedin size={25} />
              </li>
              <li className="flex p-3 justify-between items-center w-[150px] h-[50px] bg-gray-800 hover:ml-[-10px] ml-[-110px] duration-300">
                <a href="https://leetcode.com/abinashsamal18/">Leetcode</a>{" "}
                <SiLeetcode size={25} />
              </li>
              <li className="flex p-3 justify-between items-center w-[150px] h-[50px] bg-pink-700 hover:ml-[-10px] ml-[-110px] duration-300">
                <a href="https://www.instagram.com/aryan_abinash/">Instagram</a>
                <FaInstagram size={25} />
              </li>
              <li className="flex p-3 justify-between items-center w-[150px] h-[50px] bg-gray-900 hover:ml-[-10px] ml-[-110px] duration-300">
                <a href="https://github.com/AbinashSamal828">Github</a>{" "}
                <FaGithub size={25} />
              </li>
              <li className="flex p-3 justify-between items-center w-[150px] h-[50px] bg-orange-600 hover:ml-[-10px] ml-[-110px] duration-300">
                <a href="https://drive.google.com/file/d/1uKfPAKZhy-LLdul-nedmbFdbASTAfrT4/view?usp=sharing">
                  Resume
                </a>
                <RiContactsLine size={25} />
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
          <li className="p-4 text-4xl">
            <Link onClick={onClickHandler} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="p-4 text-4xl">
            <Link onClick={onClickHandler} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="p-4 text-4xl">
            <Link onClick={onClickHandler} to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="p-4 text-4xl">
            <Link onClick={onClickHandler} to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="p-4 text-4xl">
            <Link onClick={onClickHandler} to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
