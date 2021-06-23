import React, {
  FC,
  FocusEventHandler,
  KeyboardEventHandler,
  useRef,
} from "react";
import { Search } from "react-feather";

interface SearchBoxProps {
  setJobsData: (val: any[]) => void;
  setSearchString: (val: string) => void;
  searching?: boolean;
}

const SearchBox: FC<SearchBoxProps> = ({ setSearchString }) => {
  const ref = useRef<HTMLInputElement>();
  const onClick = () => {
    ref.current && ref.current.focus();
  };
  const onEnter: KeyboardEventHandler<HTMLInputElement> = ({
    currentTarget,
    key,
  }) => {
    if (key.toLowerCase() === "enter") {
      const { value } = currentTarget;
      setSearchString(value);
    }
  };
  const onBlur: FocusEventHandler<HTMLInputElement> = ({
    currentTarget,
  }) => {
    const { value } = currentTarget;
    setSearchString(value);
  };
  return (
    <div className="relative">
      <div
        onClick={onClick}
        className="w-full pl-4 flex space-x-4 h-12 cursor-pointer bg-white border-2 border-gray-100"
      >
        <div className="flex items-center opacity-50 justify-center">
          <Search />
        </div>
        <input
          onBlur={onBlur}
          ref={ref as any}
          onKeyDown={onEnter}
          className="h-full w-full cursor-text focus:outline-none focus:ring-2"
          placeholder="Search for any job, title, keywords or company"
        />
      </div>
    </div>
  );
};

export default SearchBox;
