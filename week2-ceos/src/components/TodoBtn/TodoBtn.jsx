import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";
import PropTypes from "prop-types";

TodoBtn.propTypes = {
  openModal: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
};

export default function TodoBtn({ openModal, handleModal }) {
  function handleButtonClick() {
    handleModal();
  }

  return (
    <TodoBtnWrapper $openModal={openModal} onClick={handleButtonClick}>
      +
    </TodoBtnWrapper>
  );
}

const TodoBtnWrapper = styled.button`
  ${rowFlex}
  position: fixed;
  right: 2rem;
  bottom: 2rem;

  width: 5rem;
  height: 5rem;

  color: ${({ theme }) => theme.colors.white};

  visibility: ${({ $openModal }) => ($openModal ? "hidden" : "visible")};
  background-color: ${({ theme }) => theme.colors.main_blue};
  border-radius: 50%;

  ${({ theme }) => theme.fonts.Headline1};
`;
