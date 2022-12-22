import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { characterClasses } from "../../mechanics/CreatingMechanic";
import { classArr } from '../../tempDB';

interface IinitialState {
    activeRace: number
    activeClass: number
    fullImg: string
    reduxClass: string
}

const initialState: IinitialState = {
    activeRace: 0,
    activeClass: 0,
    fullImg: classArr[0][0].fullImg,
    reduxClass: characterClasses[0]
}

export const createCharacterSlice = createSlice({
    name: 'createCharacter',
    initialState,
    reducers: {
        setActiveRace(state, action: PayloadAction<number>) {
            state.activeRace = action.payload
        },
        setActiveClass(state, action: PayloadAction<number>) {
            state.activeClass = action.payload
        },
        setFullImg(state) {
            state.fullImg = classArr[state.activeRace][state.activeClass].fullImg
        },
        setReduxClass(state, action: PayloadAction<number>) {
            state.reduxClass = characterClasses[action.payload]
        }
    }
})

export default createCharacterSlice.reducer