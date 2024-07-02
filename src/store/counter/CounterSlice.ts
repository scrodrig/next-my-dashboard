import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CounterState {
  counter: number
}

const initialState: CounterState = {
  counter: 5,
}

const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addOne(state) {
      state.counter += 1
    },
    substractOne(state) {
      if (state.counter === 0) return
      state.counter -= 1
    },
    resetCounter(state, action: PayloadAction<number>) {
      if (action.payload < 0) action.payload = 0
      state.counter = action.payload
    },
  },
})

export const {addOne, substractOne, resetCounter} = CounterSlice.actions

export default CounterSlice.reducer
