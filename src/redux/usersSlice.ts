import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/users";

export type User = {
  id: number;
  name: string;
  description: string;
};

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: { users: { items: User[]; isLoading: boolean; error: string | null } };
}>();

// Получение пользователей
export const fetchUsers = createAppAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<User[]>(API_URL);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Добавление пользователя
export const addUser = createAppAsyncThunk(
  "users/addUser",
  async (user: Omit<User, "id">, { rejectWithValue }) => {
    try {
      const response = await axios.post<User>(API_URL, user);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Удаление пользователя
export const deleteUser = createAppAsyncThunk(
  "users/deleteUser",
  async (id: number, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [] as User[],
    isLoading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(fetchUsers.pending, (state) => {
      //   state.isLoading = true;
      //   state.error = null;
      // })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        // state.isLoading = false;
        state.items = action.payload;
      })
      // .addCase(fetchUsers.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload as string;
      // })
      // addUser
      // .addCase(addUser.pending, (state) => {
      //   state.isLoading = true;
      //   state.error = null;
      // })
      .addCase(addUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      // .addCase(addUser.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload as string;
      // })
      // deleteUser
      // .addCase(deleteUser.pending, (state) => {
      //   state.isLoading = true;
      //   state.error = null;
      // })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((user) => user.id !== action.payload);
      })
      // .addCase(deleteUser.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload as string;
      // });
  },
});

export default usersSlice.reducer;
