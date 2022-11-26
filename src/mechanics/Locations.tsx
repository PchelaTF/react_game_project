import { backgrounds } from "../components/CreateCharacter/Images"

export interface ILocations {
    background: string,
    isCompleted: boolean,
    name: string
}

export const locations: ILocations[] = [
    { background: backgrounds[0], isCompleted: false, name: "forest" }, { background: backgrounds[1], isCompleted: false, name: "desert" }, { background: backgrounds[2], isCompleted: false, name: "dungeon" },
    { background: backgrounds[0], isCompleted: false, name: "forest" }, { background: backgrounds[1], isCompleted: false, name: "desert" }, { background: backgrounds[2], isCompleted: false, name: "dungeon" },
]