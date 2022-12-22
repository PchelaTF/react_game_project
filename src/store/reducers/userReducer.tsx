import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Character from "../../mechanics/characters/Character"
import { Warrior } from "../../mechanics/characters/Warrior"
import Inventory from "../../mechanics/inventory/Inventory"

export interface IinitialState {
    character: Character
    inventory: Inventory
    inventoryLength: number
}

const initialState: IinitialState = {
    character: new Warrior({
        initHp: 25,
        initAttack: 0,
        initIsNpc: false,
        initName: "name",
        initImgSmall: 'string',
        initImgBig: 'string',
        initConstitution: 10,
        initDexterety: 10,
        initStrength: 10,
        initCharm: 10,
        initIntelligent: 10,
        initWisdom: 10,
        initGold: 300,
        initSkills: []
    }),
    inventory: new Inventory([]),
    inventoryLength: 0
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setPlayerCharacter(state, action: PayloadAction<Character>) {
            state.character = action.payload
        },
        setPlayerInventory(state, action: PayloadAction<Inventory>) {
            state.inventory = action.payload
        },
        setInventoryLength(state) {
            state.inventoryLength = state.inventory.getItems().length
        }
    }
})

export default userSlice.reducer
