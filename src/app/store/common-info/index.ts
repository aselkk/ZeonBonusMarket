import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {Api} from "@/shared/api";


const initialState = {};


const fetchInfo = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
        const data = await Api.Info.getNetworkAndContacts();
    }
)


// const commonInfoSlice = createSlice({
//     name: "commonInfo",
//     initialState,
//     reducers: {
//
//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchInfo.fulfilled, (state, action) => {
//             state.
//         })
//     }
// })