import React, { useState, useEffect } from "react";
import { data } from "./data";

function JobApplicationStats({ jobData, dateArray }) {
  const [stats, setStats] = useState({});
  const dates = [];
  const job = [];

  useEffect(() => {
    const calculateStats = () => {
      const statsObject = {};
      dateArray.forEach((date) => {
        // Filter jobData for each date
        const jobsOnDate = jobData.filter((job) => job.date_applied === date);
        // Count number of jobs on that date
        const count = jobsOnDate.length;
        // Store the count in the stats object
        statsObject[date] = count;
      });
      // Update state with the stats object
      setStats(statsObject);
    };

    calculateStats();
  }, [jobData, dateArray]);

  //   const newData = Object.keys(stats); destructured the keys
  //   const newJob = Object.values(stats); destructured the values
  console.log(newData);
  console.log(newJob);

  return (
    <div>
      <h2>Job Application Statistics</h2>
      <ul>
        {dateArray.map((date) => (
          <li key={date}>
            {date}: {stats[date] || 0}
          </li>
        ))}
      </ul>
    </div>
  );
}

// final code
// dateArray will come from deate range picker
// jobData will com from api data
// statsObject is the final output
// final code

// Example usage
const Test = () => {
  const dateArray = ["2024-05-01", "2024-05-02", "2024-05-03"]; // Your date array

  const jobData = [
    { job_name: "Software Engineer", date_applied: "2024-05-01" },
    { job_name: "Data Analyst", date_applied: "2024-05-01" },
    { job_name: "Product Manager", date_applied: "2024-05-03" },
    { job_name: "UX Designer", date_applied: "2024-05-01" },
    { job_name: "Marketing Coordinator", date_applied: "2024-05-02" },
    { job_name: "Marketing Coordinator", date_applied: "2024-05-01" },
    { job_name: "HR Specialist", date_applied: "2024-05-03" },
    { job_name: "Customer Support Representative", date_applied: "2024-05-03" },
    { job_name: "Operations Manager", date_applied: "2024-05-03" },
    { job_name: "Quality Assurance Tester", date_applied: "2024-05-01" },
    { job_name: "Graphic Designer", date_applied: "2024-05-01" },
    { job_name: "Business Analyst", date_applied: "2024-05-02" },
    { job_name: "Sales Associate", date_applied: "2024-05-03" },
    { job_name: "Network Administrator", date_applied: "2024-05-03" },
    { job_name: "Content Writer", date_applied: "2024-05-02" },
    { job_name: "Project Manager", date_applied: "2024-05-02" },
    { job_name: "Legal Assistant", date_applied: "2024-05-01" },
    { job_name: "Systems Engineer", date_applied: "2024-05-01" },
    { job_name: "Research Scientist", date_applied: "2024-05-03" },
    { job_name: "Administrative Assistant", date_applied: "2024-05-01" },
  ];

  return <JobApplicationStats jobData={jobData} dateArray={dateArray} />;
};

export default Test;
