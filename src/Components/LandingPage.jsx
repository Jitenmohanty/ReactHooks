import React from "react";
import { FaArrowDown } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-black pt-1">
      <div className="makers mt-36 px-12 ">
        <div className=" leading-[5.8vw]  ">
          {["We Create", "Eye Opening", "Presentations"].map((elem, index) => (
            <div key={elem} className="flex">
              {index === 1 && <div className="w-28 rounded-md h-16 bg-red-400 mt-[1vw] "></div>}
              <h1
                key={elem}
                className="flex text-[6.5vw] tracking-[-.4vw]  uppercase font-bold"
              >
                {elem}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom border-t-[1px] border-zinc-500 mt-28 flex justify-between items-center px-12">
        {[
          "For Public and private companies",
          "From the first Pitch to IPO",
        ].map((item, index) => (
          <h1 key={item} className="mt-2">
            {item}
          </h1>
        ))}
        <div className="inner flex mt-4 gap-2">
          <h1 className=" border-2 flex items-center justify-center rounded-full uppercase px-2 ">
            Start The Project
          </h1>
          <h1 className="h-10 w-10 border-2 rounded-full flex items-center justify-center">
            {" "}
            <span className="rotate-[-145deg]">
              <FaArrowDown />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
