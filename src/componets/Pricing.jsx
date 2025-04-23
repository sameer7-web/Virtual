import React from "react";
import { CheckCircle2 } from "lucide-react";
import { features, pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((Option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {Option.title}
                {Option.title === "Pro" && (
                  <span className="bg-gradient-to-t bg-clip-text text-transparent from-orange-600 to-red-900 mb-4 ml-2">
                    {" "}
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{Option.price}</span>
                <span className="text-neutral-400 tracking-wide">/Month</span>
              </p>
              <ul>
                {Option.features.map((features, index) => (
                    <li key={index} className="mt-8 flex items-center">
                        <CheckCircle2 />
                        <span className="ml-2">{features}</span>
                    </li>
                ))}
              </ul>
              <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-600 border border-red-900 rounded-lg transition duration-200">Subscribe</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
