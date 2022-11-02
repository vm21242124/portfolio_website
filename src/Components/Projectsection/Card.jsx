import React from "react";

const Card = () => {
  return (
    <section class="text-gray-600 body-font">
      <div className="flex flex-col text-center w-full">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
              Recent Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              checkout my recent projects
            </p>
          </div>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 lg:w-1/3 ">
            <div class="h-full bg-[url('https://imgs.search.brave.com/qnJjsWuJ-Y7Ie-JnEHj6goMQTNlSJiyFnGpQDie7u50/rs:fit:708:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/bzJiazdMenZIQ3Fr/TDZfQWk3bTRBSGFF/OSZwaWQ9QXBp')] bg-opacity-10  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h1 class="title-font sm:text-2xl text-xl font-large font-bold text-white mb-3">
                Amazon clone
              </h1>
              <p class="leading-relaxed mb-3 text-white">
                this is ecommerce website i have made you can checkout
              </p>
              <span class="text-indigo-500 inline-flex items-center">
                Live Now
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
          <div class="p-4 lg:w-1/3">
            <div class="h-full bg-[url('https://imgs.search.brave.com/3v9BB--VHarCiLbyeUIjJb54XFQ0UaVBQrqoK8FJt6o/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5G/eWZfYzZoS3llZjNE/cEdqTS1WRkx3SGFE/dCZwaWQ9QXBp')] bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h1 class="title-font sm:text-2xl text-xl font-large text-white font-bold mb-3">
                Netflix clone
              </h1>
              <p class="leading-relaxed mb-3 text-white">
                i have made a clone frontend of NetFlix
              </p>
              <span class="text-indigo-500 inline-flex items-center">
                Live Now
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
          <div class="p-4 lg:w-1/3">
            <div class="h-full bg-[url('https://imgs.search.brave.com/XrDOtKzErUHS3YF1zpBtF8la4QG-pITsU1h7D5JL9nA/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/WmJVV0FfZE9CNFp0/OWRKeDF2QXlRSGFF/SyZwaWQ9QXBp')] bg-opacity-10 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h1 class="title-font sm:text-2xl text-xl font-large text-white font-bold mb-3">
                Instagram clone
              </h1>
              <p class="leading-relaxed mb-3 text-white">
                i have made this instagram clone
              </p>
              <span class="text-indigo-500 inline-flex items-center">
                Live Now
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
