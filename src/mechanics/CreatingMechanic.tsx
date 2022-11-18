import Character from "./characters/Character";
import { Mage } from "./characters/Mage";
import { Rogue } from "./characters/Rogue";
import { Warrior } from "./characters/Warrior";

const WARRIOR_CLASS = "warrior"
const MAGE_CLASS = "mage"
const ROGUE_CLASS = "rogue"

export const characterClasses: string[] = [ROGUE_CLASS, MAGE_CLASS, WARRIOR_CLASS]

export function createNewCharacter(name: string, characterClass: string) {
    switch (characterClass) {
        case WARRIOR_CLASS:
            return new Warrior(25, 10, { min: 10, max: 25 }, name, false, 2)
        case MAGE_CLASS:
            return new Mage(10, 8, { min: 5, max: 15 }, name, false, 2)
        case ROGUE_CLASS:
            return new Rogue(12, 10, { min: 10, max: 30 }, name, false, 2)
        default:
            return new Character(10, 10, { min: 10, max: 10 }, false, 2, name)
    }
}