import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IUser {
  id: string;
  name: string;
  tel: string;
  email: string;
  [key: string]: string;
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
      prepare({ name, surname, tel, email, password, city, street }) {
        return {
          payload: {
            id: nanoid(),
            name,
            surname,
            email,
            tel,
            password,
            city,
            street,
          },
        };
      },
    },
    updatedUser(state, action: PayloadAction<IUser>) {
      const { id, name, surname, tel, email, city, street } = action.payload;
      const existingUser = state.users.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.surname = surname;
        existingUser.tel = tel;
        existingUser.email = email;
        existingUser.city = city;
        existingUser.street = street;
      }
    },
  },
});

export const selectAllUsers = (state: RootState) => state.users.users;

export const { createUser, updatedUser } = usersSlice.actions;

export default usersSlice.reducer;
