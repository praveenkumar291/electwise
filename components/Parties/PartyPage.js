import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineTwitter, AiOutlineWifi } from "react-icons/ai";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaWikipediaW } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";

const PartyPage = () => {
  const [partyData, setPartyData] = useState({});
  // const [intialvalue, setIntialvalue] = useState("delhi");
  const [selectedTab, setSelectedTab] = useState(0);
  // const [poledata,setPoleData] = useState({});
  console.log(selectedTab);

  const getPartyData = (partySlug) => {
    axios
      .get(`https://www.electwise.in/api/v2/parties/${partySlug}/`)
      .then(({ data }) => {
        setPartyData(data);

        console.log(
          partyData?.election_history[0].states[selectedTab],
          "electionStates"
        );
        console.log(data,"praveen");
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getPartyData(window.location.pathname.split("/").pop());
  }, []);








  return (
    <div className="container px-4 p-4 mx-auto flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className=" grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2   pb-10 ">
        <div className="">
          <div className=" p-2   w-full max-w-screen-md w- auto  sm:p-4 h-auto sm:h-48  shadow-lg flex flex-col sm:flex-row select-none">
            <div className="sm:h-full sm:w-36 rounded-xl bg-gray-100 bg-center bg-cover  ">
              <img src={partyData.logo} />
            </div>
            <div className="flex sm:flex-1 flex-col gap-2 p-1">
              <h1 className="text-lg sm:text-xl font-semibold  text-gray-800">
                {partyData.name}
              </h1>
              <p className="text-black-500 flex  sm:text-base line-clamp-3 ">
                <Link href={`${partyData.facebook}`}>
                  <i className="p-2">
                    <ImFacebook />
                  </i>
                </Link>
                <Link href={`${partyData.twitter}`}>
                  <i className="p-2">
                    <AiOutlineTwitter />
                  </i>
                </Link>
                <Link href={`${partyData.wiki}`}>
                  <i className="p-2">
                    <FaWikipediaW />
                  </i>
                </Link>
                <Link href={`${partyData.instagram}`}>
                  <i className="p-2">
                    <BsInstagram />
                  </i>
                </Link>
                <Link href={`${partyData.website}`}>
                  <i className="p-2">
                    <AiOutlineWifi />
                  </i>
                </Link>
                <Link href={`${partyData.youtube}`}>
                  <li className="p-2">
                    <BsYoutube />
                  </li>
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-white p-1  flex max-w-6xl sm:w-full sm:p-4 mt-2.5 h-auto  shadow-lg flex flex-col sm:flex-row  select-none ">
            <div className="text-left   w-full">
              <h2 className="text-base font-normal border-b text-xl">
                Election History
              </h2>
              <div className=" flex flex-wrap list-none border-b w-full sm:w-full ">
                {partyData?.election_history &&
                  partyData?.election_history[0]?.states.map((a, index) => {
                    return (
                      <li
                        onClick={(e) => setSelectedTab(index)}
                        className="city_names"
                      >
                        {a.state.name}
                      </li>
                    );
                  })}
              </div>
              <div className=" inline-block   overflow-hidden   pt-1 rounded-bl-lg rounded-br-lg">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <td>Election</td>
                      <td>Seatsn Contested total</td>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td className="px-1 pt-0 whitespace-no-wrap  border-gray-500">
                        <div className="flex items-center ">
                          <div className="">
                            {partyData?.election_history &&
                              partyData?.election_history[0].states[
                                selectedTab
                              ].elections.map((i, index) => {
                                return (
                                  <div className="text-sm leading-9 text-gray-800mt-0">
                                    {i.name}
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </td>

                      {partyData?.election_history &&
                        partyData?.election_history[0].states[
                          selectedTab
                        ].elections.map((i, index) => {
                          return i.seats.map((item) => {
                            return (
                              <>
                                <div class="flex justify-between border-t text-sm font-normal space-x-4">
                                  <div class="px-1 flex   btext-left text-sm leading-9 text-blue-500 tracking-wider">
                                    <span>{item.seats_won}</span>
                                  </div>
                                  <div className="px-1    text-left text-sm leading-9 text-blue-500 tracking-wider">
                                    <span>{item.contested_seats}</span>
                                  </div>
                                  <div class="px-1  text-left text-sm leading-9 text-blue-500 tracking-wider">
                                    <span>{item.total_seats}</span>
                                  </div>
                                </div>
                                {}
                              </>
                            );
                          });
                        })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="bg-white p-2 w-full max-w-5xl sm:w-full sm:p-4 mt-2.5 h-auto w-auto shadow-lg flex flex-col sm:flex-col  select-none">
            <h2 className="text-base font-normal  border-b text-xl">President</h2>
            {partyData?.presidents?.map((party) => (
              <div className="text-left h-auto  w-full">
                <h2 className="text-base font-normal  border-b text-xl"></h2>
                <p className="text-gray-500   h-auto sm:text-base line-clamp-3 ">
                  {party?.person?.name}-{party?.timeline}
                </p>
              </div>
            ))}
          </div>{" "}
          <div className="bg-white p-2 w-full max-w-6xl sm:w-full sm:p-4 mt-2.5 h-auto w-auto shadow-lg flex flex-col sm:flex-row  select-none">
            <div className="text-left   w-full">
              <h2 className="text-base font-noraml  border-b text-xl">
                Party President
              </h2>
              <p className="text-gray-500 flex leading-9   line-clamp-3 ">
                {partyData?.founder?.name}
              </p>
              <p className="text-gray-500 flex  leading-9 line-clamp-3 ">
                Founded: {partyData.founded}
              </p>
            </div>
          </div>{" "}
        </div>
        <div>
          <div className="w-auto ">
            <section className="max-w-md flex-shrink-0 h-auto mx-auto  sm:px-6 bg-white shadow-lg lg:px-4 pt-0 ">
              <div className="text-left  border-b mt-1.5 w-full">
                <h2 className="text-base font-normal  border-b text-xl">Party Info</h2>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
                <div className="w-full   sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                  <div className=" ">
                    <Link href={`${partyData?.founder?.slug}`}>
                      <img
                        className="object-center object-cover rounded-full h-28 w-28 "
                        src={partyData?.founder?.photo}
                        alt=""
                        width="320"
                        height="222"
                      />
                    </Link>
                  </div>

                  <div className="text-center w-32 visible ">
                    <p className="text-s text-black font-normal mb-2">
                      {partyData?.founder?.name}
                    </p>
                    <p className="text-xs text-gray-400 font-normal">Founder</p>
                  </div>
                </div>

                {partyData?.presidents?.map((i) => {
                  return (
                    <>
                      {i.active ? (
                        <>
                          <div className="w-full   sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                            <div className="mt-0">
                              <Link href="rahul">
                                <img
                                  className="object-center object-cover rounded-full h-28 w-28"
                                  src={i.person.photo}
                                  alt=""
                                  width="320"
                                  height="222"
                                />
                              </Link>
                            </div>
                            <div className="text-center w-36 ">
                              <p className="text-l text-black font-normal mb-2">
                                {" "}
                                {i.person.name}
                              </p>
                              <p className="text-xs text-gray-400 font-normal">
                                President
                              </p>
                            </div>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  );
                })}

               
              </div>
            </section>
          </div>

          <div className="max-w-md flex-shrink-0 h-auto mx-auto  sm:px-6 bg-white shadow-lg lg:px-4 pt-0 mt-9">
            <div className="text-left  w-full">
              <h2 className="text-base font-normal  border-b text-xl">
                Election Symbol
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1">
                <div class="w-full rounded-none sahdow-lg overflow-hidden flex flex-row justify-center items-center flex">
                  <img src={partyData.logo} alt="" width="150" height="150" />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-md flex-shrink-0 h-auto mx-auto  sm:px-6 bg-white shadow-lg lg:px-4 pt-0 mt-9">
            <div className="text-left   w-full">
              <h2 className="text-base font-bold  border-b-2 text-xl">News</h2>
              <p className="text-gray-500 flex py-3 px-4 sm:text-base line-clamp-3 ">
                AP HC squashes SEC order
              </p>

              <p className="text-gray-500 flex py-3 px-4  sm:text-base line-clamp-3 ">
                Hold farm laws or we will, SC to Centre
              </p>

              <p className="text-gray-500 flex  py-3 px-4 sm:text-base line-clamp-3 ">
                AP CM launches 2nd phase of Jagananna Amma Vodi
              </p>
              <p className="text-gray-500 flex  py-3 px-4 sm:text-base line-clamp-3 ">
                Social Sector Investments
              </p>
              <p className="text-gray-500 flex  py-3 px-4 sm:text-base line-clamp-3 ">
                Bowenpally kidnap case: High drama continues
              </p>
              <p className="text-gray-500 flex py-3 px-4  sm:text-base line-clamp-3 ">
                Rajinikanth: Don’t Indulge in protests
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartyPage;
