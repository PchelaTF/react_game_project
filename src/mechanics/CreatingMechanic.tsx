import Character, { ICharacterStats } from "./characters/Character";
import { Mage } from "./characters/Mage";
import { Rogue } from "./characters/Rogue";
import { Warrior } from "./characters/Warrior";
import { bossArr, raceFullArr } from '../components/CreateCharacter/Images';

const WARRIOR_CLASS: TClasses = "warrior"
const MAGE_CLASS: TClasses = "mage"
const ROGUE_CLASS: TClasses = "rogue"

export type TRace = "elf" | "halfling" | "demon"
export type TClasses = "warrior" | "mage" | "rogue"
export type TEnemydifficulty = "easy" | "medium" | "high" | "boss"

export const characterClasses: string[] = [ROGUE_CLASS, MAGE_CLASS, WARRIOR_CLASS]
export const characterRace: TRace[] = ["elf", "halfling", "demon"]

const returnRaceMod = (race: TRace) => {
    switch(race) {
        case "elf":     
            return {
                initConstitution: -2,
                initDexterety: 2,
                initStrength: 0,
                initCharisma: 0,
                initWisdom: 0,
                initIntilegent: 2
            }
        case "demon":
            return {
                initConstitution: 0,
                initDexterety: 2,
                initStrength: 0,
                initCharisma: -2,
                initWisdom: 0,
                initIntilegent: 2
            }
        case "halfling":
            return {
                initConstitution: 0,
                initDexterety: 2,
                initStrength: -2,
                initCharisma: 2,
                initWisdom: 0,
                initIntilegent: 0
            }
        default: 
            return {}
    }
}

const warriorStats: ICharacterStats = {
    initHp: 12,
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
    initSkillImgs: []
}

const mageStats: ICharacterStats = {
    initHp: 8,
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
    initSkillImgs: []
}

const rogueStats: ICharacterStats = {
    initHp: 10,
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
    initSkillImgs: []
}

const defaultStats: ICharacterStats = {
    initHp: 12,
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
    initSkillImgs: []
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
    initSkillImgs: []
}

export const characterStatsArr = [rogueStats, mageStats, warriorStats, defaultStats] 

function objSum(first: ICharacterStats, second: object) {
    const newSecond = {...first, ...second}
    return {...first, 
        initConstitution: first.initConstitution + newSecond.initConstitution,
        initDexterety: first.initDexterety + newSecond.initDexterety,
        initStrength: first.initStrength + newSecond.initStrength,
        initCharm: first.initCharm + newSecond.initCharm,
        initIntelligent: first.initIntelligent + newSecond.initIntelligent,
        initWisdom: first.initWisdom + newSecond.initWisdom
    }
}

export function createNewCharacter(name: string, characterClass: string, activeRace: number, img: string, icon: string, skillImgs: string[]) {
    switch (characterClass) {
        case WARRIOR_CLASS:
            // return new Warrior(25, 10, { min: 10, max: 25 }, name, false, 2)
            return new Warrior({...objSum(warriorStats, returnRaceMod(characterRace[activeRace])), initName: name, initImgBig: img, initImgSmall: icon, initSkillImgs: skillImgs})
        case MAGE_CLASS:
            // return new Mage(10, 8, { min: 5, max: 15 }, name, false, 2)
            return new Mage({...objSum(mageStats, returnRaceMod(characterRace[activeRace])), initName: name, initImgBig: img, initImgSmall: icon, initSkillImgs: skillImgs})
        case ROGUE_CLASS:
            // return new Rogue(12, 10, { min: 10, max: 30 }, name, false, 2)
            return new Rogue({...objSum(rogueStats, returnRaceMod(characterRace[activeRace])), initName: name, initImgBig: img, initImgSmall: icon, initSkillImgs: skillImgs})
        default:
            // return new Character(10, 10, { min: 10, max: 10 }, false, 2, name)
            return new Character({...objSum(warriorStats, returnRaceMod(characterRace[activeRace])), initName: name, initImgBig: img, initImgSmall: icon, initSkillImgs: skillImgs})
    }
}

function createEnemy() {
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

function createBoss() {
    return new Warrior({...bossStats, initName: "BOSS", initIsNpc: true})
}

export function createEnemyArr(difficulty: TEnemydifficulty = "easy") {
    switch(difficulty) {
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