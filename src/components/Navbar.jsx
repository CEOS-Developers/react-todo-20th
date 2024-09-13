import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <>
      <Wrapper>
        <input />
        <button>test</button>
      </Wrapper>
    </>
  );
}

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--blue);
`;
