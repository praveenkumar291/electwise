import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { MdOutlineMail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";

const NavBar = () => {
  return (
    <div>
      <div className="flex flex-col fixed min-w-full">
        <div className=" overflow-x-auto lg:-mx-8  ">
          <div className=" align-middle inline-block min-w-full  lg:px-8   ">
            <div className="shadow overflow-hidden border-gray-200 sm:-l ">
              <table className="min-w-full divide-y divide-white  z-50">
                <thead className="bg-gray-50"></thead>
                <tbody className="bg-pink-900">
                  <tr>
                    <td className=" py-4 ">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-16"></div>
                        <div className="">
                          <div className="text-xl text-white  text-bold border border-8 border-light-blue-500 ...  flex-auto flex space-x-4">
                            <button
                              className=" flex items-center justify-center rounded-md  text-white"
                              type="submit"
                            >
                              DELHI
                            </button>
                            <div className="flex flex-row col-md-auto  items-center ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className=" flex flex-row col-md-auto px-8 py-6  align-center items-center  width: 200px ">
                      <img
                        className=""
                        src="https://www.electwise.in/static/templates/marx/img/logo1.png"
                      />
                    </td>
                    <td className=" text-left text-l text-white font-bold leading-normal pl-0 pr-0 w-24 ">
                      <ul className=" flex justify-between">
                        <li>
                          <ImFacebook />
                        </li>
                        <li>
                          <AiOutlineTwitter />
                        </li>
                        <li>
                          {" "}
                          <BsInstagram />
                        </li>
                        <li>
                          <SiLinkedin />
                        </li>
                        <li>
                          <BsYoutube />
                        </li>
                        <li>
                          <MdOutlineMail />
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
