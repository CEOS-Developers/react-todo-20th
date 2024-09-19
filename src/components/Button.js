import styled from 'styled-components';

export function Button({ type, children, onClick }) {
  return (
    <MainButton
      onClick={onClick}
      type={type}
    >
      {children} {/* children을 버튼 내부의 텍스트로 표시 */}
    </MainButton>
  );
}

// MainButton : 메인 버튼
const MainButton = styled.button`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.5em;
  border-radius: 3px;
  cursor: pointer;
  background-color: transparent;
  // text-align: center;
  color: rgb(150, 130, 224);
  border: 2px solid rgb(150, 130, 224);
  align-items: center;
  text-wrap: nowrap;
`;

// IconButton : icon 감싸는 버튼
export const IconButton = styled(MainButton)`
  border-radius: 1rem;
  width: 1rem;
  height: 1rem;
`;

// BlueButton : 파란 버튼
export const BlueButton = styled(MainButton)`
  border-radius: 1rem;
  color: rgb(34, 209, 142);
  border-color: rgb(34, 209, 142);
`;

// IsCompletedButton : 완료 토글 버튼
export const IsCompletedButton = styled(MainButton)`
  border-radius: 1rem;
  width: 0.5em;
  height: 0.5em;
  color: ${(props) => (props.$isCompleted === 'true' ? 'green' : 'yellow')};
  border-color: ${(props) =>
    props.$isCompleted === 'true' ? 'green' : 'yellow'};
`;
