import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: '',
  filteredlist: []
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter(state, action) {
      return { ...state, filter: action.payload }
    },
    // eslint-disable-next-line no-unused-vars
    updateFilterList(state, action) {

      return { ...state, filteredlist: action.payload }
    }
  },
})

export const { addFilter, updateFilterList } = filterSlice.actions
export default filterSlice.reducer