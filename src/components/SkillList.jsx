import React from "react";

const SkillList = (props) => {
  return (
    <div
      className="align-items-center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        backgroundColor: "white",
      }}
    >
      <img
        src={props.src}
        style={{
          width: "40px",
          height: "40px",
        }}
      />
      <p
        style={{
          fontSize: "1.3rem",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {props.name}
      </p>
    </div>
  );
};

export default SkillList;
