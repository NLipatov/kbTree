import { createSlice } from '@reduxjs/toolkit';
import {data, Species } from '../data';

export const defaultSlice = createSlice({
  name: 'default',
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
    }
  }
})

export const { setSpecies, setNewSpecies } = defaultSlice.actions

export default defaultSlice.reducer