import React from "react";
import styled from "styled-components";
import { S } from "./Common.style";

const Footer = ({ totalCount, doneCount }) => {
  return (
    <Wrapper>
      <Span>Total: {totalCount}</Span>
      <Span>
        Accomplishment: {doneCount}/{totalCount}
      </Span>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 14rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  margin: 0.625rem 0 0 1.25rem;
`;

const Span = styled.span`
  color: var(--light-blue);
  font-weight: 300;
  font-size: 0.938rem;
`;
