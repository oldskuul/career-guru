import { AUTH_SUCSESSFULLY, LOGOUT, ERROR } from "../actionTypes";

const preloadedState = {
  isAuth: false,
  user: { email: "", firstName: "" },
  error: null,
};

export const authReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case AUTH_SUCSESSFULLY:
 
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
      };
    case LOGOUT:
      window.localStorage.removeItem("jwt");
      return {
        ...state,
        isAuth: false,
        user: { email: " ", username: " " },
      };

    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};