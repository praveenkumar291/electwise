import React from "react";

const Popular = () => {
  return (
    <div>
      <div className="w-auto ">
        <section className="max-w-5xl h-auto mx-auto px-4 sm:px-6 bg-white shadow-lg lg:px-4 py-12">
          <div className="text-left  border-b-2 w-full">
            <h2 className="text-base font-bold   text-2xl">Popular Politicians</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6">
            <div className="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  className="w-36 h-36  md:w-30 md:h-6rem mx-24px  "
                  src="https://www.electwise.in/media/images/people/photo/Arvind_Kejriwal.jpg"
                  alt=""
                  width="320"
                  height="222"
                />
              </div>
              <div className="text-center w-36 text-base bg-gray-700 bg-opacity-50">
                <p className="text-l text-white font-bold mb-2">Arvind Kejriwal</p>
              </div>
            </div>
            <div className="w-full rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div className="card_popular_container">
                <img
                  className="w-36 h-36  md:w-30 md:h-6rem   mx-24px  "
                  src="https://www.electwise.in/media/images/people/photo/narendra-modi.jpg"
                  alt=""
                  width="320"
                  height="222"
                />
              </div>
              <div className="text-center w-36 text-base bg-gray-700 bg-opacity-50">
                <p className="text-l w-36 text-white font-bold mb-2">
                  Narendra Modi
                </p>
              </div>
            </div>
            <div className="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  className="w-36 h-36  md:w-30"
                  src="https://www.electwise.in/media/images/people/photo/rahul-gandhi.jpg"
                  alt=""
                  width="320"
                  height="222"
                />
              </div>
              <div className="text-center text-base bg-gray-700 bg-opacity-50">
                <p className="text-l w-36 text-white font-bold mb-2">
                  Rahul Gandhi
                </p>
              </div>
            </div>
            <div className="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div className="card_popular_container">
                <img
                  className="w-36 h-36  md:w-30 md:h-6rem   mx-24px  "
                  src="https://www.electwise.in/media/images/people/photo/Mamata_Banerjee.jpg"
                  alt=""
                  width="320"
                  height="222"
                />
              </div>

              <div className="text-center text-base bg-gray-700 bg-opacity-50">
                <p className="text-l w-36 text-white font-bold mb-2">
                  MamataBanerjee
                </p>
              </div>
            </div>
            <div className="w-full rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div c>
                <img
                  className="w-36 h-36  md:w-30 md:h-6rem   mx-24px  "
                  src="https://www.electwise.in/media/images/people/photo/Nara_Chandra_Babu_Naidu.jpg"
                  alt=""
                  width="320"
                  height="222"
                />
              </div>
              <div className="text-center text-base bg-gray-700 bg-opacity-50 ">
                <p className="text-l w-36 text-white font-bold mb-2">ChandraBabu</p>
              </div>
            </div>
            <div className="w-full rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  className="w-36 h-36  md:w-30 md:h-6rem   mx-24px  "
                  src="https://www.electwise.in/media/images/people/photo/kalvakuntla-chandrashekar-rao.jpg"
                  alt=""
                  width="320"
                  height="222"
                />
              </div>
              <div className="text-center text-base bg-gray-700 bg-opacity-50">
                <p className="text-l w-36 text-white font-bold mb-2">
                  Chandrashekar
                </p>
              </div>
            </div>
            <div className="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  className="w-36 h-36  md:w-30 md:h-6rem   mx-24px  "
                  src="https://www.electwise.in/media/images/people/photo/Akhilesh_Yadav.jpeg"
                  alt=""
                  width="320"
                  height="222"
                />
              </div>
              <div className="text-center text-base bg-gray-700 bg-opacity-50">
                <p className="text-l w-36 text-white font-bold mb-2">
                  Akhilesh Yadav
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Popular;
