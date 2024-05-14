import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  Todo,
  TodoCategory,
  filteredTodosState,
  todosState,
} from "../lib/atom";

const TodoCategories = [
  TodoCategory.TO_DO,
  TodoCategory.DOING,
  TodoCategory.DONE,
];

export default function TodoItems() {
  const todos = useRecoilValue(filteredTodosState);
  const setTodos = useSetRecoilState(todosState);

  const updateTodoCategory = (oldTodo: Todo, newCategory: TodoCategory) => {
    setTodos((prevTodos) => {
      const idx = prevTodos.indexOf(oldTodo);
      const newTodo = { ...oldTodo };
      newTodo.category = newCategory;

      return [...prevTodos.slice(0, idx), newTodo, ...prevTodos.slice(idx + 1)];
    });
  };

  const deleteTodo = (todoId: number) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter((todo) => todo.id !== todoId);
      return newTodos;
    });
  };

  return (
    <div className="todoItems">
      {todos.map((todo) => (
        <div className="todoItem">
          <span>{todo.todo}</span>
          {TodoCategories.map((category) => {
            if (category !== todo.category) {
              return (
                <button
                  className="btn"
                  key={category}
                  onClick={() => updateTodoCategory(todo, category)}
                >
                  {category}
                </button>
              );
            } else {
              return null;
            }
          })}
          <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}
