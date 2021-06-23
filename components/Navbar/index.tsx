import React from "react";
import { NAV_MENU } from "../../common/constants";
import Link from "next/link";
import Button from "../Button";
import Avatar from "../Avatar/index";

const Navbar = () => {
  return (
    <div className="bg-white p-4 flex justify-between items-center">
      <div>
        <p className="text-lg font-size text-blue-500 font-medium cursor-pointer">
          HEALTH EXPLORE
        </p>
      </div>
      <div className="text-sm flex">
        {Object.keys(NAV_MENU).map((k) => {
          const key = k as keyof typeof NAV_MENU;
          return (
            <Link key={k} href={NAV_MENU[key]}>
              <a className="mx-3 font-bold hover:opacity-50">
                {key.toUpperCase()}
              </a>
            </Link>
          );
        })}
      </div>
      <div className="space-x-5 flex items-center">
        <Button>Create Job</Button>
        <Avatar />
        <Button mode="text">Logout</Button>
      </div>
    </div>
  );
};

export default Navbar;
