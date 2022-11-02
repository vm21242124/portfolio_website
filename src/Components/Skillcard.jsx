import React from "react";

const Skillcard = ({ title, desc, img }) => {
  return (
    
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={img}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
              {title}
            </h2>

            <p className="mb-4">{desc}</p>
          </div>
        </div>
      </div>
    
  );
};

export default Skillcard;
