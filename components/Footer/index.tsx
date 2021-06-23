import Link from "next/link";
import React from "react";
import { FOOTER_CONTENT } from "../../common/constants";
import { nanoid } from "nanoid";

const Footer = () => {
  return (
    <div className="bg-white sm:grid sm:grid-cols-1 md:flex p-5 md:space-x-10">
      {Object.keys(FOOTER_CONTENT).map((k, i) => {
        const key = k as keyof typeof FOOTER_CONTENT;
        const data = FOOTER_CONTENT[key];
        const hasList = data.list.length > 0;
        const style = i === 0 ? "md:w-2/4" : "md:w-1/4";
        return (
          <div className={`${style} sm:mb-8`} key={key}>
            <header className="md:text-sm sm:text-lg font-bold mb-4">
              {key}
            </header>
            {data.body && <div>{data.body}</div>}
            {hasList && (
              <ul className="text-sm">
                {data.list.map((l) => {
                  return (
                    <li className="mb-3" key={nanoid()}>
                      <Link href="/">{l}</Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
