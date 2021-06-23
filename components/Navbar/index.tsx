import React from "react";
import { NAV_MENU } from "../../common/constants";
import Link from "next/link";
import Button from "../Button";
import Avatar from "../Avatar/index";
import { Menu } from "react-feather";

const Navbar = () => {
  return (
    <div className="bg-white p-4 flex justify-between items-center">
      <div>
        <div className="flex items-center space-x-4">
          <button>
            <Menu />
          </button>
          <p className="text-lg sm:text-sm md:text-lg text-blue-500 font-medium cursor-pointer">
            HEALTH EXPLORE
          </p>
        </div>
      </div>
      <div className="sm:hidden md:flex text-sm justify-between">
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
        <Avatar />
        <Button className="sm:hidden md:block">
          Create Job
        </Button>
        <Button className="sm:hidden md:block" mode="text">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
