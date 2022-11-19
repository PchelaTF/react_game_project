export interface IAttack {
    min: number,
    max: number
}
export default class Character {
    private hp: number
    private maxHp: number
    private armor: number
    private attack: IAttack
    private isNpc: boolean
    private actionPoints: number
    private name?: string
    private selfHealCount: number

    constructor(initHp: number, initArmor: number, initAttack: IAttack, initIsNpc: boolean = false, initActionPoints: number, initName?: string) {
        this.hp = initHp
        this.maxHp= initHp
        this.armor = initArmor
        this.attack = initAttack
        this.isNpc = initIsNpc
        this.actionPoints = initActionPoints
        this.name = initName
        this.selfHealCount = 0
    }

    setHp(newHp: number) {
        this.hp = newHp
    }

    getHp() {
        return this.hp
    }

    getAttack() {
        return Math.floor(Math.random() * (this.attack.max - this.attack.min + 1) + this.attack.min)
    }

    getArmor() {
        return this.armor
    }

    selfHeal(value: number) {
        if(this.hp + value > this.maxHp){
            this.hp = this.maxHp
            console.log("max healed" )
        }
        else {
            this.hp = this.hp + value
            console.log("healed on: "+ value + "hp")
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

    doNpcLogic(playerCharacter: Character) {
        if(this.hp <= 0)
            return
        if(this.getHp() < this.maxHp / 2 && this.selfHealCount < 1)
            this.selfHeal(7)
        else 
            this.dealDamage(playerCharacter)
    }
}