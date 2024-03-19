import { createReducer } from "@reduxjs/toolkit";
import { ActionTypes, TokenActionTypes } from "../actions/actionTypes";

const userState = {
  authToken: null,
  isLogin: false,
};

const tokenReducer = createReducer(userState, (builder) => {
  builder.addCase(ActionTypes.authToken, (state, action) => {
    console.log("from tokenReducer:", state, action.payload);
    state.authToken = action.payload;
    state.isLogin = action.payload;
  });
});

export default tokenReducer;
