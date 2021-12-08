import React from "react";
import { Pie } from "react-chartjs-2";

const Graph = () => {
  const state = {
    labels: ["BJP"],
    datasets: [
      {
        label: "Assembly ",
        backgroundColor: ["rgb(249,125,9)"],
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
    <div className="pl-10 pr-10">
      <div className="bg-white flex flex-col h-64 w-full round-x1  shadow-lg justify-center... ">
        <div className="card-title">
          <h1 className="card-title-one">Lok Sabha</h1>
          <div className="  absolute flex flex-row  h-auto w-auto items-center  ">
            <div>
              <Pie data={state} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
