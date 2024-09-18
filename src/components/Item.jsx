import React from "react";
import styled from "styled-components";

import { ReactComponent as EmptyIcon } from "../images/empty_checkbox.svg";
import { ReactComponent as FullIcon } from "../images/full_checkbox.svg";
import { ReactComponent as DeleteIcon } from "../images/delete_btn.svg";

const Item = ({ todo, removeItem, toggleItem }) => {
  const { id, text, checked } = todo;

  return (
    <Wrapper>
      <CheckButton onClick={() => toggleItem(id)}>
        {checked ? <FullIcon /> : <EmptyIcon />}
      </CheckButton>
      <ItemText>{text}</ItemText>
      <DeleteButton onClick={() => removeItem(id)} />
    </Wrapper>
  );
};

export default Item;

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  margin: 0 0 0.938rem 0.5rem;
`;

const ItemText = styled.span`
  color: var(--blue);
  font-weight: 300;
  font-size: 1rem;
  word-break: break-all;
  max-width: 100%;
`;

const CheckButton = styled.span`
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.6rem;
  flex-shrink: 0;
`;

const DeleteButton = styled(DeleteIcon)`
  width: 0.688rem;
  margin-left: 0.4rem;
  flex-shrink: 0;
`;
