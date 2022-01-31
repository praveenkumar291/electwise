import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { stateList } from "../../Layout/components/constants";


import React, { useEffect, useState } from "react";

const Popular = () => {

  const router = useRouter();

  const [politicianData, setPoliticianData] = useState([]);
  const getStateName = () => {
    const slug = router.asPath.split("/")[1];
    return stateList[slug];
  };
  const getPoliticianData = (politicianSlug = getStateName()) => {
    axios

      .get(
        `https://www.electwise.in/api/v2/${politicianSlug}/popular-politicians/`
      )
      .then(({ data }) => {
        setPoliticianData(data);
        console.log(data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getPoliticianData(window.location.pathname.split("/").pop());
  }, []);

  return (
    <div>
      <div className="w-auto ">
        <section className="max-w-5xl flex-shrink-0 h-auto mx-auto  sm:px-6 bg-white shadow-lg lg:px-4 pt-0">
          <div className="text-left  border-b w-full">
            <h2 className="text-base font-normal  text-2xl">
              Popular Politicians
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-6 gap-2">
            {politicianData.map((item) => (
              <div className="w-full h-auto  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                <div>
                  <Link href={`politician/${item.slug}`}>
                    <img
                      className="w-36 h-36  md:w-30 md:h-6rem mx-24px  "
                      src={item.photo}
                      alt=""
                      width="320"
                      height="222"
                    />
                  </Link>
                </div>
                <div className="title-card text-base ">
                  <p className="text-l  w-36 text-white font-normal mb-2">
                    {item.name}
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

export default Popular;
