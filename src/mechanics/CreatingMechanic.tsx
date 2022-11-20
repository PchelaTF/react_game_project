import Character, { ICharacterStats } from "./characters/Character";
import { Mage } from "./characters/Mage";
import { Rogue } from "./characters/Rogue";
import { Warrior } from "./characters/Warrior";
import { raceArr, raceFullArr, classArr, descrArr } from '../components/CreateCharacter/testCRArr.js';

const WARRIOR_CLASS = "warrior"
const MAGE_CLASS = "mage"
const ROGUE_CLASS = "rogue"

export const characterClasses: string[] = [ROGUE_CLASS, MAGE_CLASS, WARRIOR_CLASS]

export function createNewCharacter(name: string, characterClass: string) {
    const warriorStats: ICharacterStats = {
        initHp: 25,
        initArmor: 10,
        initAttack: { min: 10, max: 25 },
        initIsNpc: false,
        initActionPoints: 2,
        initName: name,
        initImgSmall: 'string',
        initImgBig: raceFullArr[2]
    }

    const mageStats: ICharacterStats = {
        initHp: 10,
        initArmor: 8,
        initAttack: { min: 5, max: 15 },
        initIsNpc: false,
        initActionPoints: 2,
        initName: name,
        initImgSmall: 'string',
        initImgBig: raceFullArr[1]
    }

    const rogueStats: ICharacterStats = {
        initHp: 12,
        initArmor: 10,
        initAttack: { min: 10, max: 30 },
        initIsNpc: false,
        initActionPoints: 2,
        initName: name,
        initImgSmall: 'string',
        initImgBig: raceFullArr[0]
    }

    const defaultStats: ICharacterStats = {
        initHp: 10,
        initArmor: 10,
        initAttack: { min: 10, max: 10 },
        initIsNpc: false,
        initActionPoints: 2,
        initName: name,
        initImgSmall: 'string',
        initImgBig: 'string'
    }

    switch (characterClass) {
        case WARRIOR_CLASS:
            // return new Warrior(25, 10, { min: 10, max: 25 }, name, false, 2)
            return new Warrior(warriorStats)
        case MAGE_CLASS:
            // return new Mage(10, 8, { min: 5, max: 15 }, name, false, 2)
            return new Mage(mageStats)
        case ROGUE_CLASS:
            // return new Rogue(12, 10, { min: 10, max: 30 }, name, false, 2)
            return new Rogue(rogueStats)
        default:
            // return new Character(10, 10, { min: 10, max: 10 }, false, 2, name)
            return new Character(defaultStats)
    }
}