import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //TODO initial state
};

export const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    setUsers: () => {
      //TODO user state
    },
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
