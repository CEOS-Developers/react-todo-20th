// components/ConfirmModal.js
import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
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

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5625rem;
  background: white;
  padding: 2rem;
  border-radius: 0.9375rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const ModalButton = styled.button`
  padding: 0.625rem 1.25rem;
  background-color: ${props => props.$cancel ? '#6dc66deb' : '#e53434eb'};
  color: white;
  border: none;
  border-radius: 0.3125rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.$cancel ? '#54a054eb' : '#cb3e3efd'};
  }
`;

const ConfirmModal = ({ isOpen, onConfirm,  onCancel }) => {
  if (!isOpen) return null;

  return (
    <ModalBackground onClick={onCancel}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <h3>정말 삭제하시겠습니까?</h3>
        <ButtonGroup>
          <ModalButton $cancel onClick={onCancel}>취소</ModalButton>
          <ModalButton onClick={onConfirm}>삭제</ModalButton>
        </ButtonGroup>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ConfirmModal;
