import { useEffect, useReducer } from "react";
import "./App.scss";
import { Input } from "./components/Input/Input";
import { Content } from "./components/Content/Content";
import {
  initialState,
  reducer,
  Context,
  ADD_LINE,
  ADD_VALUE,
  ADD_YOUR_NUMBER,
  addCompNumber,
  ADD_COMP_NUMBER,
  count,
  CHANGE_SHOW,
} from "./reducer";
import { ShowNumber } from "./components/Input/ShowNumber";
import { Textarea } from "./components/Input/Textarea";
import { Popup } from "./components/Popup/Popup";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { compNumber, yourNumber, value, inputError, isShow } = state;

  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Enter":
        addLine();
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  const addLine = () => {
    if (!inputError && value) {
      if (!yourNumber) {
        dispatch({ type: ADD_YOUR_NUMBER, payload: value });
      } else {
        const countAnimals = count(value, compNumber);
        if (countAnimals === " - 4 быков, 0 коров") {
          dispatch({ type: CHANGE_SHOW, payload: true });
        }
        dispatch({ type: ADD_LINE, payload: `${value} ${countAnimals}` });
      }
      dispatch({ type: ADD_VALUE, payload: "" });
    }

    if (!compNumber) {
      const comp = addCompNumber();
      dispatch({ type: ADD_COMP_NUMBER, payload: comp });
    }
  };

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="app">
        <header className="header">
          <Popup isShow={isShow} />
          <h1>Быки коровы</h1>
        </header>
        <main className="main">
          <div className="your">
            <ShowNumber number={yourNumber} />
            <Input addLine={addLine} />
            <Content />
            <Textarea />
          </div>
          <div className="comp">{/* <ShowNumber number={compNumber} /> */}</div>
        </main>
        <footer className="footer"></footer>
      </div>
    </Context.Provider>
  );
}

export default App;
