import { createAction } from "@reduxjs/toolkit";
import { ActionTypes, TokenActionTypes } from "./actionTypes";

export const fetchUserSuccess = createAction(
  ActionTypes.Login_user_Data,
  (payload) => ({
    type: ActionTypes.Login_user_Data,
    payload: payload,
  })
);
export const fetchAuthTokenSuccess = createAction(
  ActionTypes.authToken,
  (payload) => ({
    type: ActionTypes.authToken,
    payload: payload,
  })
);

export default { fetchUserSuccess, fetchAuthTokenSuccess };
