import React, { useCallback, useEffect, useState } from "react";

const SearchBar = ({ CustomfetchJobs, clearFilter }) => {
  const [filteJobs, setFilterJobs] = useState({
    title: "",
    type: "",
    location: "",
    experience: "",
  });

  useEffect(() => {
  !clearFilter &&  setFilterJobs({
      title: "",
      type: "",
      location: "",
      experience: "",
    });
  }, [clearFilter]);

  const handleChange = useCallback(
    (e) => {
      !clearFilter
        ? setFilterJobs((prevFilter) => ({
            ...prevFilter,
            [e.target.name]: e.target.value,
          }))
        : setFilterJobs({
            title: "",
            type: "",
            location: "",
            experience: "",
          });
    },
    [clearFilter, filteJobs]
  );

  const handleSearch = async () => {
    await CustomfetchJobs(filteJobs);
  };

  return (
    <div className="flex gap-4 justify-center my-10 px-10">
      <select
        className="w-64 py-3 pl-4 bg-zinc-200 rounded-md font-semibold"
        value={filteJobs.title}
        name="title"
        onChange={handleChange}
      >
        <option value="" disabled hidden selected>
          Job Role
        </option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Devloper">Android Devloper</option>
        <option value="Fullstack Developer">Fullstack Developer</option>
      </select>
      <select
        className="w-64 py-3 pl-4 bg-zinc-200 rounded-md font-semibold"
        value={filteJobs.type}
        name="type"
        onChange={handleChange}
      >
        <option value="" disabled hidden selected>
          Job Type
        </option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>
      <select
        className="w-64 py-3 pl-4 bg-zinc-200 rounded-md font-semibold"
        value={filteJobs.location}
        name="location"
        onChange={handleChange}
      >
        <option value="" disabled hidden selected>
          Location
        </option>
        <option value="Remote">Remote</option>
        <option value="In Office">In Office</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select
        className="w-64 py-3 pl-4 bg-zinc-200 rounded-md  font-semibold"
        value={filteJobs.experience}
        name="experience"
        onChange={handleChange}
      >
        <option value="" disabled hidden selected>
          Experience
        </option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
      <button
        onClick={handleSearch}
        className="bg-blue-500 w-64 text-white font-bold py-3 rounded-md"
        disabled={
          !(
            filteJobs.experience ||
            filteJobs.location ||
            filteJobs.title ||
            filteJobs.type
          )
        }
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
