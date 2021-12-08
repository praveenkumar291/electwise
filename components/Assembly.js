import React from "react";
import Link from "next/link";


const Assembly = () => {
  return (
    <div>
      <div className="w-auto contents ">
        <section className="max-w-5xl flex-shrink-0 h-auto mx-auto  sm:px-6 bg-white shadow-lg lg:px-4 py-12">
          <div className="text-left  border-b-2 w-full">
            <h2 className="text-base font-bold   text-2xl">Assembly</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-full rounded-full sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div className="mb-8">
                <Link href="aravind">
                  <img
                    className="object-center object-cover rounded-full h-32 w-32 "
                    src="https://www.electwise.in/media/images/people/photo/Arvind_Kejriwal.jpg"
                    alt=""
                    width="320"
                    height="222"
                  />
                </Link>
              </div>

              <div className="text-center w-36 ">
                <p className="text-sm text-black font-bold mb-2">
                  Arvind Kejriwal
                </p>
                <p className="text-sm  text-gray-400 font-normal">
                  Chief Minister
                </p>
              </div>
            </div>
            <div className="w-full rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div className="mb-8">
                <Link href="ramvirsingh">
                  <img
                    className="object-center object-cover rounded-full h-32 w-32"
                    src="https://www.electwise.in/media/images/people/photo/Ramvir_Singh_Bidhuri.jpg"
                    alt=""
                    width="320"
                    height="222"
                  />
                </Link>
              </div>
              <div className="text-center w-36 ">
                <p className="text-l text-black font-bold mb-2">
                  {" "}
                  Ramvir Singh Bidhuri
                </p>
                <p className="text-sm text-gray-400 font-normal">
                  Opposition Leader
                </p>
              </div>
            </div>
            <div className="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div className="mb-8">
                <Link href="ramniwas">
                  <img
                    className="object-center object-cover rounded-full h-32 w-32 "
                    src="https://www.electwise.in/media/images/people/photo/ram-niwas-goel.jpg"
                    alt=""
                    width="220"
                    height="220"
                  />
                </Link>
              </div>
              <div className="text-center w-36 ">
                <p className="text-l text-black font-bold mb-2">
                  {" "}
                  RamNiwasGoel
                </p>
                <p className="text-sm text-gray-400 font-normal">Speaker</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Assembly;
