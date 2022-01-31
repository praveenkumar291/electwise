import React from "react";

const SquareImage = () => {
  return (
    <div
      style={{
        height: "8.5rem",
        width: "8.5rem",
        border: "1px solid green",
        position: "relative",
      }}
    >
      <img
        width="100%"
        height="auto"
        src={
          "https://www.electwise.in/media/images/people/photo/Pawan_Kalyan_Janasena_AP_2019.jpeg"
        }
        alt="hi"
      />
      <span
        style={{
          width: "100%",
          position: "absolute",
          bottom: "0",
          textAlign: "center",
          backgroundColor: "#000000b3",
          color: "#ffffff",
        }}
      >
        Pawan Kalyan
      </span>
    </div>
  );
};

export default SquareImage;
