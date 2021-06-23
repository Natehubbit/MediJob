import React, { FC, useEffect } from "react";
import JobsService from "../services/JobsService";
import SearchBox from "../components/SearchBox/index";
import Card from "../components/Card/index";
import Panel from "../components/Panel/index";
import { GetStaticProps } from "next";

interface JobsProps {
  jobs: any[];
  filters: any;
}

const Jobs: FC<JobsProps> = ({ jobs, filters }) => {
  useEffect(() => {
    console.log("JOBS:: ", jobs);
  }, [jobs]);
  const getCardTitle = (title: string) => {
    if (title === "job_type") return "Job Type";
    if (title === "work_schedule") return "Work Schedule";
    return title;
  };
  const getItems = (data: any[]) => {
    return data.map((d) => ({
      item: d.key,
      count: d.doc_count,
    }));
  };
  const countJobs = () => {
    let count = 0;
    jobs.forEach((j) => {
      count += j.total_jobs_in_hospital;
    });
    return count;
  };
  return (
    <div className="flex flex-col p-4 min-h-screen relative">
      <div className="mb-4">
        <SearchBox />
      </div>
      <div className="flex space-x-5 relative">
        <div className="flex flex-col w-2/12 space-y-4">
          {Object.keys(filters).map((k) => {
            const data = filters[k as any];
            return (
              <Card
                key={k}
                title={getCardTitle(k)}
                items={getItems(data)}
              />
            );
          })}
        </div>
        <div className="w-10/12 bg-white">
          <Panel data={jobs} count={countJobs()} />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const jobsData = await JobsService.getJobs();
  const filtersData = await JobsService.getFilters();
  return {
    props: {
      jobs: jobsData?.jobs || null,
      filters: filtersData,
    },
  };
};

export default Jobs;
