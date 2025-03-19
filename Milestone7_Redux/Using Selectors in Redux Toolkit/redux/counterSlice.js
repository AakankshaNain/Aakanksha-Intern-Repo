import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

// current value of the counter stored selectCount
export const selectCount = (state) => state.counter.value

export const { increment } = counterSlice.actions
export default counterSlice.reducer
