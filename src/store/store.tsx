import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import FightReducer from "./reducers/FightReducer";
import SceneReducer from "./reducers/SceneReducer";
import userReducer from "./reducers/userReducer";
import uiReducer from "./reducers/uiReducer";
import createCharacterSlice from "./reducers/createCharacterReducer";

const mainReducer = combineReducers({
    userReducer,
    FightReducer,
    SceneReducer,
    uiReducer,
    createCharacterSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: mainReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
        }),
    })
}

export type MainState = ReturnType<typeof mainReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<MainState> = useSelector