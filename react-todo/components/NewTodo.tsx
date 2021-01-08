import React, { useRef } from "react";

interface MyProps {
  inputOnClick: (todo: string) => void;
}
export const NewTodo: React.FC<MyProps> = ({ inputOnClick }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(e.target);
    inputOnClick(inputRef.current!.value);
    inputRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="new-todo">New todo</label>
        <input
          type="text"
          placeholder="Enter todo"
          ref={inputRef}
          autoFocus={true}
        />
      </div>
      <button>Add todo</button>
    </form>
  );
};
