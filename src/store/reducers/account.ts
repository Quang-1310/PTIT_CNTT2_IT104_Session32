type Account = {
  email: string;
  password: string;
};

const initialState: Account = {
  email: "",
  password: "",
};

type ActionType = {
  type: string;
  payload?: Account;
};

export const accountReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "register":
      return { ...state, ...action.payload };
    case "login":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};