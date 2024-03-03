import { useContext } from "react";
import "./Popup.scss";
import { CHANGE_SHOW, Context, RESET_GAME } from "../../reducer";

export const Popup = ({ isShow }: { isShow: boolean }) => {
  const { state, dispatch } = useContext(Context);
  const closePopup = () => {
    dispatch({ type: CHANGE_SHOW, payload: false });
    dispatch({ type: RESET_GAME });
  };
  return (
    <div className={`popup ${isShow ? "show" : ""}`}>
      <div className="popup__content">
        <div className="popup__text">
          Вы выиграли! за {state.attempt.length} ходов
        </div>
        <button onClick={closePopup} className="popup__button">
          Начать с начала
        </button>
      </div>
    </div>
  );
};
