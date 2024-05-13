import { useSetRecoilState } from "recoil";
import { FILTER_SHOW_ALL, TodoCategory, todosFilterState } from "../lib/atom";

export default function TodoItemsFilter() {
  const setFilter = useSetRecoilState(todosFilterState);

  const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
    setFilter(e.currentTarget.value);
  };
  
  return (
    <select onChange={handleSelect}>
      <option value={FILTER_SHOW_ALL}>SHOW ALL</option>
      <option value={TodoCategory.TO_DO}>TO DO</option>
      <option value={TodoCategory.DOING}>DOING</option>
      <option value={TodoCategory.DONE}>DONE</option>
    </select>
  );
}
