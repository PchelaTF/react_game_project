import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Character from "../../mechanics/characters/Character"

export interface IinitialState {
    currentTurn: number,
    enemyIndex: number,
    skillIndex: number,
    ischoiceActive: boolean,
    deadEnemies: boolean[],
    enemies: Character[]
}

const initialState: IinitialState  = {
    currentTurn: 0,
    enemyIndex: -1,
    skillIndex: 0,
    ischoiceActive: true,
    deadEnemies: [],
    enemies: []
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
        },
        setEnemies(state, action: PayloadAction<Character[]>) {
            state.enemies = action.payload
        },
        setSkillIndex(state, action: PayloadAction<number>) {
            state.skillIndex = action.payload
        }
    }
})

export default fightSlice.reducer