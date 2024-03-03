export type Action = { type: string; payload?: any };

export type State = {
  compNumber: string;
  yourNumber: string;
  value: string;
  attempt: string[];
  inputError: boolean;
  isShow: boolean;
  no: string[];
  yes: string[];
  textarea: string;
};
