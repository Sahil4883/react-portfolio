import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <>
      <div
        className="card col-lg-4 col-md-4 col-sm-6 col-12 mb-4"
        style={{
          width: " 22rem",
        }}
      >
        <img src={props.src} alt={props.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.subtitle}</p>
          <div className="d-flex column justify-content-around">
            <Link to={props.href} className="btn btn-primary">
              View Project
            </Link>

            <Link to="/contact" className="btn btn-success">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
