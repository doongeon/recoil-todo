import { useRecoilState } from "recoil";
import TodoForm from "./components/Form";
import TodoItems from "./components/TodoItems";
import TodoItemsFilter from "./components/TodoItemsFilter";
import { todosState } from "./lib/atom";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useRecoilState(todosState);

  useEffect(() => {
    const value = localStorage.getItem("todos");
    if (value) setTodos(JSON.parse(value));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <h1>TO DO</h1>
      <TodoForm />
      <TodoItemsFilter />
      <TodoItems />
    </div>
  );
}

export default App;
