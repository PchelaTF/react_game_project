import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IinitialState {
    text: string
}

const initialState: IinitialState  = {
    text: ""
}

export const SET_ENEMY_TEXT = "SET_ENEMY_TEXT"

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setText(state, action: PayloadAction<string>) {
            state.text = action.payload
        }
    }
})

export default uiSlice.reducer