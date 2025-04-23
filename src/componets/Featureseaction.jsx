import React from "react";
import {features} from "../constants"

const Featureseaction = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-orange-600 to-red-900">
            {" "}
            your code{" "}
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((features, index) => (
            <div key={index} className="w-full sm:1/2 lg:w-1/3">
                <div className="flex">
                    <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                        {features.icon}
                    </div>
                    <div>
                        <h5 className="mt-1 mb-6 text-xl">{features.text}</h5>
                        <p className="text-md p-2 mb-20 text-neutral-500">{features.description}</p>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Featureseaction;
