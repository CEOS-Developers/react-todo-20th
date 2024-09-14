import React, { useState } from 'react';
import styled from 'styled-components';
import checkmark from '../assets/checkmark.svg'

const Form = styled.form`
    display: flex;
    position: relative;
    width: 80%;
    padding: 1.3rem 1.3rem 1.3rem 3.3rem; /* background로 넣은 체크 이미지와 안 겹치도록 왼쪽 패딩 추가*/
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.11), 0 5px 5px rgba(0, 0, 0, 0.178);
    border-radius: 0.625rem;
    background-image: url(${checkmark}); 
    background-size: 1.5rem;
    background-position: 1rem center; /* background 이미지 위치, 왼쪽으로부터 1rem 떨어진 곳*/
    background-repeat: no-repeat;
`;

const Input = styled.input`
  width:calc(100% - 4rem); /* 왼쪽 추가 버튼이 차지한 공간을 제외한 부분*/
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
  padding: 5px 10px;
  border: 1.5px solid rgb(94, 169, 139);
  border-radius: 0.625rem;
  cursor: pointer;

  &:hover {
    background-color: #b5b6b779;
    font-weight: bold;
  }
`;

function InputForm({ addTodo }) {
  const [inputValue, setInputValue] = useState(''); // 입력된 값을 저장하는 state

  const handleSubmit = (event) => {
    event.preventDefault(); // submit이지만 새로고침 안 되도록
    addTodo(inputValue); // setTodo 상태에 저장.
    setInputValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <SubmitButton type="submit">추가</SubmitButton>
    </Form>
  );
}

export default InputForm;
