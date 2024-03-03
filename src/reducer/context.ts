import { createContext, Dispatch } from "react";
import { initialState } from "./reducer";
import { Action, State } from "./types";
interface IContext {
  state: State;
  dispatch: Dispatch<Action>;
}

export const Context = createContext<IContext>({
  state: initialState,
  dispatch: () => {},
});
