import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ILocations, locations } from "../../mechanics/Locations"

export type TScene = "fight" | "dialog" | "create" | "main" | "Locations" | "explore" | "shop" | "chest"

export interface IinitialState {
    scene: TScene,
    locations: ILocations[],
    currentLocation: number,
    passsedLocationLevels: number,
}

const initialState: IinitialState = {
    scene: "create",
    locations: locations,
    currentLocation: 0,
    passsedLocationLevels: 0
}

export const sceneSlice = createSlice({
    name: "scene",
    initialState,
    reducers: {
        setScene(state, action: PayloadAction<TScene>) {
            state.scene = action.payload
        },
        setCurrentLocation(state, action: PayloadAction<number>) {
            state.currentLocation = action.payload
        },
        changeCurrentLocation(state, action: PayloadAction<ILocations>) {
            state.locations[state.currentLocation] = action.payload
        },
        resetLocations(state, action: PayloadAction<ILocations[]>) {
            state.locations = action.payload
        },
        setPasssedLocationLevels(state, action: PayloadAction<number>) {
            state.passsedLocationLevels = state.passsedLocationLevels + action.payload
        },
        resetPassedLocationLevels(state, action: PayloadAction<number>) {
            state.passsedLocationLevels = action.payload
        }
    }
})

export default sceneSlice.reducer