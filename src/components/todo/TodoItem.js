import { Button } from '../Button';

export function TodoItem({ id, value, isComplete = false, onEdit, onDelete }) {
  return (
    <li id={id}>
      {isComplete ? <span>end</span> : <span>todo</span>}
      {value}
      <Button
        value="수정"
        type="button"
        onClick={onEdit} // 수정 버튼 클릭 시 동작할 함수
      />
      <Button
        value="삭제"
        type="button"
        onClick={onDelete} // 삭제 버튼 클릭 시 동작할 함수
      />
    </li>
  );
}
