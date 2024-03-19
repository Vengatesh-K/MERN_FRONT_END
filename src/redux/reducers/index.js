// import { createReducer } from "@reduxjs/toolkit";
// import fetchUserSuccess from "../actions";

// const initialState = {
//   name: "",
// };

// const userReducer = createReducer(initialState, (builder) => {
//   builder.addCase(fetchUserSuccess, (state, action) => {
//     console.log("add case", state, action);

//     state.name = action.payload.name;
//   });
// });

// export default userReducer;

// const initialState = {
//   user:{}
// }
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import tokenReducer from "./tokenReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  tokenReducer: tokenReducer,
});

export default rootReducer;
