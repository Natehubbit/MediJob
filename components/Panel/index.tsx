import { nanoid } from "nanoid";
import React, { FC } from "react";
import { SORT_KEYS } from "../../common/constants";
import { FilterKeys, FilterType } from "../../types/index";
import JobPosting from "../JobPosting/index";
import SortItem from "../SortItem";

interface PanelProps {
  count: number;
  data: any[];
  filters: FilterType[];
  loading: boolean;
  onSortSelected: (
    action: "asc" | "desc",
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
    return (
      filters.filter((f) => {
        return Object.keys(f)[0] === k;
      }).length > 0
    );
  };
  const getOrder = (k: FilterKeys) => {
    const orderItem = filters.filter((f) => {
      return Object.keys(f)[0] === k;
    });
    if (orderItem?.length > 0) {
      return orderItem[0][k];
    }
    return undefined;
  };
  return (
    <div className="py-10 px-3 border-2 bg-white border-gray-100">
      <>
        <div className="flex justify-end">
          {hasFilters && (
            <button
              className="text-blue-500 text-right text-xs rounded-full border-2 border-blue-500 px-2"
              onClick={onClearFilters}
            >
              Clear &#10005;
            </button>
          )}
        </div>
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
                    order={getOrder(k)}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <div className="px-2">
          {loading ? (
            <div className="flex items-center justify-center h-56 w-full">
              <h3>Loading data...</h3>
            </div>
          ) : (
            <>
              {data.map((d) => {
                return <JobPosting key={nanoid()} data={d} />;
              })}
            </>
          )}
        </div>
      </>
    </div>
  );
};

export default Panel;
