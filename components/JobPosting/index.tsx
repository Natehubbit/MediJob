import React, { FC, useState } from "react";
import { nanoid } from "nanoid";
import JobPostingDetails from "../JobPostingDetails";

interface JobPostingProps {
  data: {
    items: any[];
    name: string;
    job_title: string;
    total_jobs_in_hospital: string;
  };
}

const JobPosting: FC<JobPostingProps> = ({ data }) => {
  const [showJobs, setShowJobs] = useState(false);
  const onClickPosting = () => {
    setShowJobs(!showJobs);
  };

  const getCityInitials = () => {
    return data.items[0].city.substr(0, 2).toUpperCase();
  };

  return (
    <div>
      <div
        onClick={onClickPosting}
        className="flex items-center text-sm py-2 px-2 cursor-pointer"
      >
        <div className="rounded-lg h-8 w-8 bg-gray-400 text-white justify-center items-center flex mr-4">
          {getCityInitials()}
        </div>
        <div>
          {data.total_jobs_in_hospital} jobs for {data.name}
        </div>
      </div>
      {showJobs &&
        data.items.map((d) => {
          return <JobPostingDetails key={nanoid()} data={d} />;
        })}
    </div>
  );
};

export default JobPosting;
