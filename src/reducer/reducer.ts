import {
  ADD_COMP_NUMBER,
  ADD_YOUR_NUMBER,
  ADD_VALUE,
  ADD_LINE,
  CHANGE_ERROR,
  CHANGE_SHOW,
  RESET_GAME,
  CHANGE_TEXT,
  CHANGE_NO,
  CHANGE_YES,
} from "./actionTypes";
import { State, Action } from "./types";

export const initialState: State = {
  compNumber: "",
  yourNumber: "",
  value: "",
  attempt: [],
  inputError: false,
  isShow: false,
  no: "",
  yes: "",
  textarea: "",
};

export const reducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case ADD_COMP_NUMBER: //payload: string
      return { ...state, compNumber: payload };
    case ADD_YOUR_NUMBER: //payload: string
      return { ...state, yourNumber: payload };
    case ADD_VALUE: //payload: string
      return { ...state, value: payload };
    case ADD_LINE: //payload: string
      return { ...state, attempt: [...state.attempt, payload] };
    case CHANGE_TEXT: //payload: boolean
      return { ...state, textarea: payload };
    case CHANGE_ERROR: //payload: boolean
      return { ...state, inputError: payload };
    case CHANGE_SHOW: //payload: boolean
      return { ...state, isShow: payload };
    case CHANGE_NO: //payload: boolean
      return { ...state, no: payload };
    case CHANGE_YES: //payload: boolean
      return { ...state, yes: payload };
    case RESET_GAME: //payload: boolean
      return { ...initialState };

    default:
      return { ...state };
  }
};
