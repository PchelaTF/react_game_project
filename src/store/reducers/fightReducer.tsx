import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Character from "../../mechanics/characters/Character"

export interface IinitialState {
    characters: Character[],
    currentTurn: number,
    isEnemyTurn: boolean,
    enemyIndex: number
}

const initialState: IinitialState  = {
    characters: [],
    currentTurn: 1,
    isEnemyTurn: false,
    enemyIndex: 0
}

export const NEXT_TURN = "NEXT_TURN"

export const fightSlice = createSlice({
    name: "fight",
    initialState,
    reducers: {
        setTurn(state, action: PayloadAction<number>) {
            state.currentTurn = action.payload
            console.log(state.currentTurn)
        },
        setIsEnemyTurn(state, action: PayloadAction<boolean>) {
            state.isEnemyTurn = action.payload
        },
        setEnemyIndex(state, action: PayloadAction<number>) {
            state.enemyIndex = action.payload
        }
    }
})

export default fightSlice.reducer