import React from 'react';
import styled from 'styled-components';
import { ModalBackground } from './Modal';
import { ModalContainer } from './Modal';

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.9375rem;
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
      <ModalContainer  $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
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
