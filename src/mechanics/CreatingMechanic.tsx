import Character, { ICharacterStats, ISkill } from "./characters/Character";
import { Mage } from "./characters/Mage";
import { Rogue } from "./characters/Rogue";
import { Warrior } from "./characters/Warrior";
import { bossArr, raceFullArr } from '../tempDB';

const WARRIOR_CLASS: TClasses = "warrior"
const MAGE_CLASS: TClasses = "mage"
const ROGUE_CLASS: TClasses = "rogue"

export type TRace = "elf" | "halfling" | "demon"
export type TClasses = "warrior" | "mage" | "rogue"
export type TEnemydifficulty = "easy" | "medium" | "high" | "boss"

export const characterClasses: string[] = [ROGUE_CLASS, MAGE_CLASS, WARRIOR_CLASS]
export const characterRace: TRace[] = ["elf", "halfling", "demon"]

export const returnRaceMod = (race: TRace) => {
    switch (race) {
        case "elf":
            return {
                initConstitution: -2,
                initDexterety: 2,
                initStrength: 0,
                initCharm: 0,
                initWisdom: 0,
                initIntelligent: 2
            }
        case "demon":
            return {
                initConstitution: 0,
                initDexterety: 2,
                initStrength: 0,
                initCharm: -2,
                initWisdom: 0,
                initIntelligent: 2
            }
        case "halfling":
            return {
                initConstitution: 0,
                initDexterety: 2,
                initStrength: -2,
                initCharm: 2,
                initWisdom: 0,
                initIntelligent: 0
            }
        default:
            return {
                initConstitution: 0,
                initDexterety: 0,
                initStrength: 0,
                initCharm: 0,
                initWisdom: 0,
                initIntelligent: 0
            }
    }
}

const warriorStats: ICharacterStats = {
    initHp: 22,
    initAttack: 1,
    initIsNpc: false,
    initName: '',
    initImgSmall: 'string',
    initImgBig: raceFullArr[2],
    initConstitution: 10,
    initDexterety: 10,
    initStrength: 10,
    initCharm: 10,
    initIntelligent: 10,
    initWisdom: 10,
    initGold: 175,
    initSkills: []
}

const mageStats: ICharacterStats = {
    initHp: 18,
    initAttack: 0,
    initIsNpc: false,
    initName: '',
    initImgSmall: 'string',
    initImgBig: raceFullArr[1],
    initConstitution: 10,
    initDexterety: 10,
    initStrength: 10,
    initCharm: 10,
    initIntelligent: 10,
    initWisdom: 10,
    initGold: 300,
    initSkills: []
}

const rogueStats: ICharacterStats = {
    initHp: 20,
    initAttack: 0,
    initIsNpc: false,
    initName: '',
    initImgSmall: 'string',
    initImgBig: raceFullArr[0],
    initConstitution: 10,
    initDexterety: 10,
    initStrength: 10,
    initCharm: 10,
    initIntelligent: 10,
    initWisdom: 10,
    initGold: 140,
    initSkills: []
}

const defaultStats: ICharacterStats = {
    initHp: 22,
    initAttack: 0,
    initIsNpc: false,
    initName: '',
    initImgSmall: 'string',
    initImgBig: 'string',
    initConstitution: 10,
    initDexterety: 10,
    initStrength: 10,
    initCharm: 10,
    initIntelligent: 10,
    initWisdom: 10,
    initGold: 70,
    initSkills: []
}

const bossStats: ICharacterStats = {
    initHp: 50,
    initAttack: 1,
    initIsNpc: false,
    initName: '',
    initImgSmall: 'string',
    initImgBig: bossArr[0],
    initConstitution: 10,
    initDexterety: 10,
    initStrength: 10,
    initCharm: 10,
    initIntelligent: 10,
    initWisdom: 10,
    initGold: 175,
    initSkills: []
}

export const characterStatsArr = [rogueStats, mageStats, warriorStats, defaultStats]

function statCalc(charStats: ICharacterStats, raceStats: object) {
    const statsWithMod = { ...charStats, ...raceStats }

    const newStats = {
        ...charStats,
        initConstitution: charStats.initConstitution + statsWithMod.initConstitution,
        initDexterety: charStats.initDexterety + statsWithMod.initDexterety,
        initStrength: charStats.initStrength + statsWithMod.initStrength,
        initCharm: charStats.initCharm + statsWithMod.initCharm,
        initIntelligent: charStats.initIntelligent + statsWithMod.initIntelligent,
        initWisdom: charStats.initWisdom + statsWithMod.initWisdom
    }

    return newStats
}

export interface ICreationParams {
    name: string
    characterClass: string
    activeRace: number
    img: string
    icon: string
    skills: ISkill[]
}

export function createNewCharacter(creationParams: ICreationParams) {
    switch (creationParams.characterClass) {
        case WARRIOR_CLASS:
            return new Warrior({ ...statCalc(warriorStats, returnRaceMod(characterRace[creationParams.activeRace])), initName: creationParams.name, initImgBig: creationParams.img, initImgSmall: creationParams.icon, initSkills: creationParams.skills })
        case MAGE_CLASS:
            return new Mage({ ...statCalc(mageStats, returnRaceMod(characterRace[creationParams.activeRace])), initName: creationParams.name, initImgBig: creationParams.img, initImgSmall: creationParams.icon, initSkills: creationParams.skills })
        case ROGUE_CLASS:
            return new Rogue({ ...statCalc(rogueStats, returnRaceMod(characterRace[creationParams.activeRace])), initName: creationParams.name, initImgBig: creationParams.img, initImgSmall: creationParams.icon, initSkills: creationParams.skills })
        default:
            return new Character({ ...statCalc(warriorStats, returnRaceMod(characterRace[creationParams.activeRace])), initName: creationParams.name, initImgBig: creationParams.img, initImgSmall: creationParams.icon, initSkills: creationParams.skills })
    }
}

function createEnemy() {
    switch (Math.floor(Math.random() * (2 - 0 + 1) + 0)) {
        case 0:
            return new Warrior({ ...warriorStats, initName: "", initIsNpc: true })
        case 1:
            return new Rogue({ ...rogueStats, initName: "", initIsNpc: true })
        case 2:
            return new Mage({ ...mageStats, initName: "", initIsNpc: true })
        default:
            return new Character({ ...warriorStats, initName: "", initIsNpc: true })
    }
}

function createBoss() {
    return new Warrior({ ...bossStats, initName: "BOSS", initIsNpc: true })
}

export function createEnemyArr(difficulty: TEnemydifficulty = "easy") {
    switch (difficulty) {
        case "medium":
            return [createEnemy(), createEnemy()]
        case "high":
            return [createEnemy(), createEnemy(), createEnemy()]
        case "boss":
            return [createBoss()]
        case "easy":
        default:
            return [createEnemy()]
    }
}

export function countStatMod(stat: number) {
    return stat % 2 == 0 ? (stat - 10) / 2 : (stat - 11) / 2
}