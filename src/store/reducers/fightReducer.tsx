import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Character from "../../mechanics/characters/Character"

export interface IinitialState {
    currentTurn: number,
    enemyIndex: number,
    ischoiceActive: boolean,
    deadEnemies: boolean[]
}

const initialState: IinitialState  = {
    currentTurn: 0,
    enemyIndex: -1,
    ischoiceActive: true,
    deadEnemies: []
}

export const NEXT_TURN = "NEXT_TURN"

export const fightSlice = createSlice({
    name: "fight",
    initialState,
    reducers: {
        setTurn(state, action: PayloadAction<number>) {
            state.currentTurn = action.payload
        },
        setEnemyIndex(state, action: PayloadAction<number>) {
            state.enemyIndex = action.payload
        },
        setChoiceActive(state, action: PayloadAction<boolean>) {
            state.ischoiceActive = action.payload
        },
        pushToDeadEnemies(state, action: PayloadAction<boolean>) {
            state.deadEnemies.push(action.payload)
        },
        clearDeadEnemies(state) {
            state.deadEnemies = []
        }
    }
})

export default fightSlice.reducer