import React from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";



import { CiShoppingCart } from "react-icons/ci";

import Search from "./Search";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <>
      <header className="  container sticky top-0 z-50 py-2 bg-white">
        {/* MOBILE SCREEN */}

        <div className=" h-full  flex justify-between items-center md:hidden">
          <Link href="/" className="flex items-center space-x-3">
            <span className=" font-semibold text-lg tracking-wide">
              Kennedy-Wix
            </span>
          </Link>
          <MobileMenu />
        </div>

        {/* Large Screens */}

        <div className=" h-full hidden md:flex  justify-between items-center   ">
          <Link href="/" className="flex items-center space-x-3 w-1/3">
            <CiShoppingCart className="h-10 w-10 hidden md:block" />
            <span className=" font-semibold text-2xl tracking-wide">
              Kennedy-Wix
            </span>
          </Link>

          <div className="w-2/3  flex items-center flex-1 gap-10">
            <Search />
            <NavIcons/>
          </div>
        </div>

        <div className="text-base space-x-6 py-4  hidden md:flex  items-center   border-b-2 border-gray-100">
        <Link href="#">Homepage</Link>
        <Link href="#">Shop</Link>
        <Link href="#">Deals</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
      </div>
      </header>

     
    </>
  );
};

export default Navbar;
