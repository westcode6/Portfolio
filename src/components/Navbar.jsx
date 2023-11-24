import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, gp2 } from "../assets/";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`p-${styles.paddingX} py-3 w-full bg-transparent shadow-2xl  z-10`}>
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <div className="rounded-xl">
          <Link
            to="/"
            className="flex items-center rounded-xl"
            onClick={() => {
              setActive("");
              windows.scrollTo(0, 0);
            }}
          >
            <div className="glass-effect shadow-xl rounded-xl  px-2 py-2 text-lg sm:text-2xl   flex items-end">
              <div className="w-14 h-12">
                <img
                  src="./src/assets/Logo/gLogo.png"
                  className="object-cover object-center"
                  alt=""
                />
                <span>

                </span>
              </div>

              <p className="-ml-2 font-black  text-2xl uppercase text-live-yellow tracking-tight">
                GP
              </p>
              <span className="text-sm text-live-yellow font-semibold font-sans uppercase animate-pulse">
                .code
              </span>
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <ul className="list-none flex gap-4 mt-2">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`
            "px-4 py-2 rounded-xl hover:underline hover:text-green-500 shadow-2xl hover:shadow text-sm  sm:text-base cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >

                <a
                  href={`#${link.id}`}
                  className="cursor-pointer p-1 rounded-2xl font-mono text-neutral-600/90"
                >
                  {link.title}
                  <span className="w-1 ml-1 h-1 rounded-full bg-lime-500 bg-opacity-70 animate-ping"></span>
                </a>
              </li>
            ))}
          </ul>
          <button className="hidden sm:block text-live-yellow hover:bg-white p-2 rounded-lg text-xs text-neutral-950 animate-pulse uppercase font-semibold">
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
                <i className="fa fa-glass  mr-1 " aria-hidden="true"></i>
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
