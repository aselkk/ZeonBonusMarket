import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getNetworkInfoFromServer } from './networkInfoAction';

const initialState = {
  items: {},
  status: '',
};

export const networkInfoSlice = createSlice({ 
  name: 'networkInfo',
  initialState,
  reducers: {},

  extraReducers: {
    [getNetworkInfoFromServer.pending]: (state:any) => {
      state.status = 'panding';
    },
    [getNetworkInfoFromServer.fulfilled]: (state:any, action:PayloadAction<any>) => {
      state.status = 'fulfilled';
      state.items = action.payload;
    },
    [getNetworkInfoFromServer.rejected]: (state:any) => {
      state.status = 'rejected';
    },
  },
});

