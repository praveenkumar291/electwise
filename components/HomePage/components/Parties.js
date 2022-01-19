import Link from "next/link";
import React from "react";

const Parties = () => {
  return (
    <div>
      <div className="w-auto ">
        <section className="max-w-6xl flex-shrink-0 h-auto mx-auto px-4 sm:px-6 bg-white shadow-lg lg:px-4 py-12 my-8">
          <div className="text-left  border-b-2 w-full">
            <h2 className="text-base font-bold   text-2xl">Popular Parties</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6">
            <div className="w-full sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div className="card_popular_container">
                {" "}
                <Link href="aapparty">
                  <img
                    className="object-center object-cover rounded-full h-30 w-32 "
                    src="https://www.electwise.in/media/images/parties/logo/aam-aadmi-party.jpeg"
                    alt=""
                    width="320"
                    height="222"
                  />
                </Link>
              </div>

              <div className="text-center ">
                <p className="text-l text-black font-bold mb-2"> AAP </p>
              </div>
            </div>
            <div className="w-full rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div className="card_popular_container_2">
                <Link href="bjpparty">
                  <img
                    className="w-32 h-30 md:w-30 md:h-6rem md:rounded rounded-full mx-auto "
                    src="https://www.electwise.in/media/images/parties/logo/bharatiya-janata-party.jpg"
                    alt=""
                    width="320"
                    height="222"
                  />
                </Link>
              </div>
              <div className="text-center ">
                <p className="text-l w-36 text-black font-bold mb-2">BJP</p>
              </div>
            </div>
            <div className="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div className="card_popular_container_2">
                <Link href="inc">
                  <img
                    className="w-32 h-38  md:w-30 md:h-6rem md:rounded rounded-full mx-auto "
                    src="https://www.electwise.in/media/images/parties/logo/indian-national-congress.png"
                    alt=""
                    width="220"
                    height="220"
                  />
                </Link>
              </div>
              <div className="text-center ">
                <p className="text-l w-36 text-black font-bold mb-2">INC</p>
              </div>
            </div>
            <div className="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div className="card_popular_container_2">
                <Link href="aitc">
                  <img
                    className="w-32 h-38  md:w-30 md:h-6rem md:rounded rounded-full mx-auto "
                    src="https://www.electwise.in/media/images/parties/logo/all-india-trinamool-congress.png"
                    alt=""
                    width="220"
                    height="220"
                  />
                </Link>
              </div>

              <div className="text-center ">
                <p className="text-l w-36 text-black font-bold mb-2">AITC</p>
              </div>
            </div>
            <div className="w-full rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div className="card_popular_container_2">
                <img
                  className="w-32 h-38  md:w-30 md:h-6rem md:rounded rounded-full mx-auto "
                  src="https://www.electwise.in/media/images/parties/logo/bahujan-samaj-party.png"
                  alt=""
                  width="220"
                  height="220"
                />
              </div>
              <div className="text-center  ">
                <p className="text-l w-36 text-black font-bold mb-2">BSP</p>
              </div>
            </div>
            <div className="w-full rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div className="card_popular_container_2">
                <img
                  className="w-32 h-38  md:w-30 md:h-6rem md:rounded rounded-full mx-auto "
                  src="https://www.electwise.in/media/images/parties/logo/samajwadi-party.jpg"
                  alt=""
                  width="220"
                  height="220"
                />
              </div>
              <div className="text-center ">
                <p className="text-l w-36 text-black font-bold mb-2">SP</p>
              </div>
            </div>
            <div className="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  className="w-32 h-38  md:w-30 md:h-6rem md:rounded rounded-full mx-auto "
                  src="https://www.electwise.in/media/images/parties/logo/all-india-anna-dravida-munnetra-kazhagam.png"
                  alt=""
                  width="220"
                  height="220"
                />
              </div>
              <div className="text-center ">
                <p className="text-l w-36 text-black font-bold mb-2">AIADMK</p>
              </div>
            </div>
            <div className="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  className="w-32 h-38  md:w-30 md:h-6rem md:rounded rounded-full mx-auto "
                  src="https://www.electwise.in/media/images/parties/logo/nationalist-congress-party.png"
                  alt=""
                  width="220"
                  height="220"
                />
              </div>
              <div className="text-center ">
                <p className="text-l w-36 text-black font-bold mb-2">NCP</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Parties;
