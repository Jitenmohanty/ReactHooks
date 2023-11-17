import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchCard/SearchBar";
import JobCard from "./Components/JobCard/JobCard";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

function App() {
  const [jobs, setJobs] = useState([]);
  const [clearFilter, setClearFilter] = useState(false);

  const fetchJobs = async () => {
    setClearFilter(false);
    const temp = [];
    const jobRefs = query(collection(db, "jobs"));
    const q = query(jobRefs, orderBy("postedOn", "desc"));

    const req = await getDocs(q);
    req.forEach((job) => {
      temp.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(temp);
  };

  const CustomfetchJobs = async (filterJobs) => {
    setClearFilter(true);
    const temp = [];
    const jobRefs = query(collection(db, "jobs"));
    const q = query(
      jobRefs,
      where("type", "==", filterJobs.type || ""),
      where("title", "==", filterJobs.title || ""),
      where("experience", "==", filterJobs.experience || ""),
      where("location", "==", filterJobs.location || ""),
      orderBy("postedOn", "desc")
    );
    console.log("Generated query:", q);

    const req = await getDocs(q);
    req.forEach((job) => {
      temp.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(temp);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <SearchBar CustomfetchJobs={CustomfetchJobs} clearFilter={clearFilter}/>
      {clearFilter && (
        <button className="flex ml-[300px]  sm:ml-[1280px] mb-2" onClick={fetchJobs}>
          <p className="bg-blue-500 w-full text-white font-bold py-2 px-2 rounded-md">
            Clear Filter
          </p>
        </button>
      )}
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </>
  );
}

export default App;
