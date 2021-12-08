import React from "react";
import Link from "next/link";

import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter, AiOutlineWifi } from "react-icons/ai";
import { FaWikipediaW } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import NavBar from "../components/NavBar";
import MenuBar from "../components/MenuBar";

import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import Social from "../components/Social";
import Layout from "../components/Layout";

const aitc = () => {
  return (
    <Layout>
      <div>
        <MenuBar />
        <Social />
        <div>
          <SearchBar />
        </div>

        <div className=" grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 pl-10 pr-10 pb-10 ">
          {/* grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 */}
          <div className="">
            <div className="bg-green-300 p-2   w-full max-w-5xl w- auto sm:w-full sm:p-4 h-auto sm:h-48  shadow-lg flex flex-col sm:flex-row select-none">
              <div className="sm:h-full sm:w-36 rounded-xl bg-gray-100 bg-center bg-cover">
                <img src="https://www.electwise.in/media/images/parties/logo/all-india-trinamool-congress.png" />
              </div>
              <div className="flex sm:flex-1 flex-col gap-2 p-1">
                <h1 className="text-lg sm:text-xl font-semibold  text-gray-800">
                  All India Trinamool Congress (AITC)
                </h1>
                <p className="text-black-500 flex  sm:text-base line-clamp-3 ">
                  <i className="p-2">
                    <ImFacebook />
                  </i>
                  <i className="p-2">
                    <AiOutlineTwitter />
                  </i>
                  <i className="p-2">
                    <FaWikipediaW />
                  </i>
                  <i className="p-2">
                    <BsInstagram />
                  </i>
                  <i className="p-2">
                    <AiOutlineWifi />
                  </i>
                  <li className="p-2">
                    <BsYoutube />
                  </li>
                </p>
              </div>
            </div>
            {/* <div className="bg-white p-2 w-full max-w-6xl sm:w-full h-20  mt-2.5  shadow-lg flex flex-col sm:flex-row  select-none">
            <div className="text-left   w-full">
              <h2 className="text-base font-bold  border-b-2 text-xl">Born</h2>
              <p className="text-gray-500 flex  sm:text-base line-clamp-3 ">
                July 16, 1968 in Siwani, Hisar, Haryana
              </p>
            </div>
          </div>

          <div className="bg-white p-2 w-full max-w-6xl sm:w-full sm:p-4 mt-2.5  h-auto  shadow-lg flex flex-col sm:flex-row  select-none">
            <div className="text-left   w-full">
              <h2 className="text-base font-bold  border-b-2 text-xl">
                Education
              </h2>
              <p className="text-gray-500 flex  sm:text-base line-clamp-3 ">
                Graduate Professional/B.Tech, Mechnical Engineering, IIT
                Kharagpur,1989
              </p>
            </div>
          </div>
          <div className="bg-white p-2 w-full max-w-6xl sm:w-full sm:p-4 mt-2.5 h-28  shadow-lg flex flex-col sm:flex-row  select-none">
            <div className="text-left   w-full">
              <h2 className="text-base font-bold  border-b-2 text-xl">
                Government Positions Held
              </h2>
              <p className="text-gray-500 flex  sm:text-base line-clamp-3 ">
                Chief Minister of Delhi (Present)
              </p>
              <p className="text-gray-500 flex  sm:text-base line-clamp-3 ">
                Chief Minister of Delhi
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
          </div> */}
            {/* <div className="bg-white p-2 w-full max-w-6xl sm:w-full sm:p-4 mt-2.5 h-auto w-auto shadow-lg flex flex-col sm:flex-row  select-none">
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
                      <th className="px-1  border-b-2 border-gray-300 text-left text-sm leading-9 text-blue-500 tracking-wider">
                        Party
                      </th>
                      <th className=" px-1  border-b-2 border-gray-300 text-left text-sm leading-9 text-blue-500 tracking-wider">
                        Result
                      </th>
                      <th className=" px-1  border-b-2 border-gray-300 text-left text-sm leading-9 text-blue-500 tracking-wider">
                        Position
                      </th>
                      <th className=" px-1  border-b-2 border-gray-300 text-left text-sm leading-9 text-blue-500 tracking-wider">
                        Votes Polled
                      </th>
                      <th className="px-1  border-b-2 border-gray-300 text-left text-sm leading-9 text-blue-500 tracking-wider">
                        Votes polled
                      </th>
                      <th className="px-1  border-b-2 border-gray-300 text-left text-sm leading-9 text-blue-500 tracking-wider">
                        Margin
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="w-1/12 text-left  px-1">New</td>
                      <td className="w-1/4text-left  px-1">AAP</td>
                      <td className="w-1/12 text-left px-1">Won</td>
                      <td className="w-1/12 text-left  px-1">1</td>
                      <td className="w-1/12 text-left  px-1">46,758</td>
                      <td className="w-1/12 text-left px-1"></td>
                      <td className="w-1/12 text-left  px-1">21,697</td>
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
          </div> */}
            <div className="bg-white p-1  flex max-w-6xl sm:w-full sm:p-4 mt-2.5 h-auto  shadow-lg flex flex-col sm:flex-row  select-none ">
              <div className="text-left   w-full">
                <h2 className="text-base font-bold  border-b-2 text-xl">
                  Election History
                </h2>
                <div className=" flex flex-wrap list-none border-b-2 w-full sm:w-full ">
                  <li className="city_names"> Delhi</li>
                  <li className="city_names">Jharkahand</li>
                  <li className="city_names"> Haryana</li>
                  <li className="city_names">Maharastra</li>
                  <li className="city_names">Odisha</li>
                  <li className="city_names">Telangana</li>
                  <li className="city_names">Goa</li>
                  <li className="city_names">Manipur</li>
                  <li className="city_names">Panjub</li>
                  <li className="city_names">TamilNadu</li>
                  <li className="city_names">Bihar</li>
                  <li className="city_names">madhya Pradesh</li>
                  <li className="city_names">Mizoram</li>
                  <li className="city_names">Rajastan</li>
                  <li className="city_names">Chhattisgarh</li>
                  <li className="city_names">Karntaka</li>
                  <li className="city_names">Meghalaya</li>
                  <li className="city_names">Nagalanad</li>
                  <li className="city_names">Tripura</li>
                  <li className="city_names">Gujarat</li>
                  <li className="city_names">Himachal pradesh</li>

                  <li className="city_names">J&k</li>
                  <li className="city_names">AndraPradesh</li>
                  <li className="city_names">ArunachalPradesh</li>
                  <li className="city_names">Rajastan</li>
                  <li className="city_names">Loksabha</li>
                </div>
                <div className=" inline-block min-w-l  overflow-hidden   pt-1 rounded-bl-lg rounded-br-lg">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="px-1 border-b-2 border-gray-300 text-left text-sm leading-9 text-blue-500 ">
                          Election
                        </th>
                        <th className="px-1  border-b-2 border-gray-300 text-left text-sm leading-9 text-blue-500 tracking-wider">
                          Seats Won
                        </th>
                        <th className="px-1  border-b-2 border-gray-300 text-left text-sm leading-9 text-blue-500 tracking-wider">
                          Seats Contested
                        </th>
                        <th className="px-1  border-b-2 border-gray-300 text-left text-sm leading-9 text-blue-500 tracking-wider">
                          Total Seats
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="px-1 pt-0 whitespace-no-wrap border-b border-gray-500">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm leading-9 text-gray-800">
                                2019
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-1 pt-0 whitespace-no-wrap border-b border-gray-500">
                          <div className="text-sm leading-9 text-blue-900">
                            51
                          </div>
                        </td>
                        <td className="px-1 pt-0 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-9">
                          421
                        </td>
                        <td className="px-1 pt-0 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-9">
                          543
                        </td>
                      </tr>
                      <tr>
                        <td className="px-1 pt-0 whitespace-no-wrap border-b border-gray-500">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm leading-9 text-gray-800">
                                2014
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-1 pt-0 whitespace-no-wrap border-b border-gray-500">
                          <div className="text-sm leading-9 text-blue-900">
                            2
                          </div>
                        </td>
                        <td className="px-1 pt-0 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-9">
                          441
                        </td>
                        <td className="px-1 pt-0 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-9">
                          543
                        </td>
                      </tr>
                      <tr>
                        <td className="px-1 pt-0 whitespace-no-wrap border-b border-gray-500">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm leading-9 text-gray-800">
                                2009
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-1 pt-0 whitespace-no-wrap border-b border-gray-500">
                          <div className="text-sm leading-9 text-blue-900">
                            40
                          </div>
                        </td>
                        <td className="px-1 pt-0 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-9">
                          443
                        </td>
                        <td className="px-1 pt-0 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-9">
                          543
                        </td>
                      </tr>
                      <tr>
                        {/* <td className="px-1 pt-0 whitespace-no-wrap border-b border-gray-500">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm leading-9 text-gray-800">
                                2013
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-1 pt-0 whitespace-no-wrap border-b border-gray-500">
                          <div className="text-sm leading-9 text-blue-900">
                            2.1 Crores
                          </div>
                        </td>
                        <td className="px-1 pt-0 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-9">
                          41.2 Lakhs
                        </td>
                        <td className="px-1 pt-0 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-9">
                          1.7 Crores
                        </td> */}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <div className="bg-white p-2 w-full max-w-5xl sm:w-full sm:p-4 mt-2.5 h-auto w-auto shadow-lg flex flex-col sm:flex-row  select-none">
              <div className="text-left   w-full">
                <h2 className="text-base font-bold  border-b-2 text-xl">
                  Party State Presidents
                </h2>
                <p className="text-gray-500 flex  sm:text-base line-clamp-3 ">
                  Subhash Chopra ( - Present)
                </p>
              </div>
            </div>{" "} */}
            <div className="bg-white p-2 w-full max-w-6xl sm:w-full sm:p-4 mt-2.5 h-auto w-auto shadow-lg flex flex-col sm:flex-row  select-none">
              <div className="text-left   w-full">
                <h2 className="text-base font-bold  border-b-2 text-xl">
                  Party Presidents
                </h2>
                <p className="text-gray-500 flex leading-9   line-clamp-3 ">
                  Mamata Banerjee ( - Present)
                </p>
                {/* <p className="text-gray-500 flex  leading-9 line-clamp-3 ">
                  Sonia Gandhi (1998-2017 )
                </p> */}
                {/* <p className="text-gray-500 flex  leading-9 line-clamp-3 ">
                  Gadkari Nitin Jairam (2009-2013 )
                </p>
                <p className="text-gray-500 flex  leading-9 line-clamp-3 ">
                  L.K.ADVANI (2004-2005 )
                </p>
                <p className="text-gray-500 flex  leading-9 line-clamp-3 ">
                  J.P.Nadda ( - Present)
                </p>
                <p className="text-gray-500 flex  leading-9 line-clamp-3 ">
                  Amit Shah (2014 )
                </p> */}
              </div>
            </div>{" "}
          </div>
          <div>
            <div className="max-w-lg ">
              <section className="w-auto h-auto mx-auto max-w-xl px-4 sm:px-6 bg-white shadow-lg lg:px-4 py-12 ">
                <div className="text-left  border-b-2 w-full">
                  <h2 className="text-base font-bold   text-2xl">Party Info</h2>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                  <div className="w-full rounded-full sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div className="mb-8 w-auto">
                      <Link href="narendramodi">
                        <img
                          className="object-center object-cover rounded-full h-32 w-32 "
                          src="https://www.electwise.in/media/images/people/photo/Mamata_Banerjee.jpg"
                          alt=""
                          width="320"
                          height="222"
                        />
                      </Link>
                    </div>

                    <div className="text-center w-40 ">
                      <p className="text-l text-black font-bold mb-2">
                        Mamata Banerjee
                      </p>
                      <p className="text-xs text-gray-400 font-normal">
                        Founder
                      </p>
                    </div>
                  </div>
                  <div className="w-full rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div className="mb-8">
                      <Link href="rahul">
                        <img
                          className="object-center object-cover rounded-full h-32 w-32"
                          src="https://www.electwise.in/media/images/people/photo/Mamata_Banerjee.jpg"
                          alt=""
                          width="320"
                          height="222"
                        />
                      </Link>
                    </div>
                    <div className="text-center w-36 ">
                      <p className="text-l text-black font-bold mb-2">
                        {" "}
                        Mamata Banerjee
                      </p>
                      <p className="text-base text-gray-400 font-normal">
                        State President
                      </p>
                    </div>
                  </div>
                  {/* <div className="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div className="mb-8">
                      <Link href="ombirla">
                        <img
                          className="object-center object-cover rounded-full h-32 w-32 "
                          src="https://www.electwise.in/media/images/people/photo/rahul-gandhi.jpg"
                          alt=""
                          width="220"
                          height="220"
                        />
                      </Link>
                    </div>
                    <div className="text-center w-36 ">
                      <p className="text-l text-black font-bold mb-2">
                        {" "}
                        Rahul Gandhi
                      </p>
                      <p className="text-base text-gray-400 font-normal">
                        President
                      </p>
                    </div>
                  </div> */}
                </div>
              </section>
            </div>

            <div className="bg-white p-2 w-full max-w-lg sm:w-full h-auto  mt-2.5  shadow-lg flex flex-col sm:flex-row  select-none">
              <div className="text-left  w-full">
                <h2 className="text-base font-bold  border-b-2 text-xl">
                  Election Symbol
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1">
                  <div class="w-full rounded-none sahdow-lg overflow-hidden flex flex-row justify-center items-center flex">
                    <img
                      src="https://www.electwise.in/media/images/parties/election-symbols/All_India_Trinamool_Congress_.jpg"
                      alt=""
                      width="220"
                      height="220"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-2 w-full max-w-lg sm:w-full sm:p-4 mt-2.5 h-auto w-auto shadow-lg flex flex-col sm:flex-row  select-none">
              <div className="text-left   w-full">
                <h2 className="text-base font-bold  border-b-2 text-xl">
                  News
                </h2>
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
    </Layout>
  );
};

export default aitc;
