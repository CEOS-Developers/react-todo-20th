import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>TO DO</h1>
      <span>{new Date().toDateString()}</span>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  h1 {
    color: #788bff;
  }
  span {
    color: #8790ca;
  }
`;

export default Header;
