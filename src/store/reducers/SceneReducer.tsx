import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ILocations, locations } from "../../mechanics/Locations"

export type TScene = "fight" | "dialog" | "create" | "main" | "Locations" | "explore" | "shop" | "chest"

export interface IinitialState {
    scene: TScene,
    locations: ILocations[],
    currentLocation: number,
    passsedLocationLevels: number,
    isToolTip: boolean,
    toolTipContent: string
}

const initialState: IinitialState = {
    scene: "create",
    locations: locations,
    currentLocation: 0,
    passsedLocationLevels: 0,
    isToolTip: false,
    toolTipContent: "stats"
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
        },
        setIsToolTip(state, action: PayloadAction<boolean>) {
            state.isToolTip = action.payload
        },
        setToolTipContent(state, action: PayloadAction<string>) {
            state.toolTipContent = action.payload
        }
    }
})

export default sceneSlice.reducer