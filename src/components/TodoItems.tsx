import { useRecoilValue } from "recoil";
import { filteredTodosState } from "../lib/atom";
import TodoItem from "./TodoItem";

export default function TodoItems() {
  const todos = useRecoilValue(filteredTodosState);

  return (
    <div className="todoItems">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
