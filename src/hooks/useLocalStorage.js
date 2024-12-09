import { useState } from 'react';

// useLocalStorage : localStorage 관리하는 커스텀 훅
export function useLocalStorage(key, initialValue) {
  // localStorage에서 값을 가져오거나 초기 값을 설정
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key); // key에 해당하는 놈들 가져옴
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return initialValue;
    }
  });

  // setValue : localStorage에 값을 설정하는 함수
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value; // value가 함수인 경우에 실행해주려구
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore)); // 다시 스토리지에 저장
    } catch (error) {
      console.error('Error setting localStorage', error);
    }
  };

  return [storedValue, setValue];
}
