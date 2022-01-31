import axios from "axios";
import React, { useEffect, useState } from "react";
import SquareImage from "../SquareImage";

const PopularPoliticiansCard = () => {
  const [politicianData, setPoliticianData] = useState([]);
  const getPoliticianData = (politicianSlug = "andhra-pradesh") => {
    axios
      
      .get(`https://www.electwise.in/api/v2/assam/popular-politicians/`)
      .then(({ data }) => {
        setPoliticianData(data);
        console.log(data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getPoliticianData(window.location.pathname.split("/").pop());
  }, []);

  return (
    <div
      className=" w-auto bg-black shadow-lg "
      style={{ width: "80%", height: "auto" }}
    >
      <card>
        <div> Popular Politicians</div>
        <hr />
        <div
          className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 w-full   sahdow-lg overflow-hidden flex flex-col justify-center items-center"
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: ".4rem",
          }}
        >
          {politicianData.map((item) => (
            <SquareImage photo={item.photo} name={item.name} slug={item.slug} />
          ))}
        </div>
      </card>
    </div>
  );
};

export default PopularPoliticiansCard;
