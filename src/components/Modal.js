import React from 'react';
import styled, { css } from 'styled-components';
import { slideDown } from './TodoItem';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.875rem;
  background: white;
  padding: 3.125rem;
  border-radius: 0.625rem;
  text-align: center;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      animation: ${slideDown} 0.3s ease-out forwards;
    `}
`;

const Modal = ({ ModalText, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <p>{ModalText}</p>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;

