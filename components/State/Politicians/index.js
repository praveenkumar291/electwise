import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Politicians = () => {
  const [politicians, setPoliticians] = useState([]);
  const [popularPoliticians, setPopularPoliticians] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getPoliticians = () => {
    axios
      .get(`https://www.electwise.in/api/v2/politicians/?page=${currentPage}`)
      .then(({ data }) => {
        setPoliticians(data.results);
      })
      .catch((e) => console.log(e));
  };

  const getPopularPoliticians = (stateName) => {
    axios
      .get(
        `https://www.electwise.in/api/v2/${[stateName]}/popular-politicians/`
      )
      .then(({ data }) => {
        console.log(data);
        setPopularPoliticians(data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getPoliticians();
    getPopularPoliticians(window.location.pathname.split("/")[1]);
  }, []);

  return (
    <div>
      <div className="w-auto ">
        <section className="max-w-5xl h-auto mx-auto px-4 sm:px-6 bg-white shadow-lg lg:px-4 py-12">
          <div className="text-left  border-b-2 w-full">
            <h2 className="text-base font-bold   text-2xl">
              Popular Politicians
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6">
            {popularPoliticians.map((member) => (
              <a href={`/politician/${member.slug}`}>
                <div className="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                  <div>
                    <img
                      className="w-36 h-36  md:w-30 md:h-6rem mx-24px  "
                      src={member.photo}
                      alt=""
                      width="320"
                      height="222"
                    />
                  </div>
                  <div className="text-center w-36 text-base bg-gray-700 bg-opacity-50">
                    <p className="text-l text-white font-bold mb-2">
                      {member.name}
                    </p>
                  </div>
                </div>
              </a>
            ))}
            
          </div>
        </section>
      </div>
      <div>
        <div className="w-auto ">
          <section className="max-w-5xl h-auto mx-auto px-4 sm:px-6 bg-white shadow-lg lg:px-4 py-12">
            <div className="text-left  border-b-2 w-full">
              <h2 className="text-base font-bold   text-2xl">Politicians</h2>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6">
              {politicians.map((leader) => (
                <div className="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                  <div>
                    <Link href={leader.slug}>
                      <img
                        className="w-36 h-36  md:w-30 md:h-6rem mx-24px "
                        src={
                          leader.photo ||
                          "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
                        }
                        alt=""
                        width="320"
                        height="222"
                      />
                    </Link>
                  </div>
                  <div className="text-center w-36 text-base bg-gray-700 bg-opacity-50">
                    <p className="text-l text-white font-bold mb-2">
                      {leader.name}
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
      </div>
    </div>
  );
};

export default Politicians;
