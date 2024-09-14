import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  background-color: rgba(110, 190, 110, 0.895);
  width: 100%;
  height: 4rem;
  color: white;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  text-shadow: 0 5px 5px rgba(0, 0, 0, 0.205);
`;

function Header() {
  return (
    <HeaderContainer>
      <h1>TO-DO✏️</h1>
    </HeaderContainer>
  );
}

export default Header;
