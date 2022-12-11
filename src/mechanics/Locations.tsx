import { backgrounds } from "../components/CreateCharacter/Images"
import { TEnemydifficulty } from "./CreatingMechanic"

export interface ILocations {
    background: string,
    isCompleted: boolean,
    name: string,
    maxLocationLevels: number,
    passsedLocationLevels: number,
    difficulty: TEnemydifficulty
}

export const locations: ILocations[] = [
    { background: backgrounds[0], isCompleted: false, name: "forest", maxLocationLevels: 5, passsedLocationLevels: 0, difficulty: "easy" }, 
    { background: backgrounds[1], isCompleted: false, name: "desert", maxLocationLevels: 5, passsedLocationLevels: 0, difficulty: "medium" }, 
    { background: backgrounds[2], isCompleted: false, name: "dungeon", maxLocationLevels: 5, passsedLocationLevels: 0, difficulty: "high" },
    { background: backgrounds[0], isCompleted: false, name: "forest", maxLocationLevels: 5, passsedLocationLevels: 0, difficulty: "easy" }, 
    { background: backgrounds[1], isCompleted: false, name: "desert", maxLocationLevels: 5, passsedLocationLevels: 0, difficulty: "medium" }, 
    { background: backgrounds[2], isCompleted: false, name: "dungeon", maxLocationLevels: 5, passsedLocationLevels: 0, difficulty: "high" },
]