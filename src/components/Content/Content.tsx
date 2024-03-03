import { useContext } from "react";
import { Context } from "../../reducer";
import "./Content.scss";

export const Content = () => {
  const { state } = useContext(Context);
  const { attempt, yes, no } = state;

  return (
    <div className="content">
      {attempt.length
        ? attempt.map((line, i) => {
            const parts = line.split("-");
            const num = parts[0].trim().split("");

            return (
              <div key={i} className="content__line">
                {num.map((later, i) => {
                  if (yes.includes(later)) {
                    return (
                      <span key={i} className="yes">
                        {later}
                      </span>
                    );
                  } else if (no.includes(later)) {
                    return (
                      <span key={i} className="no">
                        {later}
                      </span>
                    );
                  } else {
                    return <span key={i}>{later}</span>;
                  }
                })}
                {" - "}
                {parts[1]}
                <br />
              </div>
            );
          })
        : null}
    </div>
  );
};
