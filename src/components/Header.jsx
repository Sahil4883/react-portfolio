import React from "react";

const Header = (props) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
      className="bg-dark"
    >
      <div className="container">
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
          }}
        >
          {props.title}
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            color: "gray",
          }}
        >
          {props.subtitle}
        </p>
      </div>
    </div>
  );
};

export default Header;
