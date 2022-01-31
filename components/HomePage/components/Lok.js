import Link from "next/link";
import React from "react";

const Lok= () => {
  return (
    <div>
      <div className="w-auto ">
        <section className="max-w-lg flex-shrink-0 w-auto h-auto mx-auto  sm:px-6 bg-white shadow-lg lg:px-4 pt-0">
          <div className="text-left  border-b mt-1.5 w-full">
            <h2 className="text-base font-normal   text-2xl">LokSabha</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
            <div className="w-full   sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div className="mb-8">
                <Link href="narendramodi">
                  <img
                    className="object-center object-cover rounded-full h-24 w-24 "
                    src="https://www.electwise.in/media/images/people/photo/narendra-modi.jpg"
                    alt=""
                    width="320"
                    height="222"
                  />
                </Link>
              </div>

              <div className="text-center w-40 ">
                <p className="text-l text-black font-normal mb-2">
                  NarendraModi{" "}
                </p>
                <p className="text-xs text-gray-400 font-normal">
                  PrimeMinister
                </p>
              </div>
            </div>
            <div className="w-full   sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div className="mb-8">
                <Link href="rahul">
                  <img
                    className="object-center object-cover rounded-full h-24 w-24"
                    src="https://www.electwise.in/media/images/people/photo/rahul-gandhi.jpg"
                    alt=""
                    width="320"
                    height="222"
                  />
                </Link>
              </div>
              <div className="text-center w-36 ">
                <p className="text-l text-black font-normal mb-2">
                  {" "}
                  Rahul Gandhi
                </p>
                <p className="text-xs text-gray-400 font-normal">
                  Opposition Leader
                </p>
              </div>
            </div>
            <div className="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div className="mb-8">
                <Link href="ombirla">
                  <img
                    className="object-center object-cover rounded-full h-24 w-24 "
                    src="https://www.electwise.in/media/images/people/photo/Om_Birla_LqpvjNr.jpg"
                    alt=""
                    width="220"
                    height="220"
                  />
                </Link>
              </div>
              <div className="text-center w-36 ">
                <p className="text-l text-black font-normal mb-2"> Om Birla </p>
                <p className="text-base text-gray-400 font-normal">Speaker</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Lok;
