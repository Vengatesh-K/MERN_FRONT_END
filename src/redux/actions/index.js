import { createAction } from "@reduxjs/toolkit";
import { ActionTypes } from "./actionTypes";

export const fetchUserSuccess = createAction(
  ActionTypes.Login_user_Data,
  (payload) => ({
    type: ActionTypes.Login_user_Data,
    payload: payload,
  })
);

export default fetchUserSuccess;
