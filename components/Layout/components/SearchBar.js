import axios from "axios";
import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState([]);
  const [queryData, setQueryData] = useState()


  const searchPartyData = () => {
    axios
      .get(`https://www.electwise.in/api/search/?query=${query}`)
      .then(({ data }) => {
     setQueryData(data.results);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="flex  mx-auto w-auto max-w-6xl text-black  pl-5 pr-8  mt-10">
      <input
        onChange={(e) => setQuery(e.target.value)}
        className="border-2  border-secondary bg-white transition h-9 px-5 pr-16 rounded-md focus:outline-none w-full text-black text-lg  "
        type="search"
        name="search"
        placeholder="Search Party or constituency or politician or News"
      />
      <svg
        onClick={() => searchPartyData()}
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-6  "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <div>{queryData?.Politicians.map((item) => {
        return <p>{item?.politician}</p>;

      })}</div>
    </div>
  );
};

export default SearchBar;
