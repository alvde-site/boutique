import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IUser {
  id: string;
  name: string;
  surname: string;
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
      prepare({name, surname, email, password}) {
        return {
          payload: {
            id: nanoid(),
            name,
            surname,
            email,
            password,
          },
        };
      },
    },
  },
});

export const selectAllUsers = (state: RootState) => state.users.users;

export default usersSlice.reducer;
