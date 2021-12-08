import React from 'react'
import { Pie } from "react-chartjs-2";


const Graph3 = () => {
   const state = {
     labels: [ "BJP"],
     datasets: [
       {
         label: "Assembly ",
         backgroundColor: [ "rgb(249,125,9)"],
         // cutout:"50%",
         radius: "80",
         rotation: "270",
         circumference: "180",
         borderColor: "",
         borderWidth: "",
         data: [100],
       },
     ],
   };

  return (
    <div>
      <div class=" max-w-5xl">
        <section class="w-72 h-auto  px-4 sm:px-6 bg-white shadow-lg lg:px-4 ">
          <div class="text-left  border-b-2 w-full">
            <h2 class="text-base font-bold   text-2xl">LokSabha</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1">
            <div class="w-full rounded-none sahdow-lg overflow-hidden flex flex-row justify-center items-center flex">
              <div className="">
                <Pie data={state} />
              </div>
            </div>
            {/* <div class="w-full rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-full h-32 w-32"
                  src="https://www.electwise.in/media/images/people/photo/rahul-gandhi.jpg"
                  alt=""
                  width="320"
                  height="222"
                />
              </div>
              <div class="text-center w-36 ">
                <p class="text-l text-black font-bold mb-2"> Rahul Gandhi</p>
                <p class="text-base text-gray-400 font-normal">
                  Opposition Leader
                </p>
              </div>
            </div> */}
            {/* <div class="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-full h-32 w-32 "
                  src="https://www.electwise.in/media/images/people/photo/Om_Birla_LqpvjNr.jpg"
                  alt=""
                  width="220"
                  height="220"
                />
              </div>
              <div class="text-center w-36 ">
                <p class="text-l text-black font-bold mb-2"> Om Birla </p>
                <p class="text-base text-gray-400 font-normal">Speaker</p>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );





}

export default Graph3
