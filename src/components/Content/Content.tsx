import { useContext } from "react";
import { Context } from "../../reducer";
import "./Content.css";

export const Content = () => {
  const { state } = useContext(Context);
  const { attempt } = state;
  return (
    <div className="content">
      {attempt.length
        ? attempt.map((line, i) => (
            <div key={i} className="content__line">
              {line}
              <br />
            </div>
          ))
        : null}
    </div>
  );
};
