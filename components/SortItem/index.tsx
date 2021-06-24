import React, { FC } from "react";
import { FilterKeys } from "../../types";
import { ChevronUp, ChevronDown } from "react-feather";

interface SortItemProps {
  item: FilterKeys;
  active: boolean;
  onClick: (action: "asc" | "desc", val: FilterKeys) => void;
  order?: "asc" | "desc";
}

const SortItem: FC<SortItemProps> = ({
  item,
  onClick,
  active,
  order,
}) => {
  const onSelectFilter = (val: FilterKeys) => {
    if (active) {
      return onClick("desc", val);
    }
    return onClick("asc", val);
  };
  const getFilterStyle = () => {
    if (active) {
      return "text-blue-400 font-bold";
    }
  };
  const getSort = () => {
    return order === "desc" ? (
      <ChevronDown size={15} />
    ) : order === "asc" ? (
      <ChevronUp size={15} />
    ) : undefined;
  };
  return (
    <>
      <li
        onClick={() => onSelectFilter(item)}
        className={`cursor-pointer flex items-center ${getFilterStyle()}`}
        key={item}
      >
        {item}
        {getSort()}
      </li>
    </>
  );
};

export default SortItem;
