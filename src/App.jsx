import React, { useState, useEffect } from "react";
import { data } from "./data";

const ApplicantList = () => {
  const [applicants, setApplicants] = useState(data);
  const [jobApplicationsByDate, setJobApplicationsByDate] = useState({});

  useEffect(() => {
    // Function to store data in array with job and date
    const aggregateDataByDate = () => {
      const aggregatedData = applicants.reduce((acc, applicant) => {
        const { date_applied } = applicant;
        acc[date_applied] = (acc[date_applied] || 0) + 1; // Increment count for the date or initialize it to 1 if not exists
        return acc;
      }, {});
      setJobApplicationsByDate(aggregatedData);
    };

    aggregateDataByDate();
  }, [applicants]);

  return (
    <div>
      <h2>Job Applications By Date</h2>
      <ul>
        {Object.entries(jobApplicationsByDate).map(([date_applied, count]) => (
          <li key={date_applied}>
            <p>Date: {date_applied}</p>
            <p>Number of Job Applications: {count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicantList;
