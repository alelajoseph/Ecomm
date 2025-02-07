import Image from "next/image";
import React from "react";

import woman from "/public/woman.png";
import Filters from "@/components/Filters/Filters";

const ListPage = () => {
  return (
    <section>
      <div className="container py-16 flex  justify-between bg-pink-50 items-center">
        {/* text section  */}

        <div className=" relative w-2/3">
          <h1 className="text-3xl lg:text-4xl font-semibold text-black/70 leading-[48px] max-w-sm">
            Grab up to 50% off on Selected Products
          </h1>

          <button className=" bg-red-400 my-4 text-white rounded-full px-4 py-2 text-sm">
            Buy Now
          </button>
        </div>

        {/* image section  */}

        <div className=" relative  w-1/3  ">
          <Image
            alt=""
            className=" object-contain"
            src={woman}
            style={{
              height: "200px",
              width: "100%",
            }}
          />
        </div>
      </div>

      <Filters/>
    </section>
  );
};

export default ListPage;
