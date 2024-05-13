import { TodoCategory } from "../lib/atom";

interface CategoryInputProps {
  category: TodoCategory;
  handleRadio: (todoCategory: TodoCategory) => void;
}

export default function CategoryInput({
  category,
  handleRadio,
}: CategoryInputProps) {
  return (
    <div>
      <input
        type="radio"
        id="TO DO"
        name="category"
        value="TO DO"
        checked={category === TodoCategory.TO_DO}
        onChange={() => handleRadio(TodoCategory.TO_DO)}
      />
      <label htmlFor="TO DO">TO DO</label>
      <input
        type="radio"
        id="DOING"
        name="category"
        value="DOING"
        checked={category === TodoCategory.DOING}
        onChange={() => handleRadio(TodoCategory.DOING)}
      />
      <label htmlFor="DOING">DOING</label>
      <input
        type="radio"
        id="DONE"
        name="category"
        value="DONE"
        checked={category === TodoCategory.DONE}
        onChange={() => handleRadio(TodoCategory.DONE)}
      />
      <label htmlFor="DONE">DONE</label>
    </div>
  );
}
