import { useContext } from "react";
import "./Input.scss";
import { CHANGE_NO, CHANGE_TEXT, CHANGE_YES, Context } from "../../reducer";

export const Textarea = () => {
  const { state, dispatch } = useContext(Context);
  const { yes, no } = state;
  const yesVal = [...yes];
  return (
    <div className="help">
      <div className="help__content">
        <div className="help__line">
          есть:{" "}
          <input
            value={yesVal}
            onChange={(e) =>
              dispatch({
                type: CHANGE_YES,
                payload: e.target.value.split("")[e.target.value.length - 1],
              })
            }
          />
        </div>
        <div className="help__line">
          нет:{" "}
          <input
            value={[...no]}
            onChange={(e) =>
              dispatch({
                type: CHANGE_NO,
                payload: e.target.value.split("")[e.target.value.length - 1],
              })
            }
          />
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
