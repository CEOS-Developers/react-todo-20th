import { Button } from '../Button';
import { useState } from 'react';

export default function TodoForm({ setTodos }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // form 제출 시 페이지 리로드 방지
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일 추가"
        value={inputValue} // inputValue 상태값을 value 속성에 연결
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        type="submit"
        onClick={handleSubmit}
      >
        추가
      </Button>
    </form>
  );
}
