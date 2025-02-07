import React from "react";

const Filters = () => {
  return (
    <section className=" py-10">
      <div className="container flex justify-between items-center">
        <div className=" flex  justify-between gap-6 w-2/3">
          <select
            name="type"
            id=""
            className=" py-2 px-4 rounded-2xl text-xs font-medium bg-slate-200"
          >
            <option defaultChecked value="physical">
              {" "}
              Physical
            </option>
            <option value="digital"> Digital</option>
          </select>

          <input
            type="text"
            name="min"
            placeholder="min price"
            className=" text-xs rounded-2xl pl-2  ring-1 ring-gray-400"
          />
          <input
            type="text"
            name="max"
            placeholder="max price"
            className=" text-xs rounded-2xl pl-2  ring-1 ring-gray-400"
          />
          <select
            name="type"
            id=""
            className=" py-2 px-4 rounded-2xl text-xs font-medium bg-slate-200"
          >
            <option defaultChecked value="physical">
              {" "}
              Physical
            </option>
            <option value="digital"> Digital</option>
          </select>

          <select
            name="type"
            id=""
            className=" py-2 px-4 rounded-2xl text-xs font-medium bg-slate-200"
          >
            <option defaultChecked value="physical">
              {" "}
              Physical
            </option>
            <option value="digital"> Digital</option>
          </select>
        </div>
        <div className=" w-1/3 flex justify-end">
          <select
            name="type"
            id=""
            className=" py-2 px-4 rounded-2xl text-xs font-medium bg-slate-200"
          >
            <option defaultChecked value="physical">
              {" "}
              Physical
            </option>
            <option value="digital"> Digital</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Filters;
