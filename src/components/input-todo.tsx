interface TodoInputProps {
  todo: string;
  handleInput: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function TodoInput({ todo, handleInput }: TodoInputProps) {
  return (
    <div>
      <input
        type="text"
        name="todo"
        placeholder="todo"
        value={todo}
        onChange={handleInput}
      />
      <button type="submit">추가</button>
    </div>
  );
}
