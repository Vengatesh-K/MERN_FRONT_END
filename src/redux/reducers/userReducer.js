// import { ActionTypes } from "../actions/actionTypes";
// const initialState = {
//   // users: [],
//   name: "",
//   email: "",
// };

// export const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ActionTypes.FETCH_USER_REQUEST:
//       console.log("log from user reducer", state, action);
//       return (state = action.payload);

//     default:
//       break;
//   }
// };

import { createReducer } from "@reduxjs/toolkit";
import { ActionTypes } from "../actions/actionTypes";

const userState = {
  user: {},
};

const userReducer = createReducer(userState, (builder) => {
  builder.addCase(ActionTypes.Login_user_Data, (state, action) => {
    console.log("from userReducer:", state, action.payload);
    state.user = action.payload;
  });
});

export default userReducer;
