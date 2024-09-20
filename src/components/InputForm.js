import React, { useRef } from 'react';
import styled from 'styled-components';
import checkmark from '../assets/checkmark.svg';

const Form = styled.form`
  display: flex;
  position: relative;
  width: 80%;
  padding: 1.3rem 1.3rem 1.3rem 3.3rem;
  box-shadow: 0 0 0.3125rem rgba(0, 0, 0, 0.11), 0 0.3125rem 0.3125rem rgba(0, 0, 0, 0.178);
  border-radius: 0.625rem;
  background-image: url(${checkmark});
  background-size: 1.5rem;
  background-position: 1rem center;
  background-repeat: no-repeat;
`;

const Input = styled.input`
  width: calc(100% - 4rem);
  font-size: 1rem;
  border: none;
  outline: 0;
`;

const SubmitButton = styled.button`
  position: absolute;
  top: 50%;
  right: 1.25rem;
  transform: translateY(-50%);
  background-color: transparent;
  color: rgb(94, 169, 139);
  padding: 0.3125rem 0.625rem;
  border: 0.0938rem solid rgb(94, 169, 139);
  border-radius: 0.625rem;
  cursor: pointer;

  &:hover {
    background-color: #b5b6b779;
    font-weight: bold;
  }
`;

const InputForm = ({ addTodo }) => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputRef.current) {
      const inputValue = inputRef.current.value.trim();
      addTodo(inputValue); // 빈 문자열인 경우도 addTodo로 전달 후 addTodo에서 함수 종료
      inputRef.current.value = ''; // 입력 필드 초기화
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        ref={inputRef}
        placeholder="할 일을 입력하세요"
      />
      <SubmitButton type="submit">추가</SubmitButton>
    </Form>
  );
};

export default InputForm;




