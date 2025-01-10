const SkillList = ({ name, children }) => {
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
      <div
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
      <p
        style={{
          fontSize: "1.3rem",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default SkillList;
