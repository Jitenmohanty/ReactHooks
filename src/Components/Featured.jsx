import React from "react";
import { FaArrowDown } from "react-icons/fa6";

const Featured = () => {
  return (
    <div className="featured w-full pb-28 min-h-screen bg-black">
      <div className="header px-12 py-8 border-b-[1px] border-zinc-400">
        <h1 className="text-5xl"> Featured projects</h1>
      </div>
      <div className="main px-12">
        <div className="heading mt-16 mb-6 flex justify-between">
          <div className="innerHead flex w-1/2 justify-start items-start gap-2">
            <div className="h-2 w-2 rounded-full bg-white mt-2"></div>
            <h2 className="uppercase ">Fyde</h2>
          </div>
          <div className="innerHead flex w-1/2 justify-start items-start gap-2">
            <div className="h-2 w-2 rounded-full bg-white mt-2"></div>
            <h2 className="uppercase ">Vise</h2>
          </div>
        </div>
        <div className="container flex gap-10 w-full ">
          <div className="inner w-1/2 rounded-lg relative">
            <h1 className="absolute left-full -translate-x-1/2 top-1/3 text-7xl font-bold uppercase">
              Visa
            </h1>
            <div className="img bg-cover  rounded-lg overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <div className="capsule w-full flex gap-10  text-white mt-6">
              {["audit", "copywriting", "sales dest", "slides design"].map(
                (item, index) => {
                  return (
                    <h3
                      key={item}
                      className="rounded-3xl uppercase border-[1px] py-1 text-gray-400 border-gray-400  text-sm  px-4 "
                    >
                      {item}
                    </h3>
                  );
                }
              )}
            </div>
          </div>
          <div className="inner w-1/2 h-[65vh] rounded-lg relative  ">
            <h1 className="absolute right-full translate-x-1/2 top-1/2 text-7xl z-10 font-bold uppercase">
              Risa
            </h1>
            <div className="img rounded-lg overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
            <div className="capsule w-full flex gap-10  text-white mt-6">
              {["agebcy", "company Presentation"].map(
                (item, index) => {
                  return (
                    <h3
                      key={item}
                      className="rounded-3xl uppercase border-[1px] py-1 text-gray-400 border-gray-400  text-sm  px-4 "
                    >
                      {item}
                    </h3>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="btn w-full mt-20  bg-black rounded-full font-bold text-black flex justify-center items-center">
            <div className="inner border-2 flex justify-center items-center px-5 py-3 rounded-full gap-8 uppercase bg-white">
            <h1 className="">
             view all case studies 
            </h1>
           <h1 className="rotate-[-140deg]"> <FaArrowDown/></h1>
            </div>
          </div>
    </div>
  );
};

export default Featured;
