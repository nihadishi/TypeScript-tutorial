import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { TODOS2_API } from "../models/api";
import axios from "axios";

const initialState = {
  data: null,
  error: null,
  loading: false,
};
export const getTodos = createAsyncThunk(
  "todos/get",
  async (data,thunkAPI) => {
    try {
      let res = await axios.get(TODOS2_API);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (newTodo, thunkAPI) => {
    try {
      const response = await axios.post(TODOS2_API, newTodo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${TODOS2_API}/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    handleCompleted: (state, action) => {
      const getIndex = state.data.findIndex((todo) => {
        return todo.id === action.payload.id;
      });
      state.data[getIndex].completed = !state.data[getIndex].completed;
    },
    clearCompleted: (state) => {
      const clearedTodos = state.data.filter(
        (todo) => todo.completed !== true
      );
      state.data = clearedTodos;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = false;
        const deletedTodoId = action.payload;
        state.data = state.data.filter((todo) => todo.id !== deletedTodoId);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { removeToDo, handleCompleted, clearCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
