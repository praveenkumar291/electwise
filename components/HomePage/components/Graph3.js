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
      <div class=" max-w-md ">
        <section class="w-auto h-auto  px-4 sm:px-6 bg-white shadow-lg lg:px-4 ">
          <div class="text-left  border-b w-full mt-1.5">
            <h2 class="text-base font-normal   text-xl">LokSabha</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1">
            <div class="w-full rounded-none sahdow-lg overflow-hidden flex flex-row justify-center items-center flex">
              <div className="bar-chart_2">
                <Pie data={state} />
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );





}

export default Graph3
