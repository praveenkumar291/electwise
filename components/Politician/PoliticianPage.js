import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaWikipediaW } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";

export default function PoliticianPage() {
  const [politicianData, setPoliticianData] = useState({});
  const [news, setNews] = useState([]);
  const [party_roles, setParty_Roles] = useState([]);
  const [party_memberships,setParty_MemberShips] = useState([]);
  const [election_history, setElection_History] = useState([]);
  const [assets, setAssets] = useState([]);
  const [data, setData] = useState([]);
  const [relatives, setRelatives] = useState([]);
  const getPoliticianData = (politicianSlug) => {
    axios
      .get(`https://www.electwise.in/api/v2/politicians/${politicianSlug}/`)
      .then(({ data }) => {
        setPoliticianData(data);
        setNews(data.news);
        // console.log(data.news)
        setParty_Roles(data.party_roles);
        // console.log(data.party_roles.map((a)=>a.party.name))
        setParty_MemberShips(data.party_memberships)
        // console.log(data.party_memberships);
        setElection_History(data.election_history);

        // console.log(data.election_history);
        setAssets(data.assets)

        // console.log(data.assets.map((a) => a).map((b)=> b.assets).map((c)=>c.election));
        // setData(data.assets.map((a) => a.map((b) => b)))
        setRelatives(data.relatives);
        console.log(data.relatives);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getPoliticianData(window.location.pathname.split("/").pop());
  }, []);

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 pl-10 pr-10 ">
      <div className="">
        <div className="bg-white p-2   w-full max-w-5xl w- auto sm:w-full sm:p-4 h-auto sm:h-48  shadow-lg flex flex-col sm:flex-row select-none">
          <div className="sm:h-full sm:w-36 rounded-xl bg-gray-100 bg-center bg-cover">
            <img src={politicianData.photo} />
          </div>
          <div className="flex sm:flex-1 flex-col gap-2 p-1">
            <h1 className="text-lg sm:text-xl font-semibold  text-gray-600">
              {politicianData.name}
            </h1>
            <p className="text-gray-500 flex  sm:text-base line-clamp-3 ">
              {politicianData.facebook && (
                <Link href={` ${politicianData.facebook}`}>
                  <i className="p-2">
                    <ImFacebook />
                  </i>
                </Link>
              )}
              {politicianData.twitter && (
                <Link href={`${politicianData.twitter}`}>
                  <i className="p-2">
                    <AiOutlineTwitter />
                  </i>
                </Link>
              )}
              {politicianData.wiki && (
                <Link href={`${politicianData.wiki}`}>
                  <i className="p-2">
                    <FaWikipediaW />
                  </i>
                </Link>
              )}
              {politicianData.instagram && (
                <Link href={`${politicianData.instagram}`}>
                  <i className="p-2">
                    <BsInstagram />
                  </i>
                </Link>
              )}
            </p>
          </div>
        </div>

        <div className="bg-white p-2 w-full max-w-6xl sm:w-full h-20  mt-2.5  shadow-lg flex flex-col sm:flex-row  select-none">
          <div className="text-left   w-full">
            <h2 className="text-base font-bold  border-b-2 text-xl">Born</h2>
            <p className="text-gray-500 flex  sm:text-base line-clamp-3 ">
              {politicianData.dob} in {politicianData.pob},
              {politicianData.pob_district},{politicianData.pob_state}
            </p>
          </div>
        </div>

        <div className="bg-white p-2 w-full max-w-6xl sm:w-full sm:p-4 mt-2.5  h-auto  shadow-lg flex flex-col sm:flex-row  select-none">
          <div className="text-left   w-full">
            <h2 className="text-base font-bold  border-b-2 text-xl">
              Education
            </h2>
            <p className="text-gray-500 flex  sm:text-base line-clamp-3 ">
              {politicianData.education}
            </p>
          </div>
        </div>
        <div className="bg-white p-2 w-full max-w-6xl sm:w-full sm:p-4 mt-2.5 h-28  shadow-lg flex flex-col sm:flex-row  select-none">
          <div className="text-left   w-full">
            <h2 className="text-base font-bold  border-b-2 text-xl">
              Government Positions Held
            </h2>
            {party_roles.map((data) => (
              <p className="text-gray-500 flex  sm:text-base line-clamp-1 ">
                {data.party.name}-{data.party.abbreviation}
              </p>
            ))}
          </div>
        </div>
        <div className="bg-white p-2 w-full max-w-6xl sm:w-full sm:p-4 mt-2.5 h-auto w-auto shadow-lg flex flex-col sm:flex-row  select-none">
          <div className="text-left   w-full">
            <h2 className="text-base font-bold  border-b-2 text-xl">
              Party Positions Held
            </h2>
            {party_memberships.map((data) => (
              <p className="text-gray-500 flex  sm:text-base line-clamp-3 ">
                {/* Aam Aadmi Party - President */}
                {data.party.name}-({data.timeline})
              </p>
            ))}
          </div>
        </div>
        <div className="bg-white p-2 w-full max-w-6xl sm:w-full sm:p-4 mt-2.5 h-auto w-auto shadow-lg flex flex-col sm:flex-row  select-none">
          <div className="text-left   w-auto">
            <h2 className="text-base font-bold  border-b-2 text-l">
              Election History
            </h2>
            {/* <p className="text-gray-500 flex  w-auto sm:text-base line-clamp-3 ">
              Delhi - 2020 - New Delhi (Delhi - New Delhi - Assembly) Delhi -
              2015 - New Delhi (Delhi - New Delhi - Assembly) Lok Sabha - 2014 -
              Varanasi (Uttar Pradesh - None - Lok Sabha) Delhi - 2013 - New
              Delhi (Delhi - New Delhi - Assembly)
            </p> */}
            <div className="inline-block w-auto flex overflow-hidden   pt-1 rounded-bl-lg rounded-br-lg">
              <table className="min-w-full  ">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-1 border-b-2 border-gray-300 text-left text-sm leading-6 text-blue-500">
                      Election
                    </th>

                    <th className="px-1  border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                      Party
                    </th>
                    <th className=" px-1  border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                      Result
                    </th>
                    <th className=" px-1  border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                      Position
                    </th>
                    <th className=" px-1  border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                      Votes Polled
                    </th>
                    <th className="px-1  border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                      Votes polled
                    </th>
                    <th className="px-1  border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                      Margin
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {election_history.map((data) => (
                    <tr>
                      <td className="w-1/12 text-left  px-1">
                        {data.election_constituency.constituency.name}-({" "}
                        {data.election_constituency.election.election_type}
                        {data.election_constituency.election.name})
                      </td>
                      <td className="w-1/4text-left  px-1">
                        {data.party.abbreviation}
                      </td>
                      <td className="w-1/12 text-left px-1">{data.result}</td>
                      <td className="w-1/12 text-left  px-1">
                        {data.position}
                      </td>
                      <td className="w-1/12 text-left  px-1">
                        {data.total_votes}
                      </td>
                      <td className="w-1/12 text-left px-1">
                        {data.votes_polled_percentage}
                      </td>
                      <td className="w-1/12 text-left  px-1">{data.margin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="bg-white p-2  max-w-6xl sm:w-full sm:p-4 mt-2.5 h-auto  shadow-lg flex flex-col sm:flex-row  select-none ">
          <div className="text-left   w-full">
            <h2 className="text-base font-bold  border-b-2 text-xl">Assets</h2>
            {assets.map((data, i) => (
              <div className="  inline-flex list-none border-b-2">
                <li>{data.name}</li>
              </div>
            ))}

            <div className=" inline-block min-w-full  overflow-hidden   pt-1 rounded-bl-lg rounded-br-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-1 border-b-2 border-gray-300 text-left text-sm leading-6 text-blue-500 ">
                      Election
                    </th>
                    <th className="px-1  border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                      Assets
                    </th>
                    <th className="px-1  border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                      Liabilities
                    </th>
                    <th className="px-1  border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                      Net Assets
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {assets.map((a, i) => (
                    <tr>
                      <td className="px-1 pt-0 whitespace-no-wrap border-b border-gray-500">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm leading-5 text-gray-800">
                              {a.election}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-1 pt-0 whitespace-no-wrap border-b border-gray-500">
                        <div className="text-sm leading-5 text-blue-900">
                          {a.assets.assets}
                        </div>
                      </td>
                      <td className="px-1 pt-0 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5"></td>
                      <td className="px-1 pt-0 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                        {a.assets.net_assets}
                      </td>
                    </tr>
                  ))}

                  {/* <tr>
                    <td className="px-1 pt-0 whitespace-no-wrap border-b border-gray-500">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm leading-5 text-gray-800">
                            2015
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-1 pt-0 whitespace-no-wrap border-b border-gray-500">
                      <div className="text-sm leading-5 text-blue-900">
                        2.1 Crores
                      </div>
                    </td>
                    <td className="px-1 pt-0 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      41 Lakhs
                    </td>
                    <td className="px-1 pt-0 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      1.7 Crores
                    </td>
                  </tr>
                  <tr>
                    <td className="px-1 pt-0 whitespace-no-wrap border-b border-gray-500">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm leading-5 text-gray-800">
                            2014
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-1 pt-0 whitespace-no-wrap border-b border-gray-500">
                      <div className="text-sm leading-5 text-blue-900">
                        2.1 Crores
                      </div>
                    </td>
                    <td className="px-1 pt-0 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      41 Lakhs
                    </td>
                    <td className="px-1 pt-0 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      1.7 Crores
                    </td>
                  </tr>
                  <tr>
                    <td className="px-1 pt-0 whitespace-no-wrap border-b border-gray-500">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm leading-5 text-gray-800">
                            2013
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-1 pt-0 whitespace-no-wrap border-b border-gray-500">
                      <div className="text-sm leading-5 text-blue-900">
                        2.1 Crores
                      </div>
                    </td>
                    <td className="px-1 pt-0 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      41.2 Lakhs
                    </td>
                    <td className="px-1 pt-0 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      1.7 Crores
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" ">
          <section className="w-auto h-auto mx-auto px-4 sm:px-6 bg-white shadow-lg lg:px-4 py-12">
            <div className="text-left  border-b-2 w-full">
              <h2 className="text-base font-bold   text-2xl">Relatives</h2>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
              {relatives.map((rel) => (
                <div className="w-full rounded-full sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                  <div className="mb-8">
                    <Link href={rel.to_person.slug}>
                      <img
                        className="object-center object-cover rounded-full h-32 w-32 "
                        src={rel.to_person.photo}
                        alt=""
                        width="320"
                        height="222"
                      />
                    </Link>
                  </div>

                  <div className="text-center w-40 ">
                    <p className="text-l text-black font-bold mb-2">
                      {rel.to_person.name}
                    </p>
                    <p className="text-l  text-gray-400 font-normal">
                      {rel.relationship}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="bg-white  p-11  min-w-max  mt-2.5  w-60 h-auto  shadow-lg flex flex-col sm:flex-row  select-none">
          <div className="text-left   w-full">
            <h2 className="text-base font-bold  border-b-2 text-xl">News</h2>
            {news.map((data) => (
              <p className="text-gray-500 flex py-3 px-4 sm:text-base line-clamp-3 ">
                {data.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
