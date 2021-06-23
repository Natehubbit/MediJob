import React, { FC, useEffect, useRef, useState } from "react";
import JobsService from "../services/JobsService";
import SearchBox from "../components/SearchBox/index";
import Card from "../components/Card/index";
import Panel from "../components/Panel/index";
import { GetStaticProps } from "next";
import { FilterKeys } from "../types/index";

interface JobsProps {
  jobs: any[];
  filters: any;
}

const Jobs: FC<JobsProps> = ({ jobs, filters }) => {
  const mountRef = useRef(false);
  const [jobsData, setJobsData] = useState<any[]>(jobs);
  const [searchString, setSearchString] = useState<
    string | undefined
  >(undefined);
  const [searching, setSearching] = useState(false);
  const [sort, setSort] = useState<FilterKeys[]>([]);
  useEffect(() => {
    if (mountRef.current) {
      fetchJobsData();
    }
    mountRef.current = true;
  }, [sort, searchString]);
  const fetchJobsData = async () => {
    setSearching(true);
    const res = await JobsService.searchJob(searchString, sort);
    res && setJobsData(res);
    setSearching(false);
  };
  const onSortSelected = (
    action: "add" | "remove",
    val: FilterKeys
  ) => {
    if (action === "add") {
      setSort((s) => [...s, val]);
    } else {
      setSort((s) => {
        return s.filter((v) => v !== val);
      });
    }
  };
  const onClearFilters = () => {
    setSort([]);
  };
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
    jobsData.forEach((j) => {
      count += j.total_jobs_in_hospital;
    });
    return count;
  };
  return (
    <div className="flex flex-col md:p-4 min-h-screen relative">
      <div className="md:mb-4">
        <SearchBox
          searching={searching}
          setSearchString={setSearchString}
          setJobsData={setJobsData}
        />
      </div>
      <div className="flex md:space-x-5 relative">
        <div className="md:flex sm:hidden flex-col w-2/12 space-y-4">
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
        <div className="sm:w-full md:w-10/12">
          <Panel
            loading={searching}
            data={jobsData}
            onSortSelected={onSortSelected}
            count={countJobs()}
            filters={sort}
            onClearFilters={() => onClearFilters()}
          />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const jobsData = await JobsService.getJobs();
  const filtersData = await JobsService.getFilters();
  if (!filtersData || !jobsData?.jobs) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
  return {
    props: {
      jobs: jobsData?.jobs || null,
      filters: filtersData,
    },
  };
};

export default Jobs;
