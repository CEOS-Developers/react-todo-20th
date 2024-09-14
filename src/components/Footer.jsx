import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <div>푸터</div>
      </Wrapper>
    </>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 14rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  margin-top: 0.625rem;
  background-color: var(--blue);
`;
