import React from "react";

const SquareImage = ({ photo, name, slug }) => {
  return (
    <a href={`politician/${slug}`}>
      <div
        style={{
          height: "8.5rem",
          width: "8.5rem",
          position: "relative",
        }}
      >
        <img width="100%" height="auto" src={photo} alt="hi" />
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
          {name}
        </span>
      </div>
    </a>
  );
};

export default SquareImage;
