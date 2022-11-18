import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IinitialState {
    currentTurn: number
}

const initialState: IinitialState  = {
    currentTurn: 0
}

export const NEXT_TURN = "NEXT_TURN"

export const fightSlice = createSlice({
    name: "fight",
    initialState,
    reducers: {
        setTurn(state, action: PayloadAction<number>) {
            state.currentTurn = action.payload
        }
    }
})

export default fightSlice.reducer