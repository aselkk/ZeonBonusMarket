import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "@/shared/api";

export const getNetworkInfoFromServer:any = createAsyncThunk(
  "networkInfo",
  async () => {
    try {
      const response = await Api.Info.getNetworkAndContacts();
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
