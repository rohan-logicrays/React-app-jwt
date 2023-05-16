import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { userData: "" },
  reducers: {
    addUser: (state, action) => {
      state.userData = action.payload;
    },

    removeUser: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
