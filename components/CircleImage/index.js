import React from "react";

const CircleImage = () => {
  return (
    <div style={{ width: "7.5rem", height: "10rem" }}>
      <div
        style={{
          width: "7.5rem",
          height: "7.5rem",
        }}
      >
        <img
          style={{ borderRadius: "50%" }}
          src={
            "https://www.electwise.in/media/images/people/photo/Pawan_Kalyan_Janasena_AP_2019.jpeg"
          }
          alt="round"
        />
      </div>
      {false ? (
        <>
          <div
            style={{
              height: "19px",
              width: "7.5rem",
              fontSize: ".8em",
              fontWeight: "500",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            Pawan Kalyan
          </div>
          <div
            style={{
              height: "19px",
              width: "7.5rem",
              fontSize: ".8em",
              fontWeight: "500",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            Chief Minister
          </div>
        </>
      ) : (
        <div
          style={{
            width: "7.5rem",
            textAlign: "center",
            fontSize: "1em",
          }}
        >
          AGP
        </div>
      )}
    </div>
  );
};

export default CircleImage;
