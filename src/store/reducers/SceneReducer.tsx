import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ILevel, levels } from "../../mechanics/Levels"

export type TScene = "fight" | "dialog" | "create" | "main" | "levels"

export interface IinitialState {
    scene: TScene,
    levels: ILevel[],
    currentLevel: number
}

const initialState: IinitialState  = {
    scene: "create",
    levels: levels,
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
        setLevels(state, action: PayloadAction<ILevel[]>) {
            state.levels = action.payload
        },
        changeCurrentLevel(state, action: PayloadAction<ILevel>) {
            state.levels[state.currentLevel] = action.payload
        },
        resetLevels(state, action: PayloadAction<ILevel[]>) {
            state.levels = action.payload
        }
    }
})

export default sceneSlice.reducer