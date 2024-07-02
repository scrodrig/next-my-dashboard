import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CounterState {
  counter: number
  isReady: boolean
}

const initialState: CounterState = {
  counter: 5,
  isReady: false,
}

const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return
      state.counter = action.payload
      state.isReady = true
    },

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

export const { addOne, substractOne, resetCounter, initCounterState } = CounterSlice.actions

export default CounterSlice.reducer
