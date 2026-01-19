import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUserState } from "../types/user.type";
import { initialState } from "../state/users.state";

export const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    setUsers: (state, actions: PayloadAction<IUserState>) => {
      state.userList = actions.payload.userList;
    },
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
