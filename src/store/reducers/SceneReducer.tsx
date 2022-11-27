import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ILocations, locations } from "../../mechanics/Locations"

export type TScene = "fight" | "dialog" | "create" | "main" | "Locations" | "explore" | "shop"

export interface IinitialState {
    scene: TScene,
    locations: ILocations[],
    currentLevel: number
}

const initialState: IinitialState  = {
    scene: "create",
    locations: locations,
    currentLevel: 0
}

export const SET_ENEMY_TEXT = "SET_ENEMY_TEXT"

export const sceneSlice = createSlice({
    name: "scene",
    initialState,
    reducers: {
        setScene(state, action: PayloadAction<TScene>) {
            state.scene = action.payload
        },
        setCurrentLevel(state, action: PayloadAction<number>) {
            state.currentLevel = action.payload
        },
        setLocations(state, action: PayloadAction<ILocations[]>) {
            state.locations = action.payload
        },
        changeCurrentLevel(state, action: PayloadAction<ILocations>) {
            state.locations[state.currentLevel] = action.payload
        },
        resetLocations(state, action: PayloadAction<ILocations[]>) {
            state.locations = action.payload
        }
    }
})

export default sceneSlice.reducer