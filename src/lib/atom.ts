import { atom, selector } from "recoil";

export const FILTER_SHOW_ALL = "SHOW_ALL";

export enum TodoCategory {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface Todo {
  id: number;
  todo: string;
  category: TodoCategory;
}

export const todosState = atom<Todo[]>({ key: "todosState", default: [] });

export const todosFilterState = atom<TodoCategory | string>({
  key: "todosFilterState",
  default: FILTER_SHOW_ALL,
});

export const filteredTodosState = selector({
  key: "filteredTodosState",
  get: ({ get }) => {
    const filter = get(todosFilterState);
    const todos = get(todosState);

    if (filter === FILTER_SHOW_ALL) return todos;

    return todos.filter((todo) => todo.category === filter);
  },
});
