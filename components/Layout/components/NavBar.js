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
      <div className="flex flex-col fixed min-w-full z-40">
        <div className=" overflow-x-auto lg:-mx-8  ">
          <div className=" align-middle inline-block min-w-full  lg:px-8   ">
            <div className="shadow overflow-hidden border-gray-200 sm:-l ">
              <table className="min-w-full divide-y divide-white ">

                <tbody className="bg-pink-900">
                  <tr>
                    <td className=" py-4 ">
                      <div className="flex items-center">
                        <div className=" state_button"></div>

                        <div className="text-xs text-white  text-normal border border-b border-light-blue-500 ...   flex flex-row">
                          <button
                            className=" flex items-center justify-center rounded-s  text-white"
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
                    <td className=" flex flex-row  md:flex-col  px-8 py-6  align-center items-center  width: 200px  header-im">
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
