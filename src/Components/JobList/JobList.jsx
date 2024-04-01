import React, { useState, useEffect } from "react";
import { fetchJobs } from "../../http/jobPosting";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const jobs = fetchJobs();
    setJobs(jobs);
  }, []);

  return (
    <div>
      <h1>Job List</h1>
      <div>
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;