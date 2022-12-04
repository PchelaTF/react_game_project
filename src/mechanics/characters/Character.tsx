import { equal } from 'assert'
import {Armor, initArmor} from '../../mechanics/items/Armor'

interface IEequipment {
    armor: Armor
}

export interface ICharacterStats {
    initHp: number,
    initAttack: number,
    initIsNpc: boolean,
    initName: string,
    initImgSmall: string,
    initImgBig: string,
    initDexterety: number,
    initStrength: number,
    initConstitution: number,
    initWisdom: number,
    initCharm: number,
    initIntelligent: number,
    initGold: number,
    initSkillImgs: string[]
}
export default class Character {
    private hp: number
    private maxHp: number
    private armor: number
    private attack: number
    private isNpc: boolean
    private name: string
    private imgSmall: string
    private imgBig: string
    private skillImgs: string[]
    private constitution: number
    private dexterety : number
    private intelligent: number
    protected strength: number
    protected damage: number
    protected gold: number
    protected skillsCooldown: number[]
    protected equipment: IEequipment

    constructor(characterStats: ICharacterStats) {
        this.constitution = characterStats.initConstitution
        this.dexterety = characterStats.initDexterety
        this.hp = this.calcMod(this.constitution) + characterStats.initHp
        this.armor = this.calcMod(this.dexterety) + 10
        this.strength = characterStats.initStrength
        this.intelligent = characterStats.initIntelligent
        this.attack = characterStats.initAttack
        this.maxHp = this.hp
        this.isNpc = characterStats.initIsNpc
        this.name = characterStats.initName
        this.imgSmall = characterStats.initImgSmall
        this.imgBig = characterStats.initImgBig
        this.damage = 8
        this.gold = characterStats.initGold
        this.skillImgs = characterStats.initSkillImgs
        this.skillsCooldown = [0,0,0,0]
        this.equipment = {armor: new Armor(initArmor)}
    }

    setHp(newHp: number) {
        this.hp = newHp
    }

    getHp() {
        return this.hp
    }

    resetHp() {
        this.hp = this.maxHp
    }

    getAttack() {
        return Math.floor(Math.random() * (20 - 1 + 1) + 1) + this.attack + this.calcMod(this.strength)
    }

    getArmor() {
        return this.armor + this.equipment.armor.definitionArmorValue()
    }

    getImgSmall() { return this.imgSmall }

    getImgBig() { return this.imgBig }

    getName() {
        return this.name
    }
    
    getMaxHp() {return this.maxHp}

    selfHeal(value: number) {
        if (this.hp + value > this.maxHp) {
            this.hp = this.maxHp
        }
        else {
            this.hp = this.hp + value
        }
    }

    getIsNpc() {
        return this.isNpc 
    }

    getGold() {
        return this.gold
    }

    setGold(newGold: number) {
        this.gold = newGold
    }

    getInt() {
        return this.intelligent
    }

    getSkillImgs() {
        return this.skillImgs
    }

    getDamage() {
        // return this.equipment.weapon ? this.equipment.weapon.getDamage() : this.damage
    }

    dealDamage(dmgToCharacter: Character) {
        this.decSkillsCooldown()
        const dmg = Math.floor(Math.random() * (this.damage - 1 + 1) + 1) + this.calcMod(this.strength)
        if(this.getAttack() > dmgToCharacter.getArmor())
            dmgToCharacter.setHp(dmgToCharacter.getHp() - dmg)
        else (console.log(this.name + " is missed with "+ dmg + "against: "+ dmgToCharacter.getArmor()))
    }

    firstSkill(dmgToCharacter: Character) {}

    secondSkill(dmgToCharacter: Character) {}

    thirdSkill(dmgToCharacter: Character) {}

    getskillsCooldown () {
        return this.skillsCooldown
    }

    resetSkillsCooldowm() {
        this.skillsCooldown = [0,0,0,0]
    }

    decSkillsCooldown() {
        for(let i = 0; i < this.skillsCooldown.length; i++) {
            if(this.skillsCooldown[i] > 0)
                this.skillsCooldown[i]--
        }
    }

    setSkillCooldown(index: number, cooldownValue: number) {
        this.skillsCooldown[index] = cooldownValue
    }

    doNpcLogic(playerCharacter: Character) {
        if (this.hp <= 0)
            return
        this.dealDamage(playerCharacter)
    }

    calcMod(ability: number) {
        return ability % 2 == 0 ? (ability - 10) / 2 : (ability - 11) / 2
    }

    addEquippedArmor(item: Armor) {
        this.equipment.armor = item
    }

    getEquipment() {
        return this.equipment
    }
}