import dayjs from "dayjs";
import React from "react";

const JobCard = (props) => {
  // const skils = ["Javascript", "React", "Html"];
  const day1 = dayjs(Date.now());
  const diffDay = day1.diff(props.postedOn, "day");

  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between bg-gray-300 px-4 py-4 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103">
        <div className="flex flex-col items-start gap-3">
          <h1 className="font-semibold text-lg ">
            {props.title} - {props.company}
          </h1>
          <p className="">
            {props.type}. {props.experience}. {props.location}.
          </p>
          <div className="flex items-center gap-2">
            {props.skills.map((skill) => (
              <p
                key={skill}
                className="text-gray-500 py-1 px-2 border border-black rounded-md"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-gray-500">Posted on {diffDay} days ago</p>
          <a href={props.job_link} alt="_blank">
            <button className="text-blue-500 border font-semibold border-blue-500 rounded-md px-10 py-2">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
