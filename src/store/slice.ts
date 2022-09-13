import { createSlice } from '@reduxjs/toolkit';
import {data, Species, Specie} from '../data';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    treeValue: data,
    Species: Species,
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1

    //   console.log(state.treeValue)
    //   console.log(state.Species)
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setSpecies: (state, action) => {
        console.log("setSpecies gets:");
        state.Species = action.payload.Species;
        state.treeValue = action.payload.treeValue;
        console.log(state.treeValue)
        console.log(state.Species)
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setSpecies } = counterSlice.actions

export default counterSlice.reducer