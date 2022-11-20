import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type TScene = "fight" | "dialog" | "create" | "main"

export interface IinitialState {
    scene: TScene
}

const initialState: IinitialState  = {
    scene: "create"
}

export const SET_ENEMY_TEXT = "SET_ENEMY_TEXT"

export const sceneSlice = createSlice({
    name: "scene",
    initialState,
    reducers: {
        setScene(state, action: PayloadAction<TScene>) {
            state.scene = action.payload
        }
    }
})

export default sceneSlice.reducer