import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Parties = () => {
  const [parties, setParties] = useState([]);
  const[popularParties, setPopularParties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getTableData = () => {
    axios
      .get(`https://www.electwise.in/api/v2/parties/?page=${currentPage}`)
      .then(({ data }) => {
        setParties(data.results);

      })
      .catch((e) => console.log(e));
  };
  const getPopularParties = (stateName) => {

     axios
       .get(`https://www.electwise.in/api/v2/${[stateName]}/popular-parties/`)
       .then(({ data }) => {
         console.log(data);
         setPopularParties(data);
       })
       .catch((e) => console.log(e));

  }

  useEffect(() => {
    getTableData();
    getPopularParties(window.location.pathname.split("/")[1])

  }, [currentPage]);

  return (
    <div>
      <div className="w-auto ">
        <section className="max-w-5xl flex-shrink-0 h-auto mx-auto px-4 sm:px-6 bg-white shadow-lg lg:px-4 py-12 my-8">
          <div className="text-left  border-b-2 w-full">
            <h2 className="text-base font-bold   text-2xl">Popular Parties</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6">
            {popularParties.map((party) => (
              <div className="w-full sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                <div className="card_popular_container">
                  {" "}
                  <Link href={`/parties/${party.slug}`}>
                    <img
                      className="object-center object-cover rounded-full h-30 w-32 "
                      src={party.logo}
                      alt=""
                      width="320"
                      height="222"
                    />
                  </Link>
                </div>

                <div className="text-center ">
                  <p className="text-l text-black font-bold mb-2">
                    {" "}
                    {party.abbreviation}{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="w-auto ">
        <section className="max-w-5xl flex-shrink-0 h-auto mx-auto px-4 sm:px-6 bg-white shadow-lg lg:px-4 py-12 my-8">
          <div className="text-left  border-b-2 w-full">
            <h2 className="text-base font-bold   text-2xl">Parties</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6">
            {parties.map((party) => (
              <div className="w-full sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                <div className="card_popular_container">
                  {" "}
                  <Link href={party.slug}>
                    <img
                      className="object-center object-cover rounded-full h-30 w-30 "
                      src={
                        party.logo ||
                        "http://ictadmin.com.au/images/page_art/fa-university_256_20_0077bb_none.png"
                      }
                      alt=""
                      width="320"
                      height="222"
                    />
                  </Link>
                </div>

                <div className="text-center ">
                  <p className="text-l text-black font-bold mb-2">
                    {party.abbreviation}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="  items-center justify-items-center text-black font-bold  rounded"
          >
            Previous
          </button>
          &nbsp;
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className=" items-center justify-items-center text-black font-bold  rounded"
          >
            Next
          </button>
        </section>
      </div>
      {/* ) */}
    </div>
  );
};

export default Parties;
