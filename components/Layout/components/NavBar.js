import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineDown, AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { MdOutlineMail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
import { stateList } from "./constants";
import Model from "./Model";

const NavBar = () => {


  const router = useRouter();
  const [openModel, setOpenModel] = useState(false);

  const getStateName = () => {
    const slug = router.asPath.split("/")[1];
    return stateList[slug];
  };

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
                        <div className="flex-shrink-0 h-8 w-40"></div>

                        <div className="text-xl text-white  text-bold border border-8 border-light-blue-500 ...   flex space-x-4">
                          <button
                            className=" flex items-center justify-center rounded-md  text-white"
                            type="submit"
                            onClick={() => {
                              setOpenModel(true);
                            }}
                          >
                            {getStateName() || "select State"}
                          </button>
                          <div
                            className="flex items-center justify-center "
                            onClick={() => {
                              setOpenModel(true);
                            }}
                          >
                            <AiOutlineDown />
                          </div>
                        </div>
                        {openModel && (
                          <Model closeModel={setOpenModel} />
                        )}
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
