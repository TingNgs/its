import { AUTH_SUCCESS } from "./constants";

const initialState = {
  username: ""
};

export default function reducer(state = initialState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        username: payload.username
      };
    default:
      return state;
  }
}
