const Header = ({ title, subtitle }) => {
  return (
    <div className="bg-dark h-screen flex justify-center items-center text-center">
      <div className="container">
        <h1 className="text-white text-3xl">{title}</h1>
        <p className="text-gray-400 text-xl">{subtitle}</p>
      </div>
    </div>
  );
};

export default Header;
