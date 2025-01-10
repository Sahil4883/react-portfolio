const ProjectCard = (props) => {
  return (
    <div
      className="card mb-4 shadow-lg rounded-4"
      style={{
        width: "22rem",
        backgroundColor: "#fff",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <img
        src={props.src}
        alt={props.title}
        className="card-img-top"
        style={{
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          objectFit: "cover",
          height: "200px",
          width: "100%",
        }}
      />
      <div className="card-body">
        <h5
          className="card-title"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          {props.title}
        </h5>
        <p
          className="card-text"
          style={{
            fontSize: "1rem",
            color: "#555",
            marginBottom: "1.5rem",
          }}
        >
          {props.subtitle}
        </p>
        <div className="d-flex justify-content-center">
          <a
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              borderRadius: "20px",
              padding: "10px 20px",
              textDecoration: "none",
              transition: "background-color 0.3s ease",
            }}
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
