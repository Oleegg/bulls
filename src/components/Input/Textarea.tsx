import { useContext } from "react";
import "./Input.css";
import { CHANGE_TEXT, Context } from "../../reducer";

export const Textarea = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div className="help">
      <div className="help__content">
        <div className="help__line">
          Точно есть: <input />
        </div>
        <div className="help__line">
          Точно нет: <input />
        </div>
      </div>
      <textarea
        onChange={(e) =>
          dispatch({ type: CHANGE_TEXT, payload: e.target.value })
        }
        className="textarea"
        value={state.textarea}
      />
    </div>
  );
};
