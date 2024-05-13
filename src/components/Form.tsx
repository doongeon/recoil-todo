import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { TodoCategory, todosState } from "../lib/atom";
import CategoryInput from "./input-category";
import TodoInput from "./input-todo";

export default function TodoForm() {
  const [category, setCategory] = useState(TodoCategory.TO_DO);
  const [todo, setTodo] = useState("");
  const setTodos = useSetRecoilState(todosState);

  const handleRadio = (catetegory: TodoCategory) => {
    setCategory(catetegory);
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setTodo(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      const newTodo = {
        id: new Date().getTime(),
        todo,
        category,
      };
      newTodos.push(newTodo);

      return newTodos;
    });

    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <CategoryInput category={category} handleRadio={handleRadio} />

      <TodoInput todo={todo} handleInput={handleInput} />
    </form>
  );
}
