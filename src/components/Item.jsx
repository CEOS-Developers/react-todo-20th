import React from "react";
import styled from "styled-components";

import { ReactComponent as EmptyIcon } from "../images/empty_checkbox.svg";
import { ReactComponent as FullIcon } from "../images/full_checkbox.svg";
import { ReactComponent as DeleteIcon } from "../images/delete_btn.svg";

const Item = ({ todo, removeItem, toggleItem }) => {
  const { id, text, checked } = todo;

  return (
    <Wrapper>
      <CheckBox onClick={() => toggleItem(id)}>
        {checked ? <FullIcon /> : <EmptyIcon />}
      </CheckBox>
      <ItemText>{text}</ItemText>
      <DeleteButton onClick={() => removeItem(id)} />
    </Wrapper>
  );
};

export default Item;

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.938rem;
  box-sizing: border-box;

  color: var(--blue);
  font-weight: 300;
  font-size: 1rem;
`;

const ItemText = styled.span``;

const CheckBox = styled.span`
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.6rem;
`;

const DeleteButton = styled(DeleteIcon)`
  width: 0.688rem;
`;
