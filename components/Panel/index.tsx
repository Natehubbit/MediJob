import React, { FC, useEffect, useState } from "react";
import { SORT_KEYS } from "../../common/constants";
import { FilterKeys } from "../../types";
import JobPosting from "../JobPosting/index";
import { nanoid } from "nanoid";

interface PanelProps {
  count: number;
  data: any[];
}

const Panel: FC<PanelProps> = ({ count, data }) => {
  const [filter, setFilter] = useState<FilterKeys>();
  useEffect(() => {
    // TODO: MAKE CALL TO API
  }, [filter]);
  const onSelectFilter = (val: FilterKeys) => {
    setFilter(val);
  };
  const getFilterStyle = (val: FilterKeys) => {
    if (val === filter) {
      return "text-blue-400 font-bold";
    }
  };
  return (
    <div className="py-10 px-3 border-2 border-gray-100">
      <div className="flex justify-between items-end text-sm mb-10">
        <div>
          <header>
            <b>{count.toLocaleString()}</b> job postings
          </header>
        </div>
        <ul className="flex space-x-4">
          <li className="text-gray-400">Sort by</li>
          {SORT_KEYS.map((k) => {
            return (
              <li
                onClick={() => onSelectFilter(k)}
                className={`cursor-pointer ${getFilterStyle(k)}`}
                key={k}
              >
                {k}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="px-2">
        {data.map((d) => {
          return <JobPosting key={nanoid()} data={d} />;
        })}
      </div>
    </div>
  );
};

export default Panel;
