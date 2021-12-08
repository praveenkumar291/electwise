import React from "react";
import Link from "next/link";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaWikipediaW } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import NavBar from "../components/NavBar";
import MenuBar from "../components/MenuBar";

import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import Social from "../components/Social";

const narendramodi = () => {
  return (
    <div>
      <NavBar />
      <MenuBar />
      <Social />
      <div>
        <SearchBar />
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 pl-10 pr-10 ">
        {/* grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 */}
        <div className="">
          <div className="bg-white p-2   w-full max-w-5xl w- auto sm:w-full sm:p-4 h-auto sm:h-48  shadow-lg flex flex-col sm:flex-row select-none">
            <div className="sm:h-full sm:w-36 rounded-xl bg-gray-100 bg-center bg-cover">
              <img src="https://www.electwise.in/media/images/people/photo/narendra-modi.jpg" />
            </div>
            <div className="flex sm:flex-1 flex-col gap-2 p-1">
              <h1 className="text-lg sm:text-xl font-semibold  text-gray-600">
                Narendra Modi
              </h1>
              <p className="text-gray-500 flex  sm:text-base line-clamp-3 ">
                <Link href="https://www.facebook.com/narendramodi/">
                  <i className="p-2">
                    <ImFacebook />
                  </i>
                </Link>
                <Link href="https://twitter.com/narendramodi">
                  <i className="p-2">
                    <AiOutlineTwitter />
                  </i>
                </Link>
                <Link href="https://en.wikipedia.org/wiki/Narendra_Modi">
                  <i className="p-2">
                    <FaWikipediaW />
                  </i>
                </Link>
                <Link href="https://www.instagram.com/narendramodi/?hl=en">
                  <i className="p-2">
                    <BsInstagram />
                  </i>
                </Link>
              </p>
              <div className="flex gap-4 mt-auto">
                <button className="flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
                  </svg>
                  <span>556</span>
                </button>
                <button className="flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"></path>
                  </svg>
                  <span>56</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-2 w-full max-w-6xl sm:w-full h-20  mt-2.5  shadow-lg flex flex-col sm:flex-row  select-none">
            <div className="text-left   w-full">
              <h2 className="text-base font-bold  border-b-2 text-xl">Born</h2>
              <p className="text-gray-500 flex  sm:text-base line-clamp-3 ">
                Sept. 17, 1950 in Vadnagar, Mehsana, Gujarat
              </p>
            </div>
          </div>

          <div className="bg-white p-2 w-full max-w-6xl sm:w-full sm:p-4 mt-2.5  h-auto  shadow-lg flex flex-col sm:flex-row  select-none">
            <div className="text-left   w-full">
              <h2 className="text-base font-bold  border-b-2 text-xl">
                Education
              </h2>
              <p className="text-gray-500 flex  sm:text-base line-clamp-3 ">
                M.A. (Pol. Science) Educated at Gujarat University
              </p>
            </div>
          </div>
          <div className="bg-white p-2 w-full max-w-6xl sm:w-full sm:p-4 mt-2.5 h-28  shadow-lg flex flex-col sm:flex-row  select-none">
            <div className="text-left   w-full">
              <h2 className="text-base font-bold  border-b-2 text-xl">
                Government Positions Held
              </h2>
              <p className="text-gray-500 flex  sm:text-base line-clamp-3 ">
                Prime Minister of India (Present)
              </p>
              <p className="text-gray-500 flex  sm:text-base line-clamp-3 ">
                Prime Minister of India
              </p>
            </div>
          </div>
          <div className="bg-white p-2 w-full max-w-6xl sm:w-full sm:p-4 mt-2.5 h-auto w-auto shadow-lg flex flex-col sm:flex-row  select-none">
            <div className="text-left   w-full">
              <h2 className="text-base font-bold  border-b-2 text-xl">
                Party Positions Held
              </h2>
              <p className="text-gray-500 flex  sm:text-base line-clamp-3 ">
                Aam Aadmi Party - President
              </p>
            </div>
          </div>
          <div className="bg-white p-2 w-full max-w-6xl sm:w-full sm:p-4 mt-2.5 h-auto w-auto shadow-lg flex flex-col sm:flex-row  select-none">
            <div className="text-left   w-auto">
              <h2 className="text-base font-bold  border-b-2 text-l">
                Election History
              </h2>
              <p className="text-gray-500 flex  w-auto sm:text-base line-clamp-3 ">
                Delhi - 2020 - New Delhi (Delhi - New Delhi - Assembly) Delhi -
                2015 - New Delhi (Delhi - New Delhi - Assembly) Lok Sabha - 2014
                - Varanasi (Uttar Pradesh - None - Lok Sabha) Delhi - 2013 - New
                Delhi (Delhi - New Delhi - Assembly)
              </p>
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
                    <tr>
                      <td className="w-1/12 text-left  px-1">Varanasi</td>
                      <td className="w-1/4text-left  px-1">Bjp</td>
                      <td className="w-1/12 text-left px-1">Won</td>
                      <td className="w-1/12 text-left  px-1">1</td>
                      <td className="w-1/12 text-left  px-1">674,664</td>
                      <td className="w-1/12 text-left px-1"></td>
                      <td className="w-1/12 text-left  px-1">371,784</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="w-1/12 text-left  px-1 ">New</td>
                      <td className="w-1/12 text-left  px-1">AAP</td>
                      <td className="w-1/12 text-left  px-1 ">Won</td>
                      <td className="w-1/12 text-left  px-1 "></td>
                      <td className="w-1/12 text-left  px-1 "></td>
                      <td className="w-1/12 text-left  px-1 "></td>
                      <td className="w-1/12 text-left px-1">31,583</td>
                    </tr>
                    <tr>
                      <td className="w-1/12 text-left  px-1">Varanasi</td>
                      <td className="w-1/12 text-left  px-1"> AAP</td>
                      <td className="w-1/12  text-left  px-1"></td>
                      <td className=" w-1/12 text-left  px-1"></td>
                      <td className=" w-1/12 text-left px-1"></td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="w-1/12 text-left px-1">New</td>
                      <td className="w-1/12 text-left  px-1">AAP</td>
                      <td className="w-1/12 text-left  px-1">Won</td>
                      <td className="w-1/12 text-left  px-1"></td>
                      <td className="w-1/12 text-left  px-1"></td>
                      <td className=" w-1/12text-left  px-1"></td>
                      <td className="w-1/12 text-left  px-1">25,864</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="bg-white p-2  max-w-6xl sm:w-full sm:p-4 mt-2.5 h-auto  shadow-lg flex flex-col sm:flex-row  select-none ">
            <div className="text-left   w-full">
              <h2 className="text-base font-bold  border-b-2 text-xl">
                Assets
              </h2>
              <div className=" flex list-none border-b-2">
                <li>All</li>
                <li>self</li>
                <li>Spouse</li>
                <li>Dependants</li>
              </div>
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
                    <tr>
                      <td className="px-1 pt-0 whitespace-no-wrap border-b border-gray-500">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm leading-5 text-gray-800">
                              2020
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-1 pt-0 whitespace-no-wrap border-b border-gray-500">
                        <div className="text-sm leading-5 text-blue-900">
                          3.4 Crores
                        </div>
                      </td>
                      <td className="px-1 pt-0 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                        -
                      </td>
                      <td className="px-1 pt-0 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                        3.4 Crores
                      </td>
                    </tr>
                    <tr>
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
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white  p-11  max-w-lg  mt-2.5  w-60 h-auto  w-auto shadow-lg flex flex-col sm:flex-row  select-none">
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
      <Footer />
    </div>
  );
};

export default narendramodi;
