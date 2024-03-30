import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import photoSlice from "../photoSlice";
import imageSlice from "../imageSlice";

const rootReducer = combineReducers({
    photo: photoSlice.reducer,
    image: imageSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['photo', 'image'], // Lưu ý: 'photo' và 'image' là tên của các slice
    stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
