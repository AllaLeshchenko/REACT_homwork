import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [
    { id: 1, name: 'Ivan', email: 'ivan@example.com' },
    { id: 2, name: 'Мaria', email: 'maria@example.com' },
    { id: 3, name: 'Petr', email: 'petr@example.com' },
    { id: 3, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  ],
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default userSlice.reducer