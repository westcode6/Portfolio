import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, gp2 } from "../assets/";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`w-full bg-neutral-900 shadow-2xl rounded-b-2xl px-4 z-10`}>
      <div className="w-full max-w-7xl mx-auto py-4 flex items-center justify-between rounded-b-2xl">
        <div className="border-2 px-4 py-2 border-neutral-400 rounded-xl live-yellow">
          <Link
            to="/"
            className="flex items-center rounded-xl"
            onClick={() => {
              setActive("");
              windows.scrollTo(0, 0);
            }}
          >
            <span className="text-green-400 text-xl">
              {/* <svg
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
               */}
{/* 
               <svg id="10015.io" viewBox="0 0 200 630" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="svg-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="translate(100, 100) rotate(0) skewX(0)"><svg width="200" height="200" viewBox="0 0 100 100"><g fill="#1bdf76" opacity="1"><path d="M50 2.18557e-06C22.3858 3.39263e-06 9.78513e-07 22.3858 2.18557e-06 50L100 50C100 22.3858 77.6142 9.78513e-07 50 2.18557e-06Z"></path><circle cx="50" cy="75" r="20" transform="rotate(-90 50 75)"></circle></g></svg></pattern></defs><rect x="0" y="0" width="100%" height="100%" fill="#17171b"></rect><rect x="0" y="0" width="100%" height="100%" fill="url(#svg-pattern)"></rect></svg> */}
            </span>{" "}

            
           <div className="w-full flex items-end">
           <div className="w-16 h-12">
              <img src="./src/assets/logo/G-logo.png" className="object-cover object-center rounded-2xl shadow-2xl" alt="" />
            </div>
{/* 
          */}

            <p className="glass-effect rounded-xl  px-2 py-2 text-lg sm:text-2xl -ml-4  flex items-end">
            {/* <span className="text-neutral-400  font-bold">
                      <i
                        className="fa fa-hand-peace-o text-4xl text-green-400"
                        aria-hidden="true"
                      ></i>
                    </span> */}
           <span className="font-black  text-2xl uppercase text-live-yellow tracking-tigh p-1">GP</span>
<span className="text-sm text-red-500 font-black font-mono uppercase">.code</span>

        
            </p>
           </div>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <ul className="list-none flex gap-4 mt-2">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`
            text-red-500"
              p-2 rounded-xl hover:bg-neutral-900 hover:text-green-500 shadow-2xl hover:shadow text-sm  sm:text-xl cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a
                  href={`#${link.id}`}
                  className="text-neutral-600 font-mono text-[13px] sm:text-[22px] text-center sm:text-left leading-7"
                >
                  {link.title}
                  <span className="w-1 ml-1 h-1 rounded-full bg-lime-500 bg-opacity-20 animate-ping"></span>
                </a>
              </li>
            ))}
          </ul>
          <button className="hidden sm:block text-live-yellow hover:bg-white p-2 rounded-lg text-xs text-neutral-950  uppercase font-semibold">
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
                <i className="fa fa-glass mr-1 " aria-hidden="true"></i>
              </span>
              Let's talk
            </a>
          </button>
        </div>

        {/* Mobile Navigation Build */}
        <div className="lg:hidden flex flex-1 justify-end items-center ">
          <div className="w-16  h-16 shadow-2xl live-yellow p-2  rounded-full">
            <img
              src={toggle ? close : menu}
              onClick={() => {
                setToggle(!toggle);
              }}
              alt={toggle ? "close menu icon" : "menu icon"}
              className="w-full object-cover object-center "
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
