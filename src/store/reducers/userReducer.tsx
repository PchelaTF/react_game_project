import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Character from "../../mechanics/characters/Character"
import { Warrior } from "../../mechanics/characters/Warrior"

export interface IinitialState {
    character: Character
}

const initialState: IinitialState = {
    character: new Warrior({
        initHp: 25,
        initArmor: 10,
        initAttack: { min: 10, max: 25 },
        initIsNpc: false,
        initActionPoints: 2,
        initName: "name",
        initImgSmall: 'string',
        initImgBig: 'string'
    })
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