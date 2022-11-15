import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IinitialState {
    isEnemyTurn: boolean
}
const initialState: IinitialState = {
    isEnemyTurn: false
}

export const SET_ENEMY_TURN = "SET_ENEMY_TURN"
export const SET_ENEMY_TURN_FALSE = "SET_ENEMY_TURN_FALSE"

export const fightSlice = createSlice({
    name: "fight",
    initialState,
    reducers: {
        setEnemyTurn(state, action: PayloadAction<boolean>) {
            state.isEnemyTurn = action.payload
        }
    }
})

export default fightSlice.reducer