import { backgrounds } from "../components/CreateCharacter/Images"

export interface ILevel {
    background: string,
    isCompleted: boolean
}

export const levels: ILevel[] = [
    { background: backgrounds[0], isCompleted: false }, { background: backgrounds[0], isCompleted: false }, { background: backgrounds[0], isCompleted: false },
    { background: backgrounds[0], isCompleted: false }, { background: backgrounds[0], isCompleted: false }, { background: backgrounds[0], isCompleted: false },
]