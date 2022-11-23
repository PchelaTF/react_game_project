import Character, { ICharacterStats } from "./characters/Character";
import { Mage } from "./characters/Mage";
import { Rogue } from "./characters/Rogue";
import { Warrior } from "./characters/Warrior";
import { raceFullArr } from '../components/CreateCharacter/Images';

const WARRIOR_CLASS: classes = "warrior"
const MAGE_CLASS: classes = "mage"
const ROGUE_CLASS: classes = "rogue"

export type race = "elf" | "halfling" | "demon"
export type classes = "warrior" | "mage" | "rogue"

export const characterClasses: string[] = [ROGUE_CLASS, MAGE_CLASS, WARRIOR_CLASS]

const warriorStats: ICharacterStats = {
    initHp: 25,
    initArmor: 10,
    initAttack: { min: 10, max: 25 },
    initIsNpc: false,
    initActionPoints: 2,
    initName: '',
    initImgSmall: 'string',
    initImgBig: raceFullArr[2]
}

const mageStats: ICharacterStats = {
    initHp: 10,
    initArmor: 8,
    initAttack: { min: 5, max: 15 },
    initIsNpc: false,
    initActionPoints: 2,
    initName: '',
    initImgSmall: 'string',
    initImgBig: raceFullArr[1]
}

const rogueStats: ICharacterStats = {
    initHp: 12,
    initArmor: 10,
    initAttack: { min: 10, max: 30 },
    initIsNpc: false,
    initActionPoints: 2,
    initName: '',
    initImgSmall: 'string',
    initImgBig: raceFullArr[0]
}

const defaultStats: ICharacterStats = {
    initHp: 10,
    initArmor: 10,
    initAttack: { min: 10, max: 10 },
    initIsNpc: false,
    initActionPoints: 2,
    initName: '',
    initImgSmall: 'string',
    initImgBig: 'string'
}

export const characterStatsArr = [rogueStats, mageStats, warriorStats, defaultStats] 

export function createNewCharacter(name: string, characterClass: string, img: string, icon: string) {
    switch (characterClass) {
        case WARRIOR_CLASS:
            // return new Warrior(25, 10, { min: 10, max: 25 }, name, false, 2)
            return new Warrior({...warriorStats, initName: name, initImgBig: img, initImgSmall: icon})
        case MAGE_CLASS:
            // return new Mage(10, 8, { min: 5, max: 15 }, name, false, 2)
            return new Mage({...mageStats, initName: name, initImgBig: img, initImgSmall: icon})
        case ROGUE_CLASS:
            // return new Rogue(12, 10, { min: 10, max: 30 }, name, false, 2)
            return new Rogue({...rogueStats, initName: name, initImgBig: img, initImgSmall: icon})
        default:
            // return new Character(10, 10, { min: 10, max: 10 }, false, 2, name)
            return new Character({...defaultStats, initName: name, initImgBig: img, initImgSmall: icon})
    }
}

export function createEnemy() {
    switch(Math.floor(Math.random() * (2 - 0 + 1) + 0)) {
        case 0:
            return new Warrior({...warriorStats, initName: "", initIsNpc: true})
        case 1:
            return new Rogue({...rogueStats, initName: "", initIsNpc: true})
        case 2:
            return new Mage({...mageStats, initName: "", initIsNpc: true})
        default:
            return new Character({...warriorStats, initName: "", initIsNpc: true})
    }
}