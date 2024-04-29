import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-5">
      <div className="container">
        <p>© 2024 Your Portfolio. All rights reserved.</p>
        <p>
          Designed with <i className="bi bi-heart-fill text-danger"></i> by{" "}
          <Link to="/" className="text-light">
            Sahil Shaikh
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
