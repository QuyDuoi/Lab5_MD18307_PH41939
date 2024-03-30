import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageState {
  imageUri: string | null;
}

const initialState: ImageState = {
  imageUri: null,
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImageUri: (state, action: PayloadAction<string | null>) => {
      state.imageUri = action.payload;
    },
  },
});

export const { setImageUri } = imageSlice.actions;

export default imageSlice;
