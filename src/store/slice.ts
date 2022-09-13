import { createSlice } from '@reduxjs/toolkit';
import {data, Species } from '../data';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    treeValue: data,
    Species: Species,
  },
  reducers: {
    setSpecies: (state, action) => {
        state.Species = action.payload.Species;
        state.treeValue = action.payload.treeValue;
    },
    setNewSpecies: (state, action) => {
        state.Species = action.payload;
        console.log(`new species: ${state.Species}`);
    }
  }
})

export const { setSpecies, setNewSpecies } = counterSlice.actions

export default counterSlice.reducer