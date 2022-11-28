import { backgrounds } from "../components/CreateCharacter/Images"

export interface ILocations {
    background: string,
    isCompleted: boolean,
    name: string,
    maxLocationLevels: number,
    passsedLocationLevels: number
}

export const locations: ILocations[] = [
    { background: backgrounds[0], isCompleted: false, name: "forest", maxLocationLevels: 5, passsedLocationLevels: 0 }, { background: backgrounds[1], isCompleted: false, name: "desert", maxLocationLevels: 5, passsedLocationLevels: 0 }, { background: backgrounds[2], isCompleted: false, name: "dungeon", maxLocationLevels: 5, passsedLocationLevels: 0 },
    { background: backgrounds[0], isCompleted: false, name: "forest", maxLocationLevels: 5, passsedLocationLevels: 0 }, { background: backgrounds[1], isCompleted: false, name: "desert", maxLocationLevels: 5, passsedLocationLevels: 0 }, { background: backgrounds[2], isCompleted: false, name: "dungeon", maxLocationLevels: 5, passsedLocationLevels: 0 },
]