import styled from "styled-components";

const HeaderWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #343a40; /* dark background */
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: gray;
`;

const Header = ({ title, subtitle }) => {
  return (
    <HeaderWrapper>
      <div className="container">
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
