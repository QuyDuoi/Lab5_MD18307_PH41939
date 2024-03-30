import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PhotoState {
  uri: string | null;
}

const initialState: PhotoState = {
  uri: null,
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    setPhotoUri(state, action: PayloadAction<string>) {
      state.uri = action.payload;
    },
  },
});

export const { setPhotoUri } = photoSlice.actions;
export default photoSlice;
