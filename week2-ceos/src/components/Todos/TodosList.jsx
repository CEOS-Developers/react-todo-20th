import { useClickedDayStore } from "../../core/store";

export default function TodosList() {
  const choosedDate = useClickedDayStore((state) => state.clickedDay);
  const todos = useClickedDayStore((state) => state.todoList);

  function filterFn(list) {
    return list.day === choosedDate;
  }

  const filteredTodos = todos.filter(filterFn)[0].todos;
  console.log(filteredTodos);
  return (
    <div>
      {filteredTodos.map((content) => {
        const { text, isDone } = content;
        return <div key={text}>{text}</div>;
      })}
    </div>
  );
}
