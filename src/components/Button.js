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
  color: var(--main-color);
  border: 2px solid var(--main-color);
  align-items: center;
  text-wrap: nowrap;
`;

// DeleteButton : 삭제 버튼
export const DeleteButton = styled(MainButton)`
  border-radius: 1rem;
  color: var(--main-color);
  border-color: var(--main-color);
`;

// IsCompletedButton : 완료 토글 버튼
export const IsCompletedButton = styled(MainButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.5em;
  ${(props) =>
    props.$isCompleted === 'true' &&
    `padding: 0;
      `}
`;
