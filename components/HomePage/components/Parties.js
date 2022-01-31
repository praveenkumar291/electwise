import Link from "next/link";
import axios from 'axios';
import { useRouter } from "next/router"
import { stateList } from "../../Layout/components/constants";

import React, { useEffect, useState } from "react";

const Parties = () => {
   const router = useRouter();
  const [partyData, setPartyData] = useState([]);
   const getStateName = () => {
     const slug = router.asPath.split("/")[1];
     return stateList[slug];
   };


  const getPartyData = (partyslug= getStateName()) => {
    axios
      .get(`https://www.electwise.in/api/v2/${partyslug}/popular-parties/`)
      .then(({ data }) => {
        setPartyData(data);
        console.log(data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getPartyData(window.location.pathname.split("/").pop())

  }, []);

return (
  <div>
    <div className="w-auto ">
      <section className="max-w-5xl flex-shrink-0 h-auto mx-auto px-4 sm:px-6 bg-white shadow-lg lg:px-4 py-12 my-8">
        <div className="text-left  border-b-2 w-full">
          <h2 className="text-base font-normal   text-2xl">Popular Parties</h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6">
          {partyData.map((item, i) => (
            <div className="w-full sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div className="card_popular_container">
                {" "}
                <Link href={`parties/${item.slug}`}>
                  <img
                    className="object-center object-cover rounded-full h-30 w-32 "
                    src={item.logo}
                    alt=""
                    width="320"
                    height="222"
                  />
                </Link>
              </div>

              <div className="text-center ">
                <p className="text-l text-black font-bold mb-2">
                  {" "}
                  {item.abbreviation}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);
};

export default Parties;
