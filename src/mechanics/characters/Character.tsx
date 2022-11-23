export interface IAttack {
    min: number,
    max: number
}
export interface ICharacterStats {
    initHp: number,
    initArmor: number,
    initAttack: IAttack,
    initIsNpc: boolean,
    initActionPoints: number,
    initName: string,
    initImgSmall: string,
    initImgBig: string
}
export default class Character {
    private hp: number
    private maxHp: number
    private armor: number
    private attack: IAttack
    private isNpc: boolean
    private actionPoints: number
    private name: string
    private imgSmall: string
    private imgBig: string
    private selfHealCount: number
    private isDead: boolean
    // initHp: number, initArmor: number, initAttack: IAttack, initIsNpc: boolean = false, initActionPoints: number, initName?: string
    constructor(characterStats: ICharacterStats) {
        this.hp = characterStats.initHp
        this.maxHp = characterStats.initHp
        this.armor = characterStats.initArmor
        this.attack = characterStats.initAttack
        this.isNpc = characterStats.initIsNpc
        this.actionPoints = characterStats.initActionPoints
        this.name = characterStats.initName
        this.imgSmall = characterStats.initImgSmall
        this.imgBig = characterStats.initImgBig
        this.selfHealCount = 0
        this.isDead = false
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
        return Math.floor(Math.random() * (this.attack.max - this.attack.min + 1) + this.attack.min)
    }

    getArmor() {
        return this.armor
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
            console.log("max healed")
        }
        else {
            this.hp = this.hp + value
            console.log("healed on: " + value + "hp")
        }
        this.selfHealCount = 1
    }

    getIsNpc() {
        return this.isNpc 
    }

    dealDamage(dmgToCharacter: Character) {
        const dmg = this.getAttack() - dmgToCharacter.getArmor()
        dmgToCharacter.setHp(dmgToCharacter.getHp() - dmg)
    }

    firstSkill(dmgToCharacter: Character) {
        const dmg = this.getAttack() - dmgToCharacter.getArmor()
        dmgToCharacter.setHp(dmgToCharacter.getHp() - dmg)
    }

    doNpcLogic(playerCharacter: Character) {
        if (this.hp <= 0)
            return
        if(this.getHp() < this.maxHp / 2 && this.selfHealCount < 1)
            this.selfHeal(7)
        else 
            this.dealDamage(playerCharacter)
    }
}