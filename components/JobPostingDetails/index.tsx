import moment from "moment";
import { nanoid } from "nanoid";
import React, { FC, useState } from "react";
import Button from "../Button/index";

interface JobPostingDetailsProps {
  data: any;
}

const JobPostingDetails: FC<JobPostingDetailsProps> = ({
  data: d,
}) => {
  const [showJob, setShowJob] = useState(false);
  const onClickJob = () => {
    setShowJob(!showJob);
  };
  const getDepartments = (data: string[]) => {
    const last = data.length - 1;
    let departments = "";
    data.forEach((dp, i) => {
      if (i < last) {
        departments += `${dp}, `;
      }
      if (i === last) {
        departments += `${dp}`;
      }
    });
    return departments;
  };
  const getHoursShift = (hours: number[], shift: string) => {
    const last = hours.length - 1;
    let hoursString = "";
    hours.forEach((h, i) => {
      if (i < last) {
        hoursString += `${h}, `;
      }
      if (i === last) {
        hoursString += `${h}`;
      }
    });
    return `${hoursString} hour / ${shift}`;
  };
  const getJobMeta = (jobData: any) => {
    const { work_schedule, salary_range, city } = jobData;
    let meta = "";
    meta = work_schedule && meta.concat(`${work_schedule} | `);
    if (salary_range.length > 0) {
      const salary =
        salary_range.length > 1
          ? `$${salary_range[0]} - $${salary_range[1]}`
          : `${salary_range[0]}`;
      meta = meta.concat(`${salary} an hour | `);
    }
    meta = meta.concat(city);
    return meta;
  };
  return (
    <div key={nanoid()}>
      <div>
        <div
          onClick={onClickJob}
          className="border-t-2 py-4 px-2 flex text-sm justify-between items-center cursor-pointer"
        >
          <div>
            <header className="font-bold">{d.job_title}</header>
            <p className="text-xs">{getJobMeta(d)}</p>
          </div>
          <div>
            <p>{moment(d.created).fromNow()}</p>
          </div>
        </div>
        {showJob && (
          <div className="px-2 text-sm my-2">
            <div className="md:flex md:space-x-4 mb-4">
              <header className="md:w-1/3 font-bold">
                Department
              </header>
              <div className="md:w-1/3">
                {getDepartments(d.department)}
              </div>
              <div className="md:w-1/3"></div>
            </div>
            <div className="md:flex md:space-x-4 mb-4">
              <header className="md:w-1/3 font-bold">
                Hours/shifts
              </header>
              <div className="md:w-1/3">
                {getHoursShift(d.hours, d.work_schedule)}
              </div>
              <div className="md:w-1/3"></div>
            </div>
            <div className="md:flex md:space-x-4 mb-4">
              <header className="md:w-1/3 font-bold">
                Summary
              </header>
              <div className="md:w-1/3">{d.description}</div>
              <div className="md:w-1/3 flex md:items-end sm:space-x-4 sm:my-4 md:flex-col">
                <div className="mb-2">
                  <Button mode="solid" upperCase={false}>
                    Job Details
                  </Button>
                </div>
                <div className="mb-2">
                  <Button upperCase={false}>Save Job</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPostingDetails;
