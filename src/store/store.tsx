import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import figthReducer from "./reducers/fightReducer";

const mainReducer = combineReducers({
    figthReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: mainReducer
    })
}

export type MainState = ReturnType<typeof mainReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<MainState> = useSelector