import React, { useState } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { NewTodo } from "../components/NewTodo";
import { TodoList } from "../components/TodoList";

const Button = styled.button`
  font-size: 1.5em;
  background-color: red;
  color: white;
`;

// const BlueButton = (Button as any).extend`
// color: blue;
// `;

const App: React.FC = () => {
  const [todos, setTodos] = useState<{ id: string; todo: string }[]>([]);

  const inputHandler = (todo: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString().slice(0, 8), todo },
    ]);
  };

  const onDeleteTodo = (todoId: string) => {
    setTodos((prevTodo) => prevTodo.filter(({ id }) => id !== todoId));
  };
  return (
    <div>
      <Button>Next button</Button>
      {/* <BlueButton>Move next</BlueButton> */}

      <h1>Hello, world React</h1>
      <NewTodo inputOnClick={inputHandler} />
      {/* <h2>{JSON.stringify(res)}</h2> */}
      {/* <ul>{JSON.stringify(todos)}</ul> */}
      <TodoList todos={todos} onDelete={onDeleteTodo} />
    </div>
  );
};

const testTemplateFunc = () => {
  const tag = (str: any[], ...rest: any[]) => {
    console.log(str);
    console.log(rest);
    return (a: number, b: number) => {
      console.log("Scoppy....");
      return a + b;
    };
  };

  const func = tag`${20}===${11}*` as any;
  console.log(func(2, 3));
};
// testTemplateFunc();

export default App;

render(<App />, document.getElementById("app-react"));
