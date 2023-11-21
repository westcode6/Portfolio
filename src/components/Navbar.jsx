import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, gp2 } from "../assets/";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`w-full bg-neutral-950 z-10`}>
      <div className="w-full max-w-7xl mx-auto p-2 flex items-center justify-between rounded-b-2xl">
        <div className="">
          <Link
            to="/"
            className="flex items-center glass-effect border-400 border-neutral-300 p-2 shadow-xl rounded-xl"
            onClick={() => {
              setActive("");
              windows.scrollTo(0, 0);
            }}
          >
            <span className="text-green-500 text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={`text-red-400`}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-14 h-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                />
              </svg>
              
            </span>{" "}
{/* 
            <span className="font-medium">
              <i
                className="fa fa-hand-peace-o text-4xl bg-green-400 rounded-xl p-1 text-neutral-900"
                aria-hidden="true"
              ></i>
            </span> */}

            <p className="text-lg sm:text-2xl">
           <span className="font-black font-mono uppercase tracking-wide">God'spower</span>
           <span className="font-black text-neutral-500">.dev</span>
            </p>
          </Link>
        </div>

        <div className="hidden sm:flex items-center gap-10">
          <ul className="list-none flex gap-4 mt-2">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`
            text-red-500"
              p-2 rounded-xl hover:bg-neutral-900 hover:text-green-500 shadow-2xl hover:shadow text-sm  sm:text-lg cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a
                  href={`#${link.id}`}
                  className="text-neutral-600  text-[13px] sm:text-[18px] text-center sm:text-left leading-7"
                >
                  {link.title}
                  <span className="w-1 ml-1 h-1 rounded-full bg-lime-500 bg-opacity-20 animate-ping"></span>
                </a>
              </li>
            ))}
          </ul>
          <button className="hidden sm:block bg-neutral-900 hover:bg-white p-2 rounded-lg text-xs text-yellow-400 hover:text-green-500 border border-stone-700 uppercase font-semibold">
            <a
              href="https://api.whatsapp.com/send?phone=09065017306"
              className=""
            >
              {/* <span className="p-2 rounded-full shaodow-xl bg-neutral-900 mr-1 text-red-500  font-mono flex items-center justify-center">
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
              </span>{" "} */}
              <span className="text-xl">
                <i className="fa fa-glass mr-1 text-yellow-300" aria-hidden="true"></i>
              </span>
              Let's talk
            </a>
          </button>
        </div>

        {/* Mobile Navigation Build */}
        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <div className="shadow-2xl glass-effect p-2  rounded-full">
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
