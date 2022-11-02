import React from "react";
import Servicecard from "./Servicecard";

const Services = () => {
  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Services
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            I can Make Following for you
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          
          <Servicecard title="E-commerce site" price="45" des1="Frontend-react,redux,tailwind css ,css3" des2="backend- node,express" des3="Authuntication - Firebase" des4="database- MongoDB/FireStore"/>
          <Servicecard title="Bussiness Website" price="20" des1="Frontend-react,redux,tailwind css ,css3" des2="backend- node,express" des3="Authuntication - Firebase" des4="database- MongoDB/FireStore"/>
          <Servicecard title="Your Choice website" price="decide" des1="contact me " des2="we will decide the price" des3="Desing According to you" des4="checkme out"/>
          <Servicecard title="React Native app" price="45" des1="Frontend-react,redux,tailwind css ,css3" des2="backend- node,express" des3="Authuntication - Firebase" des4="database- MongoDB/FireStore"/>

        </div>
      </div>
    </section>
  );
};

export default Services;
