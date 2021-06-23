import React, { useRef } from "react";
import { Search } from "react-feather";

const SearchBox = () => {
  const ref = useRef<HTMLInputElement>();
  const onClick = () => {
    ref.current && ref.current.focus();
  };
  return (
    <div
      onClick={onClick}
      className="w-full pl-4 flex space-x-4 h-12 cursor-pointer bg-white border-2 border-gray-100"
    >
      <div className="flex items-center opacity-50 justify-center">
        <Search />
      </div>
      <input
        ref={ref as any}
        className="h-full w-full cursor-text focus:outline-none focus:ring-2"
        placeholder="Search for any job, title, keywords or company"
      />
    </div>
  );
};

export default SearchBox;
