import React, { FC, useEffect } from "react";
import { SORT_KEYS } from "../../common/constants";
import JobPosting from "../JobPosting/index";
import { nanoid } from "nanoid";
import SortItem from "../SortItem";
import { FilterKeys } from "../../types/index";

interface PanelProps {
  count: number;
  data: any[];
  filters: FilterKeys[];
  loading: boolean;
  onSortSelected: (
    action: "add" | "remove",
    val: FilterKeys
  ) => void;
  onClearFilters: () => void;
}

const Panel: FC<PanelProps> = ({
  count,
  data,
  loading,
  onSortSelected,
  onClearFilters,
  filters,
}) => {
  const hasFilters = filters.length > 0;
  const getFilterActive = (k: FilterKeys) => {
    return filters.filter((f) => f === k).length > 0;
  };
  return (
    <div className="py-10 px-3 border-2 bg-white border-gray-100">
      {loading ? (
        <div className="flex items-center justify-center h-56 w-full">
          <h3>Loading data...</h3>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-end text-sm mb-10">
            <div>
              <header>
                <b>{count.toLocaleString()}</b> job postings
              </header>
            </div>
            <div className="md:flex space-x-4 sm:hidden">
              <ul className="md:flex space-x-4 items-center">
                <li className="text-gray-400">Sort by</li>
                {SORT_KEYS.map((k) => {
                  return (
                    <SortItem
                      key={k}
                      active={getFilterActive(k)}
                      item={k}
                      onClick={onSortSelected}
                    />
                  );
                })}
              </ul>
              {hasFilters && (
                <button
                  className="text-red-500 rounded-full border-2 border-red-500 px-2"
                  onClick={onClearFilters}
                >
                  Clear &#10005;
                </button>
              )}
            </div>
          </div>
          <div className="px-2">
            {data.map((d) => {
              return <JobPosting key={nanoid()} data={d} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Panel;
