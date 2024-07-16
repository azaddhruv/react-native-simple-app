import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  isLoading: false,
};

const indexSlice = createSlice({
  name: 'index',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      console.log(action.payload, 'nice');
    },
  },
});

export const { setData } = indexSlice.actions;

const store = configureStore({
  reducer: {
    index: indexSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
