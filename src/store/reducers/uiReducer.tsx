import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IinitialState {
    isToolTip: boolean,
    toolTipContent: string
}

const initialState: IinitialState = {
    isToolTip: false,
    toolTipContent: "stats"
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setIsToolTip(state, action: PayloadAction<boolean>) {
            state.isToolTip = action.payload
        },
        setToolTipContent(state, action: PayloadAction<string>) {
            state.toolTipContent = action.payload
        }
    }
})

export default uiSlice.reducer