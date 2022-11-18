import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Character from "../../mechanics/characters/Character"

export interface IinitialState {
    character: Character | undefined
}

const initialState: IinitialState  = {
    character: undefined
}

export const SET_ENEMY_TEXT = "SET_USER_CHARACTER"

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setPlayerCharacter(state, action: PayloadAction<Character>) {
            state.character = action.payload
        }
    }
})

export default userSlice.reducer