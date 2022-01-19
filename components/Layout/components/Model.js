import axios from "axios";
import React, { useEffect, useState } from "react";

const Model = ({ closeModel }) => {
  const [models, setModels] = useState([]);
  const getListData = () => {
    axios
      .get(`https://www.electwise.in/api/v2/states/`)
      .then(({ data }) => {
        setModels(data.results);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getListData();
  }, []);

  return (
    <div className="modelBackground fade" onClick={() => closeModel(false)}>
      <div className="model-dialoug-centred model-dialoug ">
        <div className="model-container   ">
          <div className=" w-auto flex flex-row justify-between p-3.5 bg-white border-b border-gray-200">
            <h5 className="font-semibold text-gray-800">Select State</h5>

            <button onClick={() => closeModel(false)}>X</button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
            {models.map((model) => (
              <div className=" w-full flex flex-col sm:flex-row h- items-center  p-3.5  border-b border-gray-200">
                <div className="w-auto  flex">
                  {" "}
                  <a href={`/${model.slug}`}>
                    <p
                      // onClick={() => updateState(model.name)}
                      className="mb-2 font-semibold text-gray-700 cursor-pointer"
                    >
                      {model.name}
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
