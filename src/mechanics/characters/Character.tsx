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
    initGold: number
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
    private selfHealCount: number
    private isDead: boolean
    private constitution: number
    private dexterety : number
    private strength: number
    protected damage: number
    protected gold: number
    // initHp: number, initArmor: number, initAttack: IAttack, initIsNpc: boolean = false, initActionPoints: number, initName?: string
    constructor(characterStats: ICharacterStats) {
        this.constitution = characterStats.initConstitution
        this.dexterety = characterStats.initDexterety
        this.hp = this.calcMod(this.constitution) + characterStats.initHp
        this.armor = this.calcMod(this.dexterety) + 10
        this.strength = characterStats.initStrength
        this.attack = characterStats.initAttack
        this.maxHp = this.hp
        this.isNpc = characterStats.initIsNpc
        this.name = characterStats.initName
        this.imgSmall = characterStats.initImgSmall
        this.imgBig = characterStats.initImgBig
        this.selfHealCount = 0
        this.isDead = false
        this.damage = 8
        this.gold = characterStats.initGold
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

    getGold() {
        return this.gold
    }

    setGold(newGold: number) {
        this.gold = newGold
    }

    dealDamage(dmgToCharacter: Character) {
        const dmg = Math.floor(Math.random() * (this.damage - 1 + 1) + 1) + this.calcMod(this.strength)
        if(this.getAttack() > dmgToCharacter.getArmor())
            dmgToCharacter.setHp(dmgToCharacter.getHp() - dmg)
        else (console.log(this.name + " is missed with "+ dmg + "against: "+ dmgToCharacter.getArmor()))
    }

    firstSkill(dmgToCharacter: Character) {}

    doNpcLogic(playerCharacter: Character) {
        if (this.hp <= 0)
            return
        if(this.getHp() < this.maxHp / 2 && this.selfHealCount < 1)
            this.selfHeal(7)
        else 
            this.dealDamage(playerCharacter)
    }

    calcMod(ability: number) {
        return ability % 2 == 0 ? (ability - 10) / 2 : (ability - 11) / 2
    }
}