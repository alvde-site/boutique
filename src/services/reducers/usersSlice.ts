import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IUser {
  id: string;
  name: string;
  surname: string;
  tel: string;
  email: string;
  password: string;
}

interface IUsersState {
  initialUsers: [];
  users: IUser[];
}

const initialState: IUsersState = {
  initialUsers: [],
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: {
      reducer(state, action: PayloadAction<IUser>) {
        state.users.push(action.payload);
      },
      prepare({ name, surname, tel, email, password }) {
        return {
          payload: {
            id: nanoid(),
            name,
            surname,
            email,
            tel,
            password,
          },
        };
      },
    },
  },
});

export const selectAllUsers = (state: RootState) => state.users.users;

export const { createUser } = usersSlice.actions;

export default usersSlice.reducer;
