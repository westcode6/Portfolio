import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, gp2 } from "../assets/";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`w-full mx-auto fixed glass-effect top-0 py-4 z-10 px-2`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between  border-lime-400 p-2 rounded-b-2xl">
        <div className="">
          <Link
            to="/"
            className="flex items-center uppercase text-xs font-mono font-bold"
            onClick={() => {
              setActive("");
              windows.scrollTo(0, 0);
            }}
          >
            <span className="text-lime-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                />
              </svg>
            </span>{" "}
           <div className="flex items-center justify-center">
           <span className="text-lime-400">Hello@</span> 
           <span className="font-bold ">God'spower.Dev</span> 
           <span className="text-xl">👋 </span>
           </div>
          </Link>
        </div>

        <div className="hidden sm:flex items-center gap-10">
         

        <ul className="list-none flex gap-4 mt-2">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`
            text-lime-400"
              p-2 rounded-xl hover:bg-neutral-900 hover:text-lime-500 shadow-xl hover:shadow text-sm  sm:text-lg font-semibold uppercase cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`} className="text-sm text-neutral-500 hover:text-lime-400 font-mono flex  flex-col items-start">

                  {link.title}
                <span className="w-1 ml-1 h-1 rounded-full bg-lime-400 bg-opacity-20 animate-ping"></span>

                </a>
              </li>
            ))}
          </ul>
          <button className="px-4 py-2 hidden sm:block text-xs  bg-neutral-900  hover:bg-neutral-800 text-lime-400 hover:text-lime-400  rounded-2xl shadow-xl  transfrom duration-300  hover:scale-20">
            <a
              href="https://api.whatsapp.com/send?phone=09065017306"
              className="font-medium uppercase flex items-center"
            >
            
              <span className="p-2 rounded-full shaodow-inner bg-neutral-900 mr-3 text-lime-400  font-mono flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>{" "}
           

          <span className="text-sm font-mono font-black">   Hire me</span>

            </a>
          </button>
        </div>

        {/* Mobile Navigation Build */}
        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <div className="shadow-xl   p-2  rounded-full">
            <img
              src={toggle ? close : menu}
              onClick={() => {
                setToggle(!toggle);
              }}
              alt={toggle ? "close menu icon" : "menu icon"}
            />
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-neutral-800  absolute top-20 right-0 mx-4 min-w-[140px] rounded-xl custom-shadow  z-10`}
          >
            <ul className="list-none  flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
