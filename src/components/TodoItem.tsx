import { useSetRecoilState } from "recoil";
import { Todo, TodoCategory, todosState } from "../lib/atom";

interface TodoItemProps {
  todo: Todo;
}

const TodoCategories = [
  TodoCategory.TO_DO,
  TodoCategory.DOING,
  TodoCategory.DONE,
];

export default function TodoItem({ todo }: TodoItemProps) {
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

  const btnText = (category: string) => {
    if (category === TodoCategory.TO_DO) return "📝";
    if (category === TodoCategory.DOING) return "🔄";
    return "✅";
  };

  return (
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
              {btnText(category)}
            </button>
          );
        } else {
          return null;
        }
      })}
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  );
}
