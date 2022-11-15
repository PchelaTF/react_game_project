export interface IAttack {
    min: number,
    max: number
}

export default class Character {
    private hp: number
    private armor: number
    private attack: IAttack
    private isPlayer?: boolean

    constructor(initHp: number, initArmor: number, initAttack: IAttack) {
        this.hp = initHp
        this.armor = initArmor
        this.attack = initAttack
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

    getIsPlayer() {
        return this.isPlayer
    }

    selfHeal(value: number) {
        this.hp = this.hp + value
    }

    dealDamage(dmgToCharacter: Character) {
        const dmg = this.getAttack() - dmgToCharacter.getArmor()
        dmgToCharacter.setHp(dmgToCharacter.getHp() - dmg)
    }
}