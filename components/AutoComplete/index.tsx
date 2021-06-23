import React, { FC } from "react";
import { nanoid } from "nanoid";

interface AutocompleteProps {
  data: any[] | null | undefined;
  setValue: (v: string) => void;
}

const Autocomplete: FC<AutocompleteProps> = ({ data }) => {
  return (
    <ul className="max-h-60 flex flex-col absolute w-full shadow-2xl overflow-auto z-50">
      {data &&
        data.map((_, i) => {
          console.log(_);
          return (
            <li
              className="cursor-pointer w-full z-50 bg-white p-1 px-4 hover:bg-blue-50"
              key={nanoid()}
            >
              <p className="opacity-80">Item {i}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Autocomplete;
