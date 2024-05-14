import { useSetRecoilState } from "recoil";
import { TodoCategory, todosState } from "../lib/atom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

interface TodoInput {
  category: TodoCategory;
  todo: string;
}

export default function TodoForm() {
  const setTodos = useSetRecoilState(todosState);
  const {
    setValue,
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<TodoInput>();

  useEffect(() => {
    setValue("category", TodoCategory.TO_DO);
  }, []);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const onSubmit = ({ todo, category }: TodoInput) => {
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

    
    reset();
    setValue("category", category);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("category")}
          type="radio"
          value={TodoCategory.TO_DO}
          id="TO_DO"
        />
        <label htmlFor="TO DO">TO DO</label>
        <input
          {...register("category")}
          type="radio"
          value={TodoCategory.DOING}
          id="DOING"
        />
        <label htmlFor="DOING">DOING</label>
        <input
          {...register("category")}
          type="radio"
          value={TodoCategory.DONE}
          id="DONE"
        />
        <label htmlFor="DONE">DONE</label>
      </div>

      <div>
        <input
          type="text"
          placeholder="todo"
          value={watch("todo")}
          {...register("todo")}
        />
        <button type="submit">추가</button>
      </div>
    </form>
  );
}
