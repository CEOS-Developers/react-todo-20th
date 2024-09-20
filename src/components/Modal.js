import React from 'react';
import styled from 'styled-components';

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
`;

const Modal = ({ ModalText, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}> {/* 이벤트 버블링으로 인한 클릭 이벤트의 전파로 모달을 클릭했을 때 모달이 종료되는 것을 방지*/}
        <p>{ModalText}</p>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
