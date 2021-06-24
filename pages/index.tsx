import React, { FC, useEffect, useRef, useState } from "react";
import JobsService from "../services/JobsService";
import SearchBox from "../components/SearchBox/index";
import Card from "../components/Card/index";
import Panel from "../components/Panel/index";
import { GetStaticProps } from "next";
import { FilterKeys, FilterType } from "../types/index";
import {
  getCardTitle,
  getItems,
  countJobs,
} from "../util/index";

interface JobsProps {
  jobs: any[] | null;
  filters: any;
}

const Jobs: FC<JobsProps> = ({ jobs, filters }) => {
  const mountRef = useRef(false);
  const [jobsData, setJobsData] = useState<any[] | null>(jobs);
  const [searchString, setSearchString] = useState<
    string | undefined
  >(undefined);
  const [searching, setSearching] = useState(false);
  const [sort, setSort] = useState<FilterType[]>([]);
  useEffect(() => {
    if (mountRef.current) {
      fetchJobsData();
    }
    mountRef.current = true;
    console.log(searchString);
  }, [sort, searchString]);
  const fetchJobsData = async () => {
    setSearching(true);
    const res = await JobsService.searchJob(searchString, sort);
    res && setJobsData(res);
    setSearching(false);
  };
  const onSortSelected = (
    action: "asc" | "desc",
    val: FilterKeys
  ) => {
    setSort((s) => {
      const filterExists =
        s.filter((f) => Object.keys(f)[0] === val).length > 0;
      if (filterExists) {
        return s.map((v) => {
          if (Object.keys(v)[0] === val) {
            const order = v[val] === "asc" ? "desc" : "asc";
            return { ...v, [val]: order };
          }
          return v;
        });
      }
      return [...s, { [val]: action }];
    });
  };
  const onClearFilters = () => {
    setSort([]);
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
            data={jobsData || []}
            onSortSelected={onSortSelected}
            count={countJobs(jobsData)}
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
  return {
    props: {
      jobs: jobsData?.jobs || null,
      filters: filtersData,
    },
  };
};

export default Jobs;
