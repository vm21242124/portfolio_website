import React from "react";

const Servicecard = ({title,price,des1,des2,des3,des4}) => {
  return (
    <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div class="h-full p-6 rounded-lg border-2 border-blue-700 flex flex-col relative overflow-hidden">
              <h1 class=" tracking-widest title-font text-black mb-1 font-bold text-3xl">
                {title}
              </h1>
              <h2 class=" text-gray-900 pb-4 mb-4 border-b font-bold border-gray-200 leading-none">
                ${price}
              </h2>
              <p class="flex items-center text-black mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-700 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                    color="white"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                {des1}
              </p>
              <p class="flex items-center text-black mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-700 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                    color="white"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                {des2}
              </p>
              <p class="flex items-center text-black mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-700 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                {des3}
              </p>
              <p class="flex items-center text-black mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-700 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                {des4}
              </p>
              <button class="flex items-center mt-auto text-white bg-blue-700 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                Button
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p class="text-xs text-gray-500 mt-3">Hurry up !!!</p>
            </div>
            </div>
  );
};

export default Servicecard;
