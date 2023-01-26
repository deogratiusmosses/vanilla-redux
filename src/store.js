import { configureStore, createSlice } from '@reduxjs/toolkit'

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => state.filter((toDo) => toDo.id !== action.payload),
  },
})

const store = configureStore({ reducer: toDos.reducer })

export const { add, remove } = toDos.actions

export const { addToDo, deleteToDo } = toDos.actions

export default store
