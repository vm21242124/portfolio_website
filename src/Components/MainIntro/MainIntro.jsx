import React from "react";
import img from '../../img/img.jpg'
import {NavLink} from 'react-router-dom'
const MainIntro = () => {
  return (
    <div classNameName="mainintro">
      {/* <div classNameName="title">
            <p>MERN Stack Devloper</p>
            <h1>Hello, I’m vinod Welcome to my World.</h1>
        </div> */}
      <section className="text-gray-600 body-font bg-slate-100">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Hello I'm Vinod Mali
              <br className="hidden lg:inline-block" />
               Welcome To My World
            </h1>
            <p className="mb-8 leading-relaxed">
              Hello there, my self vinod mali currently working on projects of web developement and learning the skills. If you Have Interested Know more about me download my resume from below
            </p>
            <div className="flex justify-center">
              <NavLink to="/projects">

              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 hover:text-black hover:outline-black hover:border-black hover:bg-transparent rounded text-lg">
                Check project
              </button>
              </NavLink>
              <NavLink to="/skills">

              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Skills
              </button>
              </NavLink>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={img}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainIntro;
