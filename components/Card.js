
import React from 'react'

const Card = () => {
  return (
    <div>
      <div className="w-auto ">
        <section className="max-w-5xl h-auto mx-auto px-4 sm:px-6 bg-white shadow-lg lg:px-4 py-12">
          <div className="text-left  border-b-2 w-full">
            <h2 className="text-base font-bold   text-2xl">Popular Politicians</h2>
          </div>
          <div className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-2 lg:grid-rows-3">
            <div className="w-full  sahdow-lg overflow-hidden flex flex-col justify-end">
              <img
                className="w-36 h-4  md:w-30 md:h-auto md:rounded-none rounded-full   "
                src="https://www.electwise.in/media/images/news/2021/01/11/ap-hc.jpeg"
                alt=""
                width="320"
                height="222"
              />

                <p className="md:text-right  text-s text-gray-400 font-normal">
                  Opposition Leader
                </p>

            </div>

            <div className="w-full rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  className="w-36 h-25 md:w-30 md:h-auto md:rounded-none rounded-full  "
                  src="https://www.electwise.in/media/images/news/2021/01/11/sc-disappointed-with-govern.jpg"
                  alt=""
                  width="320"
                  height="222"
                />
                <p className="img_content">
                  Hold farm laws or we will, SC to Centre
                </p>
              </div>
              {/* <div className="text-right  ">
                <p className="text-l text-black font-bold mb-2">
                  {" "}
                  Ramvir Singh Bidhuri
                </p>
                <p className="text-base text-s text-gray-400 font-normal">
                  Opposition Leader
                </p>
              </div> */}
            </div>
            <div className="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  className="w-36 h-25 md:w-30 md:h-auto md:rounded-none rounded-full  "
                  src="https://www.electwise.in/media/images/news/2021/01/11/AP-CM-launches-2nd-phase-o.jpg"
                  alt=""
                  width="320"
                  height="222"
                />
                <p className="img_content">
                  AP CM launches 2nd phase of Jagananna Amma Vodi
                </p>
              </div>
              {/* <div className="text-center w-36 ">
                <p className="text-l text-black font-bold mb-2"> Ram Niwas Goel</p>
                <p className="text-base text-gray-400 font-normal">Speaker</p>
              </div> */}
            </div>
            <div className="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  className="w-36 h-25 md:w-30 md:h-auto md:rounded-none rounded-full"
                  src="https://www.electwise.in/media/images/news/2021/01/11/AP-CM-launches-2nd-phase-o.jpg"
                  alt=""
                  width="320"
                  height="222"
                />
                <p className="img_content">
                  AP CM launches 2nd phase of Jagananna Amma Vodi
                </p>
              </div>
              {/* <div className="text-center w-36 ">
                <p className="text-l text-black font-bold mb-2"> Ram Niwas Goel</p>
                <p className="text-base text-gray-400 font-normal">Speaker</p>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Card
