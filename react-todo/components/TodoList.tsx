import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const text = `nice one there!⚠️ Note: 
[7:12 am, 02/11/2020] Fattylee: 😊
: `;
const element = <p>This is a funky jsx{text}</p>;
// [7:12 am, 02/11/2020] Fattylee: 😊

const selectJsx = (
  <select name="business" id="bis" defaultValue="beans">
    <option value="rice">Rice</option>
    <option value="beans">Beans</option>
  </select>
);

const TexArea = () => (
  <textarea
    onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) =>
      console.log(e.target.value)
    }
    name="desc"
    id="desc"
    cols={30}
    rows={10}
    defaultValue="this is so beautiful"
  ></textarea>
);

const { Consumer, Provider } = React.createContext<{
  state: any;
  setState: any;
  updateState: (value: any) => void;
  getState: () => Function;
} | null>(null);

const Container: React.FC = ({ children }) => {
  const [state, setState] = useState({ wealthy: "true" });

  return (
    <Provider
      value={{
        state,
        setState,
        updateState: (value: any) =>
          setState((pState) => ({ ...pState, ...value })),
        getState: () => setState,
      }}
    >
      {children}
    </Provider>
  );
};

const withColor = (Element: any) => (props: any) => (
  <Element {...props} color="blue" />
);

const Para: React.FC<{ color?: string }> = ({ color }) => (
  <p style={{ color }}>This is for testing purpose</p>
);

const NewPara = withColor(Para);

const CounterWithNameAndSideEffect = () => {
  const [name, setName] = useState("fattylee");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("U clicked " + count + " times");
    return () => {};
  }, []);

  return (
    <div>
      <p>
        <button onClick={() => setCount(count + 1)}>
          Click count: {count}
        </button>
      </p>
      <p>
        <button
          onClick={(_) =>
            setName(name === "fattylee" ? "haleemath" : "fattylee")
          }
        >
          Change name: {name}
        </button>
      </p>
    </div>
  );
};
const Button: React.FunctionComponent = () => {
  return (
    <Consumer>
      {(ctx) => {
        const { setState, state } = ctx!;
        console.log(state);
        return (
          <>
            <hr />
            <button
              onClick={(e) => {
                // ctx!.updateState({ wealthy: "stinkilly...", low: 23 });
                // const state = ctx!.getState();
                setState((p: any) => ({
                  ...p,
                  wealthy: "back",
                }));
              }}
            >
              NIce: {state.wealthy}{" "}
            </button>
            <p style={{ marginBottom: "400px" }}>give me a break</p>
          </>
        );
      }}
    </Consumer>
  );
};

class Mama extends React.Component<{ text: string; inpRef?: any }> {
  inpRef: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    this.state = { ok: "ok", test: this.props };

    this.inpRef = React.createRef();
    // console.log(this);
    // console.log(props);
    // this.inpRef = null;
  }
  // state = { ok: "ok", test: this.props };

  guy(next: any, e: any) {
    if (typeof e === "number") console.log(e);
    else {
      console.log(e);
    }
    console.log(next, "======next=======");
    console.log(this);
    console.log("i was clicked!");
    console.log(this.inpRef.current);
    return 89;
  }

  render() {
    return (
      <>
        <p>
          Render Me:
          <button onClick={this.guy.bind(this, 234)}>Click me</button>
        </p>
        <form>
          <input
            type="text"
            ref={this.inpRef}
            // ref={(el) => (this.inpRef = el)}
            placeholder="Say something..."
          />
        </form>
      </>
    );
  }
}

// Mama.propTypes = {
// text: PropTypes.string,
// };

const Fat: React.FC = ({ children }) => <>{children}</>;

export const TodoList: React.FC<{
  todos: { id: string; todo: string }[];
  onDelete: (todoId: string) => void;
}> = ({ todos, onDelete }) => {
  return (
    <>
      <ul>
        {todos.map(({ id, todo }) => (
          <li key={id}>
            {todo} <button onClick={onDelete.bind(null, id)}> Delete</button>
          </li>
        ))}
      </ul>
      {element}
      {selectJsx}
      <TexArea />
      <Fat>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column-reverse",
            justifyContent: "center",
          }}
        >
          <h1>
            this {"\n           "}
            <br />
            {"     h  "}
            is so magical
          </h1>

          <p>my humble paragraph</p>
        </div>
      </Fat>
      <CounterWithNameAndSideEffect />
      <Para color="orange" />
      <NewPara />
      <Mama text="love is great" />
      <Container>
        <Button />
      </Container>
    </>
  );
};
