"use client";
import React from "react";

import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };
  return (
    <form
      className=" flex items-center flex-1 h-full p-2   rounded-full  bg-slate-300 "
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        className=" flex-1 px-2 text-sm outline-none bg-transparent"
        placeholder="Search Here..."
        id=""
      />
      <CiSearch className=" h-8 w-8" />
    </form>
  );
};

export default Search;
