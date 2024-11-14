import { configureStore } from "@reduxjs/toolkit";
import shoppersSlice from "./shoppersSlice";
import { persistStore, persistReducer, WebStorage } from 'redux-persist'
import createWebStorage from "redux-persist/es/storage/createWebStorage";


export function createPersistStorge(): WebStorage {
    const isServer = typeof window === "undefined";
    if (isServer) {
        return {
            getItem() {
                return Promise.resolve(null);
            },
            setItem() {
                return Promise.resolve();
            },
            removeItem() {
                return Promise.resolve();
            }
        }
    }
    return createWebStorage("local");
}

const storage = typeof window !== "undefined" ? createWebStorage("local") : createPersistStorge();
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, shoppersSlice);
export const store = configureStore({
    reducer: {
        shoppers: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
          },
        }),
})

export const persistor = persistStore(store);
