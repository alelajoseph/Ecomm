"use client";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" md:hidden">
      <CiMenuBurger
        className="h-8 w-8 cursor-pointer"
        onClick={() => setOpen((open) => !open)}
      />

      {open && (
        <div className="absolute top-20 w-full h-[calc(100vh-80px)] z-20 bg-black text-white left-0 flex flex-col items-center justify-center gap-4 text-2xl">
          <Link href="#">Homepage</Link>
          <Link href="#">Shop</Link>
          <Link href="#">Deals</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;