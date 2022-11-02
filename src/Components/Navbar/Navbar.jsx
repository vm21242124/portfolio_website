import React from "react";
import {NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="Navbar">
      {/* <div classNameName="left">
            <span classNameName="navoptions">Home</span>
            <span classNameName="navoptions">services</span>
            <span classNameName="navoptions">About</span>
            
        </div>
        <div classNameName="right">
            <span classNameName="socialsite"><FaFacebookF/></span>
            <span classNameName="socialsite"><FaInstagram/></span>

            <button classNameName="callnow">call now</button>
        </div> */}
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">VM2124</span>
          </span>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <NavLink to='/'>
            <span className="mr-5 hover:text-gray-900">Home</span>

            </NavLink>
            <NavLink to='/skills'>
            <span className="mr-5 hover:text-gray-900">Skills</span>
              
            </NavLink>
            <NavLink to='/projects'>
              
            <span className="mr-5 hover:text-gray-900">Project</span>
            </NavLink>
            <NavLink to='/about'>
              
            <span className="mr-5 hover:text-gray-900">About me</span>
            </NavLink>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Reach Out
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
