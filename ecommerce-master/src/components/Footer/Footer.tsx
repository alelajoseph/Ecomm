import Link from "next/link";
import React from "react";

const Footer = () => {
  return (

    <footer className="bg-gray-200 text-gray-600  mt-12  py-10">

    <div className=" flex flex-col gap-4 container   ">
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex flex-col gap-10 flex-1 ">
        <h2 className="font-bold">KENNEDY SHOP</h2>

        <div className="flex flex-col gap-10 text-xs ">
          <span>
            3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United
            States
          </span>
          <span>kenmwan75@gmail.com</span>
          <span>+254 714656324</span>
        </div>
      </div>

      {/* second section */}
      <div className=" flex flex-col gap-12  flex-1">
        <h2 className="font-bold">COMPANY</h2>

        <div className=" flex flex-col gap-2 text-xs">
          <span>About Us</span>
          <span>Careers</span>
          <span>Affiliates</span>
          <span>Blog</span>
          <span>Contact Us</span>
        </div>
      </div>

      <div className=" flex flex-col gap-12  flex-1">
        <h2 className="font-bold">SHOP</h2>

        <div className=" flex flex-col gap-2 text-xs">
          <span>New Arrivals</span>
          <span>Accessories</span>
          <span>Affiliates</span>
          <span>Men</span>
          <span>Women</span>
          <span>All Products</span>
        </div>
      </div>

      <div className="  flex flex-col gap-12 flex-1">
        <h2 className="font-bold">HELP</h2>

        <div className="flex flex-col gap-2  text-xs">
          <span>Customer Service</span>
          <span>My Account</span>
          <span>Find A Store</span>
          <span>Legal & Privacy</span>
          <span>Gift Card</span>
        </div>
      </div>

      <div className="  flex flex-col gap-12 flex-1">
        <h2 className="font-bold">SUBSCRIBE</h2>

        <span className="text-xs">
          Be the first to get the latest news about trends,prom
        </span>

        <div className="flex h-10  bg-red-600">
          <input
            type="text"
            className=" outline-none pl-2 h-auto text-sm flex-1"
            placeholder="Email Adress"
          />

          <Link href="">
            <button className=" bg-lama text-sm text-white p-2 h-full">
              Join
            </button>
          </Link>
        </div>

        <span className=" text-xs font-bold">Secure Payments</span>
      </div>
    </div>

    <div className=" text-sm flex flex-col gap-4 md:flex-row md:justify-between">
      <span>2024 - Kennedy Shop</span>
      <div className="flex gap-2 items-center">
        <span>Language</span>
        <span className=" font-bold">United States | English</span>
        <span>Currency</span>
        <span className="font-bold">$ USD</span>
      </div>
    </div>
  </div>

    </footer>

  );
};

export default Footer;
