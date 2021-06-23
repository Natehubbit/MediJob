import React, { FC } from "react";
import { FilterKeys } from "../../types";

interface SortItemProps {
  item: FilterKeys;
  active: boolean;
  onClick: (action: "add" | "remove", val: FilterKeys) => void;
}

const SortItem: FC<SortItemProps> = ({
  item,
  onClick,
  active,
}) => {
  const onSelectFilter = (val: FilterKeys) => {
    if (active) {
      return onClick("remove", val);
    }
    return onClick("add", val);
  };
  const getFilterStyle = () => {
    if (active) {
      return "text-blue-400 font-bold";
    }
  };
  return (
    <>
      <li
        onClick={() => onSelectFilter(item)}
        className={`cursor-pointer ${getFilterStyle()}`}
        key={item}
      >
        {item}
      </li>
    </>
  );
};

export default SortItem;
