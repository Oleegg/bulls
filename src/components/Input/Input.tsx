import { ChangeEvent, useContext } from "react";
import "./Input.css";
import { Context, ADD_VALUE, CHANGE_ERROR, validation } from "../../reducer";

type Props = {
  addLine: () => void;
};

export const Input = ({ addLine }: Props) => {
  const { state, dispatch } = useContext(Context);
  const { yourNumber, value, inputError } = state;

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (validation(e.target.value, value) && e.target.value.length < 5) {
      dispatch({ type: CHANGE_ERROR, payload: true });
      dispatch({ type: ADD_VALUE, payload: e.target.value });
      if (e.target.value.length === 4) {
        dispatch({ type: CHANGE_ERROR, payload: false });
      }
    } else if (e.target.value.length === 5) {
      dispatch({ type: CHANGE_ERROR, payload: false });
    } else {
      dispatch({ type: CHANGE_ERROR, payload: true });
    }
  };

  return (
    <div className="input">
      <label className="label">
        {yourNumber ? "Отгадайте число соперника" : "Загадайте число"}
        <div className="input__content">
          <input
            className="input__text"
            type="text"
            value={value}
            onChange={inputHandler}
          />
          <button onClick={addLine} className="input__button">
            Ввод
          </button>
        </div>
      </label>

      <pre className="error">
        {inputError &&
          `Должно быть 4 не
повторяющихся цифры`}
      </pre>
    </div>
  );
};
