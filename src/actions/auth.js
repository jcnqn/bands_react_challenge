import { types } from "../types/types";


export const login = (email) => ({
  type: types.login,
  payload: {
    email,
  },
});

export const logout = (email) => ({
  type: types.logout,
  payload: {
    email,
  },
});


