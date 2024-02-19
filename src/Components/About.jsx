import React from "react";
import { FaArrowDown } from "react-icons/fa6";

const About = () => {
  return (
    <div className="min-h-screen w-full bg-[#CDEA68] text-black  rounded-tl-3xl rounded-tr-3xl">
      <div className="htag  border-b-[0.5px] border-zinc-500 px-12 py-20">
        <h1 className="text-[3.5vw] leading-[4vw] w-[85%]">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and{" "}
          <u>hire great peo­ple</u>.
        </h1>
      </div>
      <div className="middle px-12 py-6 flex justify-around border-b-[0.5px] border-zinc-500 pb-16">
        <h1 className="w-[30%]">What you can expect:</h1>
        <div className="middleMid flex w-[22%] gap-10 flex-col justify-start text-base">
          <h1 className="">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </h1>
          <h1>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </h1>
        </div>
        <div className="bottom mt-24">
          {["S:", "Instagram", "Behance", "Facebook", "Linkedin"].map(
            (item, index) => (
              <h1
                className={`${index === 0 && "mb-4 no-underline"} underline`}
                key={item}
              >
                {item}
              </h1>
            )
          )}
        </div>
      </div>
      <div className="bottom px-12 py-6 flex justify-between  pb-16">
        <div className="left">
          <h1 className="text-[4vw] tracking-[-0.2vw]">Our approach:</h1>
          <div className="btn pl-4 py-4 pr-1 bg-black rounded-full text-white flex justify-around w-44 items-center">
            <h1 className="">
              READ MORE
            </h1>
           <h1 className=""> <FaArrowDown/></h1>
          </div>
        </div>
        <img
          className="rounded-xl"
          src="	https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
