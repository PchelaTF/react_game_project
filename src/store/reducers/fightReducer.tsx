import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Character from "../../mechanics/characters/Character"

export interface IinitialState {
    characters: Character[],
    currentTurn: number,
    isPlayerTurn: boolean
}

const initialState: IinitialState  = {
    characters: [],
    currentTurn: 0,
    isPlayerTurn: true
}

export const NEXT_TURN = "NEXT_TURN"

export const fightSlice = createSlice({
    name: "fight",
    initialState,
    reducers: {
        setTurn(state, action: PayloadAction<number>) {
            state.currentTurn = action.payload
        },
        setIsPlayerTurn(state, action: PayloadAction<boolean>) {
            state.isPlayerTurn = action.payload
        }
    }
})

export default fightSlice.reducer