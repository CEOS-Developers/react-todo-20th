import styled from 'styled-components';
import { Button } from '../Button';
import { useState } from 'react';

// 할 일 입력 폼
export default function TodoForm({ setTodos }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    if (inputValue.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: Date.now(), // 유니크한 ID 생성
          value: inputValue,
          isCompleted: false,
        },
      ]);
      setInputValue(''); // 입력 필드 초기화
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일 추가"
        value={inputValue} // inputValue 상태값을 value 속성에 연결 : 값 가져오려면 필요함
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        type="submit"
        onClick={handleSubmit}
      >
        추가
      </Button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  border: 0.5rem 1rem;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  min-height: 48px;
  min-width: 320px;
  padding: 0.5rem 1rem;
  gap: 8px;
  border-radius: 12px;
  color: var(--main-color);
  background-color: var(--bg-primary);

  input {
    flex-grow: 1;
    color: white;
    margin-right: auto;
    background-color: var(--bg-primary);
    border: none;
    outline: none;
    font-size: 16px;
  }
  input::placeholder {
    color: var(--main-color);
  }
`;
